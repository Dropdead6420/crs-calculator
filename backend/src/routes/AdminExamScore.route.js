const express = require('express');
const router = express.Router();
const examScoreController = require('../controllers/ExamScore.controller');
const { authenticate, authorizeRoles } = require('../middelware/auth.middelware');

router.post('/add', authenticate, authorizeRoles('Super Admin'), examScoreController.createExamScore);
router.put('/update/:id', authenticate, authorizeRoles('Super Admin'), examScoreController.updateExamScore);
router.delete('/delete/:id', authenticate, authorizeRoles('Super Admin'), examScoreController.deleteExamScore);
// router.get('/', authenticate, examScoreController.getAllExamScores);
// router.get('/:id', authenticate, examScoreController.getExamScoreById);



module.exports = router;