const express = require("express");
const router = express.Router();

const Codes = require("../models/Codes");

// @route   POST /api/delete_code
// @desc    Create short URL
router.post("/:id/:_id/:titleName/:activeCard", async (req, res) => {
  const id = req.params["id"];
  const titleName = req.params["titleName"];
  const activeCard = req.params["activeCard"];
  await Codes.findByIdAndDelete(id);

  const title = req.params["_id"];
  res.redirect(`/dashboard/${title}?${titleName}?${activeCard}`);
});

module.exports = router;
