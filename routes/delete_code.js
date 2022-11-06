const express = require("express");
const router = express.Router();

const Codes = require("../models/Codes");

// @route   POST /api/delete_code
// @desc    Create short URL
router.post("/:id/:_id", async (req, res) => {
  const id = req.params["id"];
  await Codes.findByIdAndDelete(id);

  const title = req.params["_id"];
  res.redirect(`/dashboard/${title}`);
});

module.exports = router;
