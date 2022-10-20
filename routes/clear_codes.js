const express = require("express");
const router = express.Router();

const Codes = require("../models/Codes");

// @route   POST /api/clear_codes/
// @desc    Create short URL
router.post("/", async (req, res) => {
  try {
    await Codes.find({ user: req.user.id }).deleteMany({});
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
