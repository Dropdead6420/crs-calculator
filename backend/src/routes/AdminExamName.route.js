const router = require('express').Router();
const ExamNameController = require('../controllers/ExamName.controller');
const { authenticate, authorizeRoles } = require('../middelware/auth.middelware');
const { validateExamName } = require("../middelware/ValidateExamName.middleware")

router.post('/add', authenticate, authorizeRoles('Super Admin'), validateExamName, ExamNameController.createExam);
router.put('/update/:id', authenticate, authorizeRoles('Super Admin'), validateExamName, ExamNameController.updateExam);
router.delete('/delete/:id', authenticate, authorizeRoles('Super Admin'), ExamNameController.deleteExam);

module.exports = router;