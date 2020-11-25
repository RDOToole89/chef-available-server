const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Profile = require("../models/").profile;
const UserTag = require("../models").userTag;
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
    next(e);
    return res.status(400).send({ message: "Unable to fetch users" });
  }
});

module.exports = router;

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
    next(e);
    return res.status(400).send({ message: "User not found" });
  }
});

router.patch("/:id/profile", async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
    return res.status(400).send({ message: "User not found" });
  }
});

router.delete("/:id", async (req, res, next) => {
  const { userId, tagId } = req.headers;

  try {
    const user = await User.findOne({
      where: userId,
    });
  } catch (e) {
    next(e);
    return res.status(400).send({ message: "Could not delete specified tag" });
  }
});
