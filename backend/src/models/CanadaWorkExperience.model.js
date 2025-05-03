const mongoose = require("mongoose");

const canadaWorkExperienceSchema = new mongoose.Schema({
  experienceRange: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  withSpouse: {
    type: Number,
    required: true,
    min: 0,
    max: 70
  },
  withoutSpouse: {
    type: Number,
    required: true,
    min: 0,
    max: 80
  }
});

module.exports = mongoose.model("CanadaWorkExperience", canadaWorkExperienceSchema);
