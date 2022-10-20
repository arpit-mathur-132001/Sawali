const express = require("express");
const router = express.Router();

const Codes = require("../models/Codes");

// @route   POST /api/delete_code
// @desc    Create short URL
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  await Codes.findByIdAndDelete(id);
  res.redirect("/dashboard");
});

module.exports = router;
