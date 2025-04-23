const mongoose = require("mongoose");

const canadianWorkExperiencePointsSchema = new mongoose.Schema({
  experienceRange: {
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

module.exports = mongoose.model("CanadianWorkExperiencePoints", canadianWorkExperiencePointsSchema);
