const SkillTransferability = require('../models/SkillTransferability.model');

const getAll = async (req, res) => {
    try {
        const all = await SkillTransferability.find();
        res.status(200).json(all);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const getPoint = async (req, res) => {
    const { title, condition, category } = req.query;

    try {
        const doc = await SkillTransferability.findOne({
            category,
            'factors.title': title,
        });

        if (!doc) {
            return res.status(404).json({ error: 'No matching document found for given category and title' });
        }

        const factor = doc.factors.find(f => f.title === title);

        if (!factor) {
            return res.status(404).json({ error: 'Factor with specified title not found in factors array' });
        }

        const option = factor.options.find(opt => opt.condition.includes(condition));

        if (!option) {
            return res.status(404).json({ error: `No matching condition "${condition}" found in options` });
        }

        res.json({ points: option.points });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deleteById = async (req, res) => {
    try {
        const deleted = await SkillTransferability.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Not found' });
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const updateById = async (req, res) => {
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
}

const create = async (req, res) => {
    try {
        const newFactor = new SkillTransferability(req.body);
        const saved = await newFactor.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


module.exports = { getAll, getPoint, deleteById, updateById, create };