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
  console.log(req.headers);
  console.log("TAGID", tagid);

  try {
    const userTagToDelete = await UserTag.findOne({ where: parseInt(tagid) });

    if (!userTagToDelete) {
      res.status(404).send("UserTag to remove not found.");
    }

    const deletedUserTag = await userTagToDelete.destroy();

    res.json(`Usertag with id:${tagid} has been removed`);
  } catch (e) {
    next(e);
    return res.status(400).send({ message: "Could not delete specified tag" });
  }
});

module.exports = router;
