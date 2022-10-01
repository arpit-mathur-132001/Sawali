const express = require("express");
const router = express.Router();

const Notes = require("../models/Notes");

// @route   POST /api/note/
// @desc    Create short URL
router.post("/", async (req, res) => {
  const question = req.body.ques;
  const answer = req.body.ans;
  const user = req.user.id;
  try {
    const note = new Notes({
      question,
      answer,
      user,
      date: new Date(),
    });

    await note.save();

    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
