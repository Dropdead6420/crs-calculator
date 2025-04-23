const mongoose = require("mongoose");
const { mongoURI } = require('./env');

const connectToDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully!");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = { connectToDB };