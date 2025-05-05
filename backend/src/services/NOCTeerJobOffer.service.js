const NOCTeerJobOfferModel = require("../models/NOCTeerJobOffer.model");

const getAll = async () => {
  return await NOCTeerJobOfferModel.find({});
};

const create = async (data) => {
  await isNOCExist(data.name);

  const newDoc = new NOCTeerJobOfferModel(data);
  return await newDoc.save();
};

const updateNOCTeer = async (id, data) => {
  const updated = await NOCTeerJobOfferModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  if (!updated) throw new Error("NOC Teer point record not found");
  return updated;
};

const deleteNOCTeerJobOffer = async (id) => {
  const deleted = await NOCTeerJobOfferModel.findByIdAndDelete(id);
  if (!deleted) throw new Error("NOC teer job profile record not found");
  return deleted;
};

const isNOCExist = async (job) => {
  const isExistNOC = await NOCTeerJobOfferModel.findOne({ name: job });

  if (isExistNOC) {
    throw new Error(
      "This job already exists. You can update the value if you want."
    );
  }

  return null;
};

module.exports = {
  getAll,
  create,
  updateNOCTeer,
  deleteNOCTeerJobOffer,
};
