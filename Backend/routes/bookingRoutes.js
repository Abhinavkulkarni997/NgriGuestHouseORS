const express=require("express");
const router=express.Router();
const upload =require('../middleware/upload');
const {createBooking,getBookingStatus}=require("../controllers/bookingController");

router.post("/booking",upload.single("officeIdFile"),createBooking);
router.get('/booking/status', getBookingStatus);
module.exports=router;