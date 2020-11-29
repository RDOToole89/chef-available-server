const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Message = require("../models/").message;
const Booking = require("../models/").booking;
const User = require("../models/").user;

const router = new Router();

router.get("/:id", async (req, res, next) => {
  // date received / booking date / who requested the booking /

  const { id } = req.params;

  try {
    const bookings = await Booking.findAll({
      where: { profileId: parseInt(id) },
      include: [
        { model: User, attributes: ["id", "firstName", "lastName", "businessName", "email"] },
      ],
    });

    res.json(bookings);
  } catch (e) {
    next(e);
  }
});

router.put("/", async (req, res, next) => {
  const { id } = req.body;

  try {
    const bookingToUpdate = await Booking.findByPk(id);

    const updatedBooking = await bookingToUpdate.update({
      ...bookingToUpdate,
      accepted: !bookingToUpdate.accepted,
    });

    console.log(updatedBooking);
    res.json(updatedBooking);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
