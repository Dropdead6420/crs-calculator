const maritalStatusOption = require("../services/MaritalStatusOption.service");

const getAllMaritalStatus = async (req, res) => {
    try {
        const all = await maritalStatusOption.getAllMaritalOption();
        if (all && all.length == 0) {
            return res.status(200).json({status: true, content: "Marital status is empty"});    
        }
        return res.status(200).json({status: true, content: all});
    } catch (error) {
        return res.status(500).json({status:false, error: error.message });
    }
};

const create = async (req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({status: false, message: "Please add some value"})
        }

        const { value, nextQuestion } = req.body;
        if (!value) return res.status(400).json({ message: "Value is required" });
        if (!nextQuestion) return res.status(400).json({ message: "Next Question is required" });

        const created = await maritalStatusOption.createMaritalOption(req.body);
        return res.status(201).json({ status: true, data: created, message: "Created successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const update = async (req, res) => {
    try {
        if (!req.params || Object.keys(req.params).length === 0 || 
            !req.body || Object.keys(req.body).length === 0) {
            return res.status(400).send({ status: false, message: "Please provide required parameters and body" });
        }

        const { id } = req.params;
        const { value, nextQuestion } = req.body;
        if (!value) return res.status(400).json({ message: "Value is required" });
        if (!nextQuestion) return res.status(400).json({ message: "Next Question is required" });

        const updated = await maritalStatusOption.updateMaritalOption(id, req.body);
        return res.status(200).json({ status: true, data: updated, message: "Updated successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await maritalStatusOption.deleteMaritalOption(id);
        return res.status(200).json({ status:true, data: deleted, message: "Deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllMaritalStatus,
    create,
    update,
    remove,
};
