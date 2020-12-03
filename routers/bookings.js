const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Booking = require("../models/").booking;
const AvailableDate = require("../models/").availableDate;
const User = require("../models/").user;

const router = new Router();

router.get("/:id", async (req, res, next) => {
  // date received / booking date / who requested the booking /

  const { id } = req.params;
  const { userType } = req.body;

  console.log("REQBODY", req.body);

  if (userType === "chef") {
    try {
      const bookings = await Booking.findAll({
        where: { profileId: parseInt(id) },
        include: [
          {
            model: User,
            attributes: ["id", "firstName", "lastName", "businessName", "email"],
          },
        ],
      });

      res.json(bookings);
    } catch (e) {
      next(e);
    }
  } else {
    try {
      const bookings = await Booking.findAll({
        where: { userId: parseInt(id) },
      });

      const jsonString = JSON.stringify(bookings);
      const bookingsNew = JSON.parse(jsonString);

      let arrToReturn = [];

      for (let i = 0; i < bookingsNew.length; i++) {
        const chef = await User.findOne({
          where: { id: bookingsNew[i].profileId },
          attributes: ["id", "firstName", "lastName", "businessName", "email"],
        });
        arrToReturn.push({ ...bookingsNew[i], chef: chef.dataValues });
      }

      res.status(200).json(arrToReturn);
    } catch (e) {
      next(e);
    }
  }
});

router.put("/", async (req, res, next) => {
  const { bookingId, bookingDate, userId } = req.body;

  try {
    const bookingToUpdate = await Booking.findByPk(bookingId);

    if (bookingToUpdate) {
      try {
        const updatedBooking = await bookingToUpdate.update({
          ...bookingToUpdate,
          accepted: !bookingToUpdate.accepted,
        });

        if (updatedBooking && updatedBooking.accepted) {
          try {
            const availableDateToDelete = await AvailableDate.findOne({
              where: { date: bookingDate, profileId: userId },
            });

            if (availableDateToDelete) {
              try {
                const deletedDate = await availableDateToDelete.destroy();

                if (deletedDate) {
                  return res.status(200).send(`Available date: ${bookingDate} has been removed`);
                }
              } catch (e) {
                next(e);
              }
            }
          } catch (e) {
            next(e);
          }
        }

        res.status(200).send(`Booking with id: ${bookingId} has succesfully been updated`);
      } catch (e) {
        res.status(400).send(`Something went wrong booking did not update`);
      }
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;

  try {
    const bookingToDelete = await Booking.findByPk(id);

    if (bookingToDelete) {
      try {
        const deletedBooking = await bookingToDelete.destroy();

        if (deletedBooking) {
          return res.status(200).send(`Booking with id: ${id} has successfully been deleted`);
        }
      } catch (e) {
        next(e);
      }
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
