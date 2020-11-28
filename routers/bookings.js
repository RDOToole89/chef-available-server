const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Booking = require("../models/").booking;

const router = new Router();

router.put("/", async (req, res, next) => {
  const { id } = req.body;

  try {
    const bookingToUpdate = await Booking.findByPk(id);

    const updatedBooking = await bookingToUpdate.update({
      ...bookingToUpdate,
      accepted: true,
    });

    console.log(updatedBooking);
    res.json(updatedBooking);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
