const express = require("express");
const router = express.Router();

const Codes = require("../models/Codes");

// @route   POST /api/note/
// @desc    Create short URL
router.post("/:id", async (req, res) => {
  let code = req.body.code.toString().replaceAll('"', '\\"');
  const input = req.body.input;
  const output = req.body.output;
  const number = req.body.number;
  const user = req.user.id;
  const title = req.params["id"];
  try {
    const newCode = new Codes({
      code,
      input,
      output,
      number,
      user,
      title,
      date: new Date(),
    });

    await newCode.save();

    res.redirect(`/dashboard/${title}`);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;
