require("dotenv").config();
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const router=express.Router();
const bookingRoutes = require("./routes/bookingRoutes");

const app=express();


// middleware
app.use(cors());
app.use(express.json());


// routes
console.log("bookingRoutes type:", typeof bookingRoutes);
app.use("/api",bookingRoutes);


router.get("/booking", (req, res) => {
  res.send("Booking API is running");
});


// MongoDb Connection
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected to MongoDb"))
.catch((error)=>console.error("Error in connecting Database",error));

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})
    
