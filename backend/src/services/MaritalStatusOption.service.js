const MaritalStatusOption = require("../models/MaritalStatusOption.model.js");

const getAllMaritalOption = async () => {
    return await MaritalStatusOption.find({});
};

const createMaritalOption = async (data) => {
    const { value, nextQuestion } = data;

    const existing = await MaritalStatusOption.findOne({ value: value.trim() });
    if (existing) throw new Error("This marital status already exists");

    const option = new MaritalStatusOption({ value: value.trim(), nextQuestion: nextQuestion.trim() });
    return await option.save();
};

const updateMaritalOption = async (id, data) => {
    const { value, nextQuestion } = data;

    await getMaritalById(id);
    
    const updated = await MaritalStatusOption.findByIdAndUpdate(
        id,
        { value: value.trim(), nextQuestion: nextQuestion.trim() },
        { new: true }
    );
    if (!updated) throw new Error("Marital status not found");
    return updated;
};

const deleteMaritalOption = async (id) => {
    const deleted = await MaritalStatusOption.findByIdAndDelete(id);
    if (!deleted) throw new Error("Marital status not found");
    return deleted;
};

const getMaritalById = async (id) => {
    const isMaritalStatusOption = await MaritalStatusOption.findById(id);
    if (!isMaritalStatusOption) {
        throw new Error ("Marital status not fount")
    }
    return isMaritalStatusOption;
}

module.exports = {
    getAllMaritalOption,
    createMaritalOption,
    updateMaritalOption,
    deleteMaritalOption,
    getMaritalById
};
