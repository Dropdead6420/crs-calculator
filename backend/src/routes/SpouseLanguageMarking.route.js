const router = require("express").Router();
const spouseLanguageMarking = require("../controllers/SpouseLanguageMarking.controller");

router.get("/", spouseLanguageMarking.getAllLanguageMarks);
router.post("/", spouseLanguageMarking.getSpouseLanguagePointViaCLBLevel);
router.get("/:id", spouseLanguageMarking.getSpouseLanguageMarkById);

module.exports = router;
