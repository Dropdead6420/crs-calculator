const mongoose = require("mongoose");

const scoreOptionSchema = new mongoose.Schema({
  exam: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "ExamName",
    unique: true
  },
  speaking: [
    {
      type: String,
      required: true
    },
  ],
  listening: [
    {
      type: String,
      required: true
    },
  ],
  reading: [
    {
      type: String,
      required:true
    },
  ],
  writing: [
    {
      type: String,
      required: true
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ScoreOptions", scoreOptionSchema);
