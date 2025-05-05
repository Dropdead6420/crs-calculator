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

// const agePointsRouter = require("./routes/AgePoints.route");
// app.use("/super-admin/age_points", agePointsRouter);

// const productRouter = require("./routes/product.route");
// app.use("/api/product", productRouter);

// const categoryRouter = require("./routes/category.route");
// app.use("/api/category", categoryRouter);

// // const serviceRoute = require("./routes/product.route");
// // app.use("/api/product", serviceRouter);

// const adminProductRouter = require("./routes/adminProduct.route");
// app.use("/api/admin/product", adminProductRouter);

// const cartRouter = require("./routes/cart.route");
// app.use("/api/cart", cartRouter);

// const cartItemRouter = require("./routes/cartItem.route");
// app.use("/api/cart_items", cartItemRouter);

// const orderRouter = require("./routes/order.route");
// app.use("/api/order", orderRouter);

// const adminOrderRouter = require("./routes/adminOrder.route");
// app.use("/api/admin/order", adminOrderRouter);

module.exports = app;