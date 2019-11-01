const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Call back all the posts
router.get("/", async (req, res) => {
  //res.send("Welcome to posts page !");

  try {
    const posts = await Post.find();
    res.json(posts);
    //console.log(res.json(posts));
  } catch (error) {
    res.json({ message: error });
    //console.log(res.json({ message: error }));
  }
});

// Submit a post
router.post("/", async (req, res) => {
  //   console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
    //console.log(res.json(savedPost));
  } catch (error) {
    res.json({ message: error });
    //console.log(res.json({ message: error }));
  }
});

// Specific post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (error) {
    res.json({ message: error });
  }
});

// Detele post
router.delete("/:postId", (req, res) => {
  try {
    const removedPost = Post.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update post
router.patch("/:postId", async (req, res) => {
  //req.params.postId
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
