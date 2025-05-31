const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  return res.status(200).json({ title: "HexBytes", message: "CRS & FSWP Calculator API", Status: true });
})

const scoreOptionRouter = require("./routes/ScoreOption.route");
app.use("/api/score-options", scoreOptionRouter);

const adminScoreOptionRouter = require("./routes/AdminScoreOption.route");
app.use("/api/admin/score-options", adminScoreOptionRouter);

const examScoreRouter = require("./routes/ExamScore.route");
app.use("/api/exam-scores", examScoreRouter);

const adminExamScoreRouter = require("./routes/AdminExamScore.route");
app.use("/api/admin/exam-scores", adminExamScoreRouter);

const examNameRouter = require("./routes/ExamName.route");
app.use("/api/exam-name", examNameRouter);

const adminExamNameRouter = require("./routes/AdminExamName.route");
app.use("/api/admin/exam-name", adminExamNameRouter);

const foreignWorkExperience = require("./routes/ForeignWorkExperience.route");
app.use("/api/foreign/experience", foreignWorkExperience);

const adminForeignWorkExperience = require("./routes/AdminForeignWorkExperience.route");
app.use("/api/admin/foreign/experience", adminForeignWorkExperience);

const NOCTeerJobOfferRouter = require("./routes/NOCTeerJobOffer.route");
app.use("/api/noc-job", NOCTeerJobOfferRouter);

const adminNOCTeerRouter = require("./routes/AdminNOCTeerJobOffer.route");
app.use("/api/admin/noc-job", adminNOCTeerRouter);

const skillTransferabilityRoute = require("./routes/skillTransferability.route")
app.use("/api/skill-transferability", skillTransferabilityRoute);

const testing = require("./routes/questionRoutes")
app.use("/api/testing", testing);

const authRouter = require("./routes/Auth.route");
app.use("/api/admin", authRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = app;