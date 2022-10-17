const mongoose = require("mongoose");

const codesSchema = new mongoose.Schema({
  code: String,
  input: String,
  output: String,
  number: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("Codes", codesSchema);
