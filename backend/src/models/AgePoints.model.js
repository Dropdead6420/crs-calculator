const mongoose = require("mongoose");

const agePointsSchema = new mongoose.Schema({
  ageRange: {
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

module.exports = mongoose.model("AgePoints", agePointsSchema);
