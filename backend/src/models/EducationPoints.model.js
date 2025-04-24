const mongoose = require("mongoose");

const educationPointsSchema = new mongoose.Schema({
  crs: {
    levelName: {
      type: String,
      required: true,
      trim: true
    },
    withSpouse: {
      type: Number,
      required: true
    },
    withoutSpouse: {
      type: Number,
      required: true
    }
  },

  fsw: {
    levelName: {
      type: String,
      required: true,
      trim: true
    },
    points: {
      type: Number,
      required: true
    }
  }
}, { timestamps: true });

module.exports = mongoose.model("EducationPoints", educationPointsSchema);
