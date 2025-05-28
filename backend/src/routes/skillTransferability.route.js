// routes/skillTransferability.js

const express = require('express');
const router = express.Router();
const SkillTransferability = require('../models/SkillTransferability.model');

// POST - Create new factor
router.post('/', async (req, res) => {
  try {
    const newFactor = new SkillTransferability(req.body);
    const saved = await newFactor.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All factors
router.get('/', async (req, res) => {
  try {
    const all = await SkillTransferability.find();
    res.status(200).json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Points by condition and title
router.get('/points', async (req, res) => {
  const { title, condition } = req.query;
  try {
    const doc = await SkillTransferability.findOne({
      'factors.title': title,
      'factors.options.condition': condition
    });

    if (!doc) {
      return res.status(404).json({ error: 'Factor not found' });
    }

    const factor = doc.factors.find(f => f.title === title);
    const option = factor.options.find(opt => opt.condition === condition);

    if (!option) {
      return res.status(404).json({ error: 'Condition not found' });
    }

    res.json({ points: option.points });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT - Update by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await SkillTransferability.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE - By ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await SkillTransferability.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
