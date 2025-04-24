const educationPointsService = require("../services/EducationPoints.service");

const getAll = async (req, res) => {
  try {
    const all = await educationPointsService.getAllEducationPoints();
    if (all.length === 0 ) {
        return res.status(200).json({status:true, content: "There is no content available"});    
    }

    return res.status(200).json({status:true, content: all});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    if (!req.body) {
        return res.status(400).send({status: false, message: "Enter some data in body"});
    }

    const data = req.body;
    const created = await educationPointsService.createEducationPoint(data);
    res.status(201).json({ status: true, data: created, message: "Education points created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await educationPointsService.updateEducationPoint(id, req.body);
    res.status(200).json({ data: updated, message: "Education points updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await educationPointsService.deleteEducationPoint(id);
    res.status(200).json({ status:true, data: deleted, message: "Education points deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
