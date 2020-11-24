const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Profile = require("../models/").profile;
const SpecializationTag = require("../models/").specializationTag;
console.log("WHAT IS SPECIALIZATIONTAG", SpecializationTag);

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

router.get("/:id/profile", async (req, res, next) => {
  const id = req.params;
  console.log("PARAMS", req.params, "ID", id);

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
