const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const Booking = require("../models/").booking;

const router = new Router();

router.post("/", async (req, res, next) => {
  const { userId, profileId, date } = req.body;

  try {
    const newBooking = await Booking.create({ userId, profileId, accepted: true, date });

    res.json(newBooking);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
