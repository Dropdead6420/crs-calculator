const mongoose = require("mongoose");

const firstLanguagePointsSchema = new mongoose.Schema({
  clbLevel: {
    type: String,
    required: true,
    trim: true
  },
  pointsPerAbilityWithSpouse: {
    type: Number,
    required: true
  },
  pointsPerAbilityWithoutSpouse: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("FirstLanguagePoints", firstLanguagePointsSchema);
