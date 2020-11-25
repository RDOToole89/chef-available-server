const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
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
    return res.status(400).send({ message: "Unable to fetch users" });
  }
});

router.get("/:id", async (req, res, next) => {
  const id = req.params;

  try {
    const user = await User.findOne({
      where: id,
      attributes: { exclude: ["password"] },
      include: [{ model: Profile, include: [SpecializationTag] }],
      // include: [{ model: Profile, attributes: { exclude: ["description"] } }],
    });

    res.json(user);
  } catch (e) {
    return res.status(400).send({ message: "User not found" });
  }
});

router.patch("/profile", async (req, res, next) => {
  const { userId, yearsOfExperience, hourlyRate, position, city, description } = req.body;

  try {
    const userToUpdate = await User.findByPk(userId);
    const profileToUpdate = await Profile.findByPk(userId);

    if (userToUpdate && profileToUpdate) {
      const updatedUser = await userToUpdate.update({
        ...userToUpdate,
        city: city,
      });

      const updatedProfile = await profileToUpdate.update({
        ...profileToUpdate,
        yearsOfExperience,
        hourlyRate,
        position,
        description,
      });

      res.json({ user: updatedUser, profile: updatedProfile });
    }
  } catch (e) {
    return res.status(400).send({ message: "User not found" });
  }
});

module.exports = router;
