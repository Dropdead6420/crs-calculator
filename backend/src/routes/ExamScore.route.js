const router = require('express').Router();
const examScoreController = require('../controllers/ExamScore.controller');

router.get('/', examScoreController.getAllExamScores);
router.post('/get-points', examScoreController.getPoints);
router.get('/:id', examScoreController.getExamScoreById);





// Get score by Exam : For the dropdown list
// router.get('/:examNameId', examScoreController.getExamScoreById);

// Get Score via Exam name and the CLB Leve : Point
// router.get('/:id', examScoreController.getExamScoreById);

module.exports = router;