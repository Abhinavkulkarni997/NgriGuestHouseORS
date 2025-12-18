const express=require("express");
const router=express.Router();
const {createBooking}=require("../controllers/bookingController");

router.post("/booking",createBooking);
module.exports=router;