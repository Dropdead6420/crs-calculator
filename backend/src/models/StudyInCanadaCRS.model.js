const mongoose = require("mongoose");

const StudyInCanadaCRSSchema = new mongoose.Schema({
  educationLevel: {
    type: String,
    required: true,
    unique: true,
  },
  point: {
    type: Number,
    required: true,
    max: 30,
    min: 0
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("StudyInCanadaCRS", StudyInCanadaCRSSchema);