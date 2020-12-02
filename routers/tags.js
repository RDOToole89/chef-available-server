const { Router } = require("express");
const SpecializationTag = require("../models/").specializationTag;
const UserTag = require("../models").userTag;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const tags = await SpecializationTag.findAll();

    if (!tags) {
      return res.status(400).send({ message: "Something went wrong, sorry" });
    }

    res.json(tags);
  } catch (e) {
    next(e);
  }
});

router.delete("/user", async (req, res, next) => {
  const { tagid } = req.headers;

  console.log("TAGID in DELETE ROUTE", tagid);

  try {
    const userTagToDelete = await UserTag.findOne({ where: parseInt(tagid) });
    // console.log("USERTAGTODELETE======", userTagToDelete);

    if (!userTagToDelete) {
      res.status(404).send("UserTag to remove not found.");
    }

    if (userTagToDelete) {
      const deletedUserTag = await userTagToDelete.destroy();
      res.json(`Usertag with id:${tagid} has been removed`);
    }
  } catch (e) {
    return res.status(400).send({ message: "Could not delete specified tag" });
  }
});

router.post("/user", async (req, res, next) => {
  const { tagName, profileId } = req.body;

  const specializationTagExist = await SpecializationTag.findOne({ where: { tagName } });
  const allSpecializationTags = await SpecializationTag.findAll();

  if (specializationTagExist) {
    try {
      const newUserTag = await UserTag.create({
        profileId,
        specializationTagId: specializationTagExist.id,
      });

      res.json(newUserTag);
    } catch (e) {
      next(e);
    }
  } else {
    const newSpecializationTag = await SpecializationTag.create({
      tagName,
    });

    const newUserTag = await UserTag.create({
      profileId: profileId,
      specializationTagId: allSpecializationTags.length + 1,
    });

    res.json({ specialization: newSpecializationTag, userTag: newUserTag });
  }
});

module.exports = router;
