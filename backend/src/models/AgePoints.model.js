const mongoose = require("mongoose");

const agePointsSchema = new mongoose.Schema({
  ageRange: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  fswp: {
    point: {
      type: Number,
      required: true,
      max: 12,
      min: 0
    }
  },
  crs: { 
    withSpouse: {
      type: Number,
      required: true,
      max: 100,
      min: 0
    },
    withoutSpouse: {
      type: Number,
      required: true,
      max: 110,
      min: 0
    }
  },
});

module.exports = mongoose.model("AgePoints", agePointsSchema);
