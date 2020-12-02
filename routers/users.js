const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const { cloudinary } = require("../config/cloudinary");
const AvailableDate = require("../models/").availableDate;
const Message = require("../models/").message;
const Booking = require("../models/").booking;
const Reviews = require("../models/").profileReview;
const User = require("../models/").user;
const Profile = require("../models/").profile;
const SpecializationTag = require("../models/").specializationTag;
const UserTag = require("../models/").userTag;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: { userType: "Chef" },
      attributes: { exclude: ["password"] },
      include: [{ model: Profile, include: [SpecializationTag, Reviews, AvailableDate] }],
    });

    res.json(users);
  } catch (e) {
    console.log(e);
    return res.status(400).send({ message: "Unable to fetch users" });
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params;

  try {
    const user = await User.findOne({
      where: id,
      attributes: { exclude: ["password"] },
      include: [
        {
          model: Profile,
          include: [
            { model: SpecializationTag, through: { model: UserTag } },
            { model: AvailableDate },
          ],
        },
      ],
    });

    res.json(user);
  } catch (e) {
    return res.status(400).send({ message: "User not found" });
  }
});

router.put("/profile", async (req, res, next) => {
  const {
    profileId,
    userId,
    yearsOfExperience,
    hourlyRate,
    position,
    city,
    description,
  } = req.body;

  try {
    const userToUpdate = await User.findByPk(userId);
    const profileToUpdate = await Profile.findByPk(profileId);

    if (userToUpdate && profileToUpdate) {
      try {
        const updatedUser = await userToUpdate.update({
          ...userToUpdate,
          city: city,
        });

        const updatedProfile = await profileToUpdate.update({
          ...profileToUpdate,
          yearsOfExperience: parseInt(yearsOfExperience),
          hourlyRate: parseFloat(hourlyRate),
          position: position,
          description: description,
        });

        res.json({ user: updatedUser, profile: updatedProfile });
      } catch (e) {
        return res.status(400).send({ message: "User not found" });
      }
    }
  } catch (e) {
    next(e);
  }
});

router.post("/profile/upload", async (req, res, next) => {
  const fileString = req.body.data;
  const { userId } = req.body;
  console.log(userId);

  try {
    const uploadResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: "dev_setups",
    });

    if (uploadResponse) {
      try {
        const profileToUpdate = await Profile.findByPk(userId);
        console.log("PROFILE", profileToUpdate);

        if (profileToUpdate) {
          try {
            const updatedProfile = await profileToUpdate.update({
              ...profileToUpdate,
              imgUrl: uploadResponse.url,
            });

            if (updatedProfile) {
              return res.status(200).send("Profile picture uploaded");
            }
          } catch (e) {
            console.log(e);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong, file was not succesfully uploaded" });
  }
});

router.get("/:id/profile/message", async (req, res, next) => {
  const id = parseInt(req.params.id);

  try {
    const messages = await Message.findAll({
      where: { recipientUserId: id },
      include: [
        { model: User, attributes: ["id", "firstName", "lastName", "email"] },
        { model: Booking },
      ],
    });

    res.json(messages);
  } catch (e) {
    next(e);
  }
});

router.post("/:id/profile/message", async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { title, content, recipientUserId, date, isReply } = req.body;

  try {
    const createMessage = await Message.create({
      userId: id,
      title,
      content,
      recipientUserId,
      date: !date ? null : date,
    });

    if (date && !isReply) {
      try {
        const newBooking = await Booking.create({
          messageId: createMessage.id,
          userId: id,
          profileId: recipientUserId,
          accepted: false,
          date,
        });
      } catch (e) {
        next(e);
      }
    }

    res.json({ newMessage: createMessage });
  } catch (e) {
    next(e);
  }
});

router.put("/:id/profile/message/:messageId", async (req, res, next) => {
  const id = parseInt(req.params.id);
  const messageId = parseInt(req.params.messageId);

  try {
    const messageToUpdate = await Message.findByPk(messageId);

    if (messageToUpdate) {
      try {
        const updatedMessage = await messageToUpdate.update({
          ...messageToUpdate,
          new: false,
        });
        if (updatedMessage) {
          return res.json(`Message with id: ${messageId} has successfully been updated`);
        }
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:id/profile/message/:messageId", async (req, res, next) => {
  const id = parseInt(req.params.id);
  const messageId = parseInt(req.params.messageId);

  try {
    const messageToDelete = await Message.findByPk(messageId);

    if (messageToDelete) {
      try {
        const deletedMessage = await messageToDelete.destroy();
        if (deletedMessage) {
          return res.json(`Requested message: ${deletedMessage} has successfully been deleted`);
        }
      } catch (e) {
        console.log(e);
      }
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:id/profile/reviews", async (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const reviews = await Reviews.findAll({
      where: { profileId: id },
      include: [
        { model: User, attributes: ["id", "firstName", "lastName", "email", "businessName"] },
      ],
    });

    if (reviews) {
      res.json(reviews);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/:id/profile/reviews", async (req, res, next) => {
  const { title, content, userId, reviewScore } = req.body;

  console.log("WHATS IN REQ.BODY", req.body);

  const id = parseInt(req.params.id);

  try {
    const newReview = await Reviews.create({ profileId: id, title, content, userId, reviewScore });

    if (newReview) {
      res.json(newReview);
    }
  } catch (e) {
    next(e);
  }
});

router.post("/profile/availability", async (req, res, next) => {
  const { availableDate, profileId } = req.body;

  try {
    const newAvailableDate = await AvailableDate.create({ profileId, date: availableDate });

    res.json(newAvailableDate);
  } catch (e) {
    next(e);
  }
});

router.delete("/profile/availability", async (req, res, next) => {
  const { availabledate, profileid } = req.headers;

  try {
    const dateToDelete = await AvailableDate.findOne({
      where: { profileId: profileid, date: availabledate },
    });

    const deletedDate = await dateToDelete.destroy();

    if (deletedDate) {
      return res.json(`Requested date: ${availabledate} has successfully been deleted`);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
