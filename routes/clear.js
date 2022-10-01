const express = require("express");
const router = express.Router();

const Notes = require("../models/Notes");

// @route   POST /api/clear/
// @desc    Create short URL
router.post("/", async (req, res) => {
  try {
    await Notes.find({ user: req.user.id }).deleteMany({});
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
