const agePointsService = require("../services/AgePoints.service");

const getAll = async (req, res) => {
  try {
    const all = await agePointsService.getAllAgePoints();
    if (all.length === 0) {
        return res.status(200).json({status: true, content: "There is no available data for the age points"});    
    }
    return res.status(200).json({status: true, content: all});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const create = async (req, res) => {
  try {
    if (!req.body) {
        throw new Error ("Request body is empty");
    }

    const data = req.body;
    const created = await agePointsService.createAgePoint(data);
    res.status(201).json({status:true, data: created, message: "Age points added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await agePointsService.updateAgePoint(id, req.body);
    res.status(200).json({ status:true, data: updated, message: "Age points updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await agePointsService.deleteAgePoint(id);
    res.status(200).json({ status:true, data: deleted, message: "Age points deleted successfully" });
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
