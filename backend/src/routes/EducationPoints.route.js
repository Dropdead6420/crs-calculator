const router = require("express").Router();
const EducationPointsController = require("../controllers/EducationPoints.controller");

router.get("/", EducationPointsController.getAll);

module.exports = router;
