const router = require("express").Router();
const EducationCRSPointController = require("../controllers/EducationCRSPoint.controller");

router.get("/", EducationCRSPointController.getAll);
// router.get("/:education-name", EducationCRSPointController.getScoreViaEducationName);

module.exports = router;
