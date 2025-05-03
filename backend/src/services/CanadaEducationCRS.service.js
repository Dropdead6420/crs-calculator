const EducationPoints = require("../models/StudyInCanadaCRS.model");

const getAllEducationPoints = async () => {
  return await EducationPoints.find({});
};

const createEducationPoint = async (data) => {
  await idEducationalLevelExist(data.educationLevel);

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
  if (!deleted) throw new Error("CRS Education level is not exist for this ID");
  return deleted;
};

const idEducationalLevelExist = async (education) => {
  const isEducationExist = await EducationPoints.findOne({ educationLevel: education });

  if (isEducationExist) {
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
