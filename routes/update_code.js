const express = require("express");
const router = express.Router();

const Codes = require("../models/Codes");

// @route   POST /api/update_code/
// @desc    Create short URL
router.post("/:id/:_id", async (req, res) => {
  let code = req.body.code.toString().replaceAll('"', '\\"');
  const input = req.body.input;
  const output = req.body.output;
  const id = req.params.id;

  const title = req.params["_id"];
  try {
    await Codes.findByIdAndUpdate(id, {
      code: code,
      input: input,
      output: output,
    });
    res.redirect(`/dashboard/${title}`);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
