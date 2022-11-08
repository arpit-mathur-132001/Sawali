const express = require("express");
const router = express.Router();

const Codes = require("../models/Codes");

// @route   POST /api/clear_codes/
// @desc    Create short URL
router.post("/:id/:titleName", async (req, res) => {
  try {
    const title = req.params["id"];
    const titleName = req.params["titleName"];
    await Codes.find({ title: title }).deleteMany({});
    res.redirect(`/dashboard/${title}?${titleName}`);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
