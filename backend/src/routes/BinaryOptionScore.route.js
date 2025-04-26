const router = require('express').Router();
const binaryOptionScoreController = require('../controllers/BinaryOptionScore.controller.js');

router.get('/', binaryOptionScoreController.getAll);
router.get('/question', binaryOptionScoreController.getByQuestion);
router.get('/:id', binaryOptionScoreController.getById);

module.exports = router;
