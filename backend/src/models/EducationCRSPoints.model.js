const mongoose = require("mongoose");

const LevelOfEducationCRSSchema = new mongoose.Schema({
  educationLevel: {
    type: String,
    required: true,
    unique: true,
  },
  withSpouse: {
    type: Number,
    required: true,
    max: 140,
    min: 0
  },
  withoutSpouse: {
    type: Number,
    required: true,
    max: 150,
    min: 0
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("LevelOfEducationCRS", LevelOfEducationCRSSchema);