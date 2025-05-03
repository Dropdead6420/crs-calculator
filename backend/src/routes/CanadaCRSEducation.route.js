const router = require("express").Router();
const EducationCRSPointController = require("../controllers/CanadaCRSEducation.controller");

router.get("/", EducationCRSPointController.getAll);

module.exports = router;
