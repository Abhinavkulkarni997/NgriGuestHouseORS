require("dotenv").config();
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const bookingRoutes = require("./routes/bookingRoutes");

const app=express();
process.env.MONGODB_URL='mongodb://localhost:27018/guestHouseDB';

// middleware
app.use(cors());
app.use(express.json());

app.use("api",'/bookingRoutes')

// routes
app.get('/',(req,res)=>{
    res.json({status:"Guest House Booking API running"})
})

// MongoDb Connection
mongoose.connect(process.env.MONGODB_URL)
.then(()=>{console.log("connected to MongoDb")}
  
).catch((error)=>{
console.error("Error in connecting Database",error);
process.exit(1);
})

const PORT=process.env.PORT||5001;
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})
    
