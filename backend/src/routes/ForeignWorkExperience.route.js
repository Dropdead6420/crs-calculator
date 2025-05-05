const router = require("express").Router();
const ForeignWorkExperienceController = require("../controllers/ForeignWorkExperience.controller");

router.get("/", ForeignWorkExperienceController.getAll);
router.post("/get-points", ForeignWorkExperienceController.getScoreViaInfo);

module.exports = router;
