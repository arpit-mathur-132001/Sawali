const express = require("express");
const router = express.Router();

const Notes = require("../models/Notes");

// @route   POST /api/update/
// @desc    Create short URL
router.post("/:id/:_id", async (req, res) => {
  const question = req.body.ques;
  const answer = req.body.ans;
  const id = req.params.id;

  const title = req.params["_id"];
  try {
    await Notes.findByIdAndUpdate(id, {
      question: question,
      answer: answer,
    });
    res.redirect(`/dashboard/${title}`);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
