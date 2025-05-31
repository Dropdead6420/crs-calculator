const router = require('express').Router();
const SkillTransferabilityController = require("../controllers/SkillTransferability.controller");

router.get("/", SkillTransferabilityController.getAll)
router.get('/points', SkillTransferabilityController.getPoint);

module.exports = router;
