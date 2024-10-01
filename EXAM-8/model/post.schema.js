const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    headline:String,
    profile:String,
    article:String,
});

const post=mongoose.model("post", postSchema)
module.exports=post