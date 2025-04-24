const router = require("express").Router();
const MaritalStatusOption = require("../controllers/MaritalStatusOption.controller");

router.get("/", MaritalStatusOption.getAllMaritalStatus);

module.exports = router;
