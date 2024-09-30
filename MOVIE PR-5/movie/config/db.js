const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/movies');
    console.log('connect to database');
}

module.exports = connectDB;