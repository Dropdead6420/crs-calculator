const NOCTeerJobOfferService = require('../services/NOCTeerJobOffer.service');

const create = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).json({ status: false, content: 'Request body is required and cannot be empty.' });
        }

        const job = await NOCTeerJobOfferService.create(req.body);
        res.status(201).json({ status: true, content: job });
    } catch (err) {
        res.status(500).json({ status: false, content: err.message });
    }
};

const getAll = async (req, res) => {
    try {
        const jobs = await NOCTeerJobOfferService.getAll();
        if (jobs.length < 0) {
            return res.status(200).json({ status: true, content: "There is no data available" })
        }

        res.status(200).json({ status: true, content: jobs });
    } catch (err) {
        res.status(500).json({ status: false, message: err.message });
    }
};

const updateNOCTeer = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({ status: false, content: "Id is not present" });
    }

    if (!req.body) {
        return res.status(400).json({ status: false, content: "Request body is empty so insert first" });
    }

    try {
        const updated = await NOCTeerJobOfferService.updateNOCTeer(req.params.id, req.body);
        if (!updated) return res.status(404).json({ status: false, message: 'NOC teer job offer not found' });
        res.status(200).json({ status: true, content: updated });
    } catch (err) {
        res.status(400).json({ status: false, message: err.message });
    }
};

const removeNOCTeerJob = async (req, res) => {
    try {
        const deleted = await NOCTeerJobOfferService.deleteNOCTeerJobOffer(req.params.id);
        if (!deleted) return res.status(404).json({ status: false, content: 'NOC Teer job offer not found' });
        res.status(200).json({ status: true, content: 'Deleted statusfully' });
    } catch (err) {
        res.status(500).json({ status: false, content: err.message });
    }
};

module.exports = { create, updateNOCTeer, removeNOCTeerJob, getAll }