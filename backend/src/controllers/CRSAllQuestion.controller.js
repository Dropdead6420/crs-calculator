// controllers/questionController.js
const Question = require('../models/CRSAllQuestion.model');

// GET all questions
exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching questions', error });
  }
};

// GET single question by ID
exports.getQuestionById = async (req, res) => {
  try {
    const question = await Question.findOne({ id: req.params.id });
    if (!question) return res.status(404).json({ message: 'Question not found' });
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching question', error });
  }
};

// POST create a new question
exports.createQuestion = async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(400).json({ message: 'Error creating question', error });
  }
};

// PUT update a question by ID
exports.updateQuestion = async (req, res) => {
  try {
    const updated = await Question.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Question not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Error updating question', error });
  }
};

// DELETE a question by ID
exports.deleteQuestion = async (req, res) => {
  try {
    const deleted = await Question.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: 'Question not found' });
    res.status(200).json({ message: 'Question deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting question', error });
  }
};