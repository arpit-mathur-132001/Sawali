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

  res.render("dashboard", {
    notes,
    codes,
  });
});

module.exports = router;
