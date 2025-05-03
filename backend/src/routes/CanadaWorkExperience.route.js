const router = require("express").Router();
const CanadaWorkExperienceController = require("../controllers/CanadaWorkExperience.controller");

router.get("/", CanadaWorkExperienceController.getAll);
// router.get("/:education-name", CanadaWorkExperienceController.getScoreViaEducationName);

module.exports = router;
