const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).json({ title: "HexBytes", message: "CRM Calculator", Status: true });
})

const authRouter = require("./routes/Auth.route");
app.use("/api/admin", authRouter);

const maritalStatusOptionRouter = require("./routes/MaritalStatusOption.route");
app.use("/api/marital-status", maritalStatusOptionRouter);

const adminMaritalStatusOptionRouter = require("./routes/AdminMaritalStatusOption.route");
app.use("/api/admin/marital-status", adminMaritalStatusOptionRouter);

const agePointRouter = require("./routes/AgePoints.route");
app.use("/api/age-points", agePointRouter);

const adminAgePointRouter = require("./routes/AdminAgePoints.route");
app.use("/api/admin/age-points", adminAgePointRouter);

const crsEducationPointRouter = require('./routes/EducationCRSPoint.route');
app.use("/api/crs-education", crsEducationPointRouter);

const adminCRSEducationPointRouter = require('./routes/AdminEducationCRSPoint.route');
app.use("/api/admin/crs-education", adminCRSEducationPointRouter);

const canadaCRSEducation = require('./routes/CanadaCRSEducation.route');
app.use("/api/canada/crs/education", canadaCRSEducation);

const adminCanadaCRSEducation = require('./routes/AdminCanadaCRSEducation.route');
app.use("/api/admin/canada/crs/education", adminCanadaCRSEducation);

const educationPointRouter = require("./routes/EducationPoints.route");
app.use("/api/education-points", educationPointRouter);

const adminEducationPointRouter = require("./routes/AdminEducationPoints.route");
app.use("/api/admin/education-points", adminEducationPointRouter);

const examNameRouter = require("./routes/ExamName.route");
app.use("/api/exam-name", examNameRouter);

const adminExamNameRouter = require("./routes/AdminExamName.route");
app.use("/api/admin/exam-name", adminExamNameRouter);

const examScoreRouter = require("./routes/ExamScore.route");
app.use("/api/exam-scores", examScoreRouter);

const adminExamScoreRouter = require("./routes/AdminExamScore.route");
app.use("/api/admin/exam-scores", adminExamScoreRouter);

const binaryOptionScore = require("./routes/BinaryOptionScore.route");
app.use("/api/binary-option-score", binaryOptionScore);

const adminBinaryOptionScore = require("./routes/AdminBinaryOptionScore.route");
app.use("/api/admin/binary-option-score", adminBinaryOptionScore);

const scoreOptionRouter = require("./routes/ScoreOption.route");
app.use("/api/score-options", scoreOptionRouter);

const adminScoreOptionRouter = require("./routes/AdminScoreOption.route");
app.use("/api/admin/score-options", adminScoreOptionRouter);

const canadaWorkExperience = require("./routes/CanadaWorkExperience.route");
app.use("/api/canada/experience", canadaWorkExperience);

const adminCanadaWorkExperience = require("./routes/AdminCanadaWorkExperience.route");
app.use("/api/admin/canada/experience", adminCanadaWorkExperience);

const foreignWorkExperience = require("./routes/ForeignWorkExperience.route");
app.use("/api/foreign/experience", foreignWorkExperience);

const adminForeignWorkExperience = require("./routes/AdminForeignWorkExperience.route");
app.use("/api/admin/foreign/experience", adminForeignWorkExperience);

const NOCTeerJobOfferRouter = require("./routes/NOCTeerJobOffer.route");
app.use("/api/noc-job", NOCTeerJobOfferRouter);

const adminNOCTeerRouter = require("./routes/AdminNOCTeerJobOffer.route");
app.use("/api/admin/noc-job", adminNOCTeerRouter);

const testing = require("./routes/questionRoutes")
app.use("/api/testing", testing);

const spouseLanguage = require("./routes/SpouseLanguageMarking.route")
app.use("/api/spouse/language", spouseLanguage);

const adminSpouseLanguage = require("./routes/AdminSpouseLanguageMarking.route")
app.use("/api/admin/spouse/language", adminSpouseLanguage);

// Skill transferability factors
app.post('/api/crs-language-education-points', (req, res) => {
  const { educationLevel, clbLevel } = req.body;

  if (!educationLevel || clbLevel === undefined) {
    return res.status(400).json({ error: 'Missing educationLevel or clbLevel' });
  }

  let points = 0;

  if (educationLevel === 'post_secondary') {
    if (clbLevel >= 9) {
      points = 25;
    } else if (clbLevel >= 7) {
      points = 13;
    }
  } else if (educationLevel === 'secondary') {
    points = 0;
  } else {
    return res.status(400).json({ error: 'Invalid educationLevel' });
  }

  return res.json({ points });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app;