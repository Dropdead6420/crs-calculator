const express = require("express");
const router = express.Router();
const scoreOptionController = require("../controllers/scoreOptions.controller");

router.get("/", scoreOptionController.getAllScoreOptions);
router.get("/exam/:examName", scoreOptionController.getScoreOptionByExamName);

module.exports = router;
