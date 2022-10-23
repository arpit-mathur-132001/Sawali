const express = require("express");
const router = express.Router();

const Notes = require("../models/Notes");

// @route   POST /api/update/
// @desc    Create short URL
router.post("/:id/:num", async (req, res) => {
  const question = req.body.ques;
  const answer = req.body.ans;
  const id = req.params.id;
  const num = req.params.num;
  try {
    await Notes.findByIdAndUpdate(id, {
      question: question,
      answer: answer,
    });
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
