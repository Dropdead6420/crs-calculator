const mongoose = require("mongoose");

const educationPointsSchema = new mongoose.Schema({
  educationLevel: {
    type: String,
    required: true,
    trim: true
  },
  pointsWithSpouse: {
    type: Number,
    required: true
  },
  pointsWithoutSpouse: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("EducationPoints", educationPointsSchema);
