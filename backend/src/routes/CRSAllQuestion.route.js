// routes/questionRoutes.js
const express = require('express');
const router = express.Router();
const questionController = require('../controllers/CRSAllQuestion.controller');

// GET all questions
router.get('/all', questionController.getAllQuestions);

// GET a question by ID
router.get('/:id', questionController.getQuestionById);

module.exports = router;
