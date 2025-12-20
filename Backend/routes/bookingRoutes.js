const express=require("express");
const router=express.Router();
const upload =require('../middleware/upload');
const {createBooking}=require("../controllers/bookingController");

router.post("/booking",upload.single("officeIdFile"),createBooking);
module.exports=router;