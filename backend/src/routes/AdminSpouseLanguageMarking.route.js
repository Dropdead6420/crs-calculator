const router = require("express").Router();
const spouseLanguageMarking = require("../controllers/SpouseLanguageMarking.controller");
const { authenticate, authorizeRoles } = require("../middelware/auth.middelware");

router.put("/update/:id", authenticate, authorizeRoles("Super Admin"), spouseLanguageMarking.updateSpouseLanguageMarking);

module.exports = router;
