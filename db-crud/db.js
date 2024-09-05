const db=async()=>{
    await connect("mongodb://localhost:27017")
    console.log("Connected successfully");
    
}

module.exports=db