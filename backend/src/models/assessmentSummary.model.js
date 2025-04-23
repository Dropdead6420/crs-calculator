const mongoose = require("mongoose");

const assessmentSummarySchema = new mongoose.Schema({
  // 1) What is your marital status?
  maritalStatus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MaritalStatusOption",
    required: true,
  },

  // 2) i. Is your spouse or common-law partner a citizen or permanent resident of Canada?
  spouseIsResident: {
    type: String,
    enum: ["yes", "no"],
    required: function () {
      return (
        this.maritalStatus === "married" || this.maritalStatus === "common-law"
      );
    },
  },

  // 2) ii. Will your spouse or common-law partner come with you to Canada?
  isSpouseAccompanying: {
    type: String,
    enum: ["yes", "no"],
    trim: true,
    required: true,
  },

  // 3) How old are you?
  age: {
    type: Number,
    required: function () {
      return (
        this.maritalStatus !== "married" && this.maritalStatus !== "common-law"
      );
    },
  },

  // 4) What is your level of education?
  educationLevel: {
    type: String,
    trim: true,
  },

  // 4b) Have you earned a Canadian degree, diploma or certificate?
  hasCanadianEducation: {
    type: String,
    enum: ["yes", "no"],
    trim: true,
  },

  // 4c) Choose the best answer to describe this level of education.
  canadianEducationDescription: {
    type: String,
    trim: true,
  },

  // 5) Official languages: Canada's official languages are English and French.
  // i. Are your test results less than two years old?
  isLanguageTestRecent: {
    type: String,
    enum: ["yes", "no"],
    trim: true,
  },

  // ii. Which language test did you take for your first official language?
  firstLanguageTest: {
    type: String,
    trim: true,
  },

  // Enter your test scores:
  speaking: {
    type: String,
    required: true,
    trim: true,
  },
  listening: {
    type: String,
    required: true,
    trim: true,
  },
  reading: {
    type: String,
    trim: true,
    required: true,
  },

  // iii. Do you have other language results?
  hasOtherLanguageResults: {
    type: String,
    required: true,
    trim: true,
  },

  // Other Enter your test scores:
  otherSpeaking: {
    type: String,
    trim: true,
  },
  otherListening: {
    type: String,
    trim: true,
  },
  otherReading: {
    type: String,
    trim: true,
  },

  // 6) Work Experience
  // i. In the last 10 years, how many years of skilled work experience in Canada do you have?
  canadianWorkExperienceYears: {
    type: String,
    required: true,
    trim: true,
  },

  // ii. In the last 10 years, how many total years of foreign skilled work experience do you have?
  foreignWorkExperienceYears: {
    type: String,
    required: true,
    trim: true,
  },

  // 7) Do you have a certificate of qualification from a Canadian province, territory or federal body?
  hasCanadianCertification: {
    type: String,
    enum: ["yes", "no"],
    required: true,
    trim: true,
  },

  // 8) Do you have a valid job offer supported by a Labour Market Impact Assessment (if needed)?
  hasValidJobOfferLMIA: {
    type: String,
    enum: ["yes", "no"],
    required: true,
    trim: true,
  },

  // 8a) Which NOC TEER is the job offer?
  nocTeerForJobOffer: {
    type: String,
    trim: true,
  },

  // 9) Do you have a nomination certificate from a province or territory?
  hasProvincialNomination: {
    type: String,
    enum: ["yes", "no"],
    required: true,
    trim: true,
  },

  // 10) Do you or your spouse or common law partner (if they will come with you to Canada) have at least one brother or sister living in Canada who is a citizen or permanent resident?
  hasSiblingInCanada: {
    type: String,
    enum: ["yes", "no"],
    required: true,
    trim: true,
  },

  // 11) What is the highest level of education for which your spouse or common-law partner's has:
  spouseEducationLevel: {
    type: String,
    trim: true,
  },

  // 12) In the last 10 years, how many years of skilled work experience in Canada does your spouse/common-law partner have?
  spouseCanadianWorkExperienceYears: {
    type: String,
    trim: true,
  },

  // 12) ii) Enter the test scores for:
  spoueSepeaking: {
    type: String,
    trim: true,
  },

  spoueListening: {
    type: String,
    trim: true,
  },

  spoueWriting: {
    type: String,
    trim: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AssessmentSummary", assessmentSummarySchema);
