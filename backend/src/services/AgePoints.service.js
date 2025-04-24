const AgePoints = require("../models/AgePoints.model");

const getAllAgePoints = async () => {
  return await AgePoints.find({});
};

const createAgePoint = async (data) => {
  await getAgePointUsingAgeRange(data.ageRange);

  const newAgePoint = new AgePoints(data);
  return await newAgePoint.save();
};

const updateAgePoint = async (id, data) => {
  const updated = await AgePoints.findByIdAndUpdate(id, data, { new: true });
  if (!updated) throw new Error("Age points record not found");
  return updated;
};

const deleteAgePoint = async (id) => {
  const deleted = await AgePoints.findByIdAndDelete(id);
  if (!deleted) throw new Error("Age points record not found");
  return deleted;
};

const getAgePointUsingAgeRange = async (ageRange) => {
    const isAgeRange = await AgePoints.findOne({ageRange:ageRange})
    if (isAgeRange) {
        throw new Error ("Already present this age range");
    }

    return isAgeRange;
}

module.exports = {
  getAllAgePoints,
  createAgePoint,
  updateAgePoint,
  deleteAgePoint,
};
