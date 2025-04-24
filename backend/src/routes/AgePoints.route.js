const router = require("express").Router();
const AgePointsController = require("../controllers/AgePoints.controller");

router.get("/", AgePointsController.getAll);

module.exports = router;