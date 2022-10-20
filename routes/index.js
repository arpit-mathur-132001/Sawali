const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const Notes = require("../models/Notes");
const Codes = require("../models/Codes");
const { json } = require("express");

// @desc Login/Landing page
// @route GET /
router.get("/", ensureGuest, async (req, res) => {
  res.render("index");
});

// @desc Dashboard
// @route GET /dashboard
router.get("/dashboard", ensureAuth, async (req, res) => {
  let notes = await Notes.find({ user: req.user.id }).lean();
  let codes = await Codes.find({ user: req.user.id }).lean();

  // let codesArr = [];
  // if (codes.length !== 0) {
  //   codesArr.length = notes.length;
  //   console.log(codesArr.length);
  //   for (let i = 0; i < codes.length; i++) {
  //     let newCode = [codes[i].code, codes[i].input, codes[i].output];
  //     codesArr[codes[i].number] = newCode;
  //   }
  //   codes = [codes[0].code, codes[0].input, codes[0].output];
  // }

  // codesArr = JSON.parse(JSON.stringify(codesArr));

  let flag = 0;

  console.log(codes);
  res.render("dashboard", {
    notes,
    codes,
    flag,
  });
});

module.exports = router;
