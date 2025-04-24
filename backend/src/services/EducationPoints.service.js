const EducationPoints = require("../models/EducationPoints.model");

const getAllEducationPoints = async () => {
  return await EducationPoints.find({});
};

const createEducationPoint = async (data) => {
  await getFSWPoint(data.fsw.points);

  const newDoc = new EducationPoints(data);
  return await newDoc.save();
};

const updateEducationPoint = async (id, data) => {
  const updated = await EducationPoints.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updated) throw new Error("Education point record not found");
  return updated;
};

const deleteEducationPoint = async (id) => {
  const deleted = await EducationPoints.findByIdAndDelete(id);
  if (!deleted) throw new Error("Education point record not found");
  return deleted;
};

const getFSWPoint = async (point) => {
  const isExistFSWPoint = await EducationPoints.findOne({ "fsw.points": point });

  if (isExistFSWPoint) {
    throw new Error(
      "This point already exists. You can update the value if you want."
    );
  }

  return null;
};

module.exports = {
  getAllEducationPoints,
  createEducationPoint,
  updateEducationPoint,
  deleteEducationPoint,
};
