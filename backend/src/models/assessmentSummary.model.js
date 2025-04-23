const mongoose = require("mongoose");

const assessmentSummarySchema = new mongoose.Schema({
  maritalStatus: {
    type: String,
    required: true,
    trim: true,
    enum: ["annulled-marriage", "common-law", "divorced/separated", "legally-separated","married", "never-married/single","widowed"]
  },
  spouseResident: {
    type: String,
    enum: ["yes", "no"],
    required: function () {
      return this.maritalStatus === "married" || this.maritalStatus === "common-law";
    },
  },
  yourAge: {
    type: Number,
    required: function () {
        if (this.maritalStatus !== "married" || this.maritalStatus !== "common-law") {
            return true;
        } else {
            return false
        }
    },
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AssessmentSummary", assessmentSummarySchema);
