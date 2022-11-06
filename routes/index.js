const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const Notes = require("../models/Notes");
const Codes = require("../models/Codes");
const Titles = require("../models/Titles");
const { json } = require("express");

// @desc Login/Landing page
// @route GET /
router.get("/", ensureGuest, async (req, res) => {
  res.render("index");
});

router.get("/sawali", ensureAuth, async (req, res) => {
  let titles = await Titles.find({ user: req.user.id }).lean();
  res.render("sawali", {
    titles,
  });
});

// @desc Dashboard
// @route GET /dashboard
router.get("/dashboard/:id", ensureAuth, async (req, res) => {
  let notes = await Notes.find({ title: req.params["id"] }).lean();
  let codes = await Codes.find({ title: req.params["id"] }).lean();
  let titles = await Titles.find({ user: req.user.id }).lean();

  res.render("dashboard", {
    notes,
    codes,
    titles,
  });
});

module.exports = router;
