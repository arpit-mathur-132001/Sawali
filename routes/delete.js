const express = require("express");
const router = express.Router();

const Notes = require("../models/Notes");

// @route   POST /api/delete
// @desc    Create short URL
router.post("/:id", async (req, res) => {
  const { id } = req.params;
  await Notes.findByIdAndDelete(id);
  res.redirect("/dashboard");
});

module.exports = router;
