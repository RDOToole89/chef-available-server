const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const { cloudinary } = require("../config/cloudinary");
const AvailableDate = require("../models/").availableDate;
const Message = require("../models/").message;
const Booking = require("../models/").booking;
const User = require("../models/").user;
const Profile = require("../models/").profile;
const SpecializationTag = require("../models/").specializationTag;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: { userType: "Chef" },
      attributes: { exclude: ["password"] },
      include: [{ model: Profile, include: [SpecializationTag] }],
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
      include: [{ model: Profile, include: [SpecializationTag, AvailableDate] }],
      // include: [{ model: Profile, attributes: { exclude: ["description"] } }],
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
});

router.post("/profile/upload", async (req, res, next) => {
  const fileString = req.body.data;

  try {
    const uploadResponse = await cloudinary.uploader.upload(fileString, {
      upload_preset: "dev_setups",
    });

    if (uploadResponse) {
      try {
        const profileToUpdate = await Profile.findByPk(1);

        if (profileToUpdate) {
          try {
            await profileToUpdate.update({ ...profileToUpdate, imgUrl: uploadResponse.url });
          } catch (e) {
            console.log(e);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }

    console.log("UPLOADRESPONSE", uploadResponse);
    res.json({ message: "File uploaded!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong, file was not succesfully uploaded" });
  }
});

router.post("/:id/profile/message", async (req, res, next) => {
  const id = parseInt(req.params.id);
  const { title, content, recipientUserId, date } = req.body;
  console.log("WHAT IS REQ.BODY?", req.body);

  try {
    const createMessage = await Message.create({
      userId: id,
      title,
      content,
      recipientUserId,
      date: !date ? null : date,
    });

    if (date) {
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
