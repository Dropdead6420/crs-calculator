const mongoose = require("mongoose");

const spouseLanguageMarking = new mongoose.Schema({
  clbLevel: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  points: [{
    type: Number,
    required: true,
    trim: true
  }]
});

module.exports = mongoose.model("SpouseLanguageMarks", spouseLanguageMarking);
