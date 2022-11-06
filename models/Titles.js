const mongoose = require("mongoose");

const titlesSchema = new mongoose.Schema({
  Title: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Titles", titlesSchema);
