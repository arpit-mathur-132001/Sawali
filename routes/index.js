const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const Notes = require("../models/Notes");

// @desc Login/Landing page
// @route GET /
router.get("/", ensureGuest, async (req, res) => {
  res.render("index");
});

// @desc Dashboard
// @route GET /dashboard
router.get("/dashboard", ensureAuth, async (req, res) => {
  let notes = await Notes.find({ user: req.user.id }).lean();
  res.render("dashboard", {
    notes,
  });
});

module.exports = router;
