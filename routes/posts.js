const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.send("Routing Test");
});

router.post("/", async (req, res) => {
  const post = new Post ({
    title: req.body.title,
    description: req.body.description,
  })
  try {
    const savePost = await post.save();
    res.status(200).json(savePost);
  } catch (error) {
    res.json({message: error})
  }
  
});

module.exports = router;
