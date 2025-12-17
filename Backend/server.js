require("dotenv").config();
const express=require("express");
const cors=require("cors");
const bodyParser=require('body-parser');
const mongoose=require("mongoose");

const app=express();
process.env.MONGODB_URL='mongodb://localhost:27018/guestHouseDB';

app.use(cors());
app.use(express.json());

// routes

// MongoDb Connection
mongoose.connect(process.env.MONGODB_URL,{
     bufferCommands:3000,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(()=>{
      console.log("connected to MongoDb");
}
  
).catch((error)=>{
console.error("Error in connecting Database",error);
})

const PORT=process.env.PORT||5001;
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})
    
