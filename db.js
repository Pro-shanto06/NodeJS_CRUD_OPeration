const mongoose = require('mongoose');
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw new Error(`Failed to connect to MongoDB: ${error.message}`);
  }
};

module.exports = connectDB;
