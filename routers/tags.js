const { Router } = require("express");
const SpecializationTag = require("../models/").specializationTag;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const tags = await SpecializationTag.findAll();

    console.log(tags);

    if (!tags) {
      return res.status(400).send({ message: "Something went wrong, sorry" });
    }

    res.json(tags);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
