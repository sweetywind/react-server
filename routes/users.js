import express from "express";
import User from "../schemas/user";

var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const users = await User.find({});
  res.json(users);
});

router.post("/", (req, res, next) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
  });

  user.save().then((result) => {
    console.log(result);
    res.status(201).json(result);
  });
});

router.patch("/:id", async (req, res, next) => {
  await User.findOneAndUpdate(
    { _id: req.params.id },
    { name: req.body.name }
  ).then((result) => {
    console.log(result);
    res.json(result);
  });
});

router.delete("/:id", async (req, res, next) => {
  await User.findOneAndRemove({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
