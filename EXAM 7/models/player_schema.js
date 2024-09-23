const mongoose=require('mongoose');

const playerSchema = new mongoose.Schema({
    name:String,
    country:String,
    goals:Number,
    assists:Number,
    profile:String
})

const player= mongoose.model('Player', playerSchema);
module.exports = player