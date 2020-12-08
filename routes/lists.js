import express from "express";
import List from "../schemas/list";

var router = express.Router();

/* GET lists listing. */
router.get("/", async (req, res, next) => {
  const lists = await List.find({});
  res.json(lists);
});

router.post("/", (req, res, next) => {
  const list = new List({
    title: req.body.title,
    url: req.body.url,
    seller: req.body.seller,
  });

  list.save().then((result) => {
    console.log(result);
    res.status(201).json(result);
  });
});

router.patch("/:id", async (req, res, next) => {
  await List.findOneAndUpdate(
    { _id: req.params.id },
    { title: req.body.title }
  ).then((result) => {
    console.log(result);
  });
  await List.findOneAndUpdate(
    { _id: req.params.id },
    { url: req.body.url }
  ).then((result) => {
    console.log(result);
  });
  await List.findOneAndUpdate(
    { _id: req.params.id },
    { seller: req.body.seller }
  ).then((result) => {
    console.log(result);
    res.json(result);
  });
});

router.delete("/:id", async (req, res, next) => {
  await List.findOneAndRemove({ _id: req.params.id }).then((result) => {
    console.log(result);
    res.json(result);
  });
});

module.exports = router;
