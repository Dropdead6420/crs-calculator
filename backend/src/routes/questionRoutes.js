// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController.controller');

// GET all questions
router.get('/', questionController.getAllQuestions);

// GET a question by ID
router.get('/:id', questionController.getQuestionById);

// POST create a new question
router.post('/', questionController.createQuestion);

// PUT update a question by ID
router.put('/:id', questionController.updateQuestion);

// DELETE a question by ID
router.delete('/:id', questionController.deleteQuestion);

// POST handle a dynamic answer step and call optional external API
router.post('/answer/step', questionController.handleAnswerStep);

module.exports = router;
