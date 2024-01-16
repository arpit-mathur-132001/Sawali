const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  question: String,
  answer: String,
  index: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Titles",
  },
  date: { type: String, default: Date.now },
});

module.exports = mongoose.model("Notes", notesSchema);
