const express = require("express");
const router = express.Router();

const Notes = require("../models/Notes");

// @route   POST /api/delete
// @desc    Create short URL
router.post("/:id/:_id/:titleName", async (req, res) => {
  const id = req.params["id"];
  const titleName = req.params["titleName"];
  await Notes.findByIdAndDelete(id);

  const title = req.params["_id"];
  res.redirect(`/dashboard/${title}?${titleName}`);
});

module.exports = router;
