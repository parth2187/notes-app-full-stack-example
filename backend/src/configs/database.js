const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || '';

const connectDB = async () => {
    await mongoose.connect(MONGODB_URI);   
}

module.exports = connectDB;

