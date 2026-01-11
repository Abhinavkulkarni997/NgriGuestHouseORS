require("dotenv").config();
const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");
const router=express.Router();
const bookingRoutes = require("./routes/bookingRoutes");
const adminRoutes=require("./routes/adminRoutes");
const adminAuthRoutes=require("./routes/adminAuthRoutes");
const adminDashboardRoutes=require('./routes/adminDashboardRoutes');
const cookieParser=require("cookie-parser");
const app=express();


// middleware
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE","PATCH","OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// routes
console.log("bookingRoutes type:", typeof bookingRoutes);
app.use("/api",bookingRoutes);
app.use('/api/admin',adminRoutes);
app.use("/api/admin/dashboard",adminDashboardRoutes);


// 


app.use("/api/admin/auth",adminAuthRoutes);


// router.get("/booking", (req, res) => {
//   res.send("Booking API is running");
// });


// MongoDb Connection
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("connected to MongoDb"))
.catch((error)=>console.error("Error in connecting Database",error));

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`)
})
mongoose.connection.once("open", () => {
  console.log("CONNECTED TO DB:", mongoose.connection.name);
});

