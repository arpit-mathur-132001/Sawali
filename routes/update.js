const express = require("express");
const router = express.Router();

const Notes = require("../models/Notes");

// @route   POST /api/update/
// @desc    Create short URL
router.post("/:id/:_id/:titleName", async (req, res) => {
  const question = req.body.ques;
  const answer = req.body.ans;
  const id = req.params.id;

  const title = req.params["_id"];
  const titleName = req.params["titleName"];
  try {
    await Notes.findByIdAndUpdate(id, {
      question: question,
      answer: answer,
    });
    res.redirect(`/dashboard/${title}?${titleName}`);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
