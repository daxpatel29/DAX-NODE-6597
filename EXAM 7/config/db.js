const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('');
    console.log('connect to database');
}

module.exports = connectDB;