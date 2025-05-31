const router = require("express").Router();
const questionController = require('../controllers/CRSAllQuestion.controller');
const { authenticate, authorizeRoles } = require('../middelware/auth.middelware');

// POST create a new question
router.post('/', authenticate, authorizeRoles('Super Admin'), questionController.createQuestion);

// PUT update a question by ID
router.put('/:id', authenticate, authorizeRoles('Super Admin'), questionController.updateQuestion);

// DELETE a question by ID
router.delete('/:id', authenticate, authorizeRoles('Super Admin'), questionController.deleteQuestion);

module.exports = router;