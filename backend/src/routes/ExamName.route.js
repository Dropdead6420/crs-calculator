const router = require("express").Router();
const ExamNameController = require("../controllers/ExamName.controller");

router.get("/", ExamNameController.getAllExams);
router.get('/:id', ExamNameController.getExamById);

module.exports = router;