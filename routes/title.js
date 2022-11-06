const express = require("express");
const router = express.Router();

const Title = require("../models/Titles");

// @route   POST /api/title/
// @desc    Create short URL
router.post("/", async (req, res) => {
  const newTitle = req.body.title;
  const user = req.user.id;
  try {
    const title = new Title({
      Title: newTitle,
      user,
    });

    await title.save();

    res.redirect("/sawali");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
