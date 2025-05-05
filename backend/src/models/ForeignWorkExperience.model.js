const mongoose = require("mongoose");

const foreignWorkExperienceSchema = new mongoose.Schema({
  experienceRange: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  clb: [{
    type: String,
    required: true,
    trim: true
  }],
  fswp: {
    type: Number,
    required: true,
    min: 0,
    max: 15
  },
  crs: [{
    type: Number,
    required: true,
    min: 0,
    max: 50
  }],
  canadianWork: [{
    type: String,
    trim: true,
  }]
});

module.exports = mongoose.model("ForeignWorkExperience", foreignWorkExperienceSchema);
