const mongoose = require("mongoose");

const maritalStatusOptionSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "MaritalStatusOption",
  maritalStatusOptionSchema
);
