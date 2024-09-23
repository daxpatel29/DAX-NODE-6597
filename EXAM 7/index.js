const express=require('express');
const connectDB=require('./config/db');
const userRoute=require('./routes/userRouter')
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());

app.listen(8090,()=>{
    console.log('Server is running on port 8090');
    connectDB();
})