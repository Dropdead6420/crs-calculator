const router = require("express").Router();
const ForeignWorkExperienceController = require("../controllers/ForeignWorkExperience.controller");

router.get("/", ForeignWorkExperienceController.getAll);
// router.get("/:education-name", ForeignWorkExperienceController.getScoreViaEducationName);

module.exports = router;
