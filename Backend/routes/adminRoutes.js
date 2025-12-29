const express=require('express');
const router=express.Router();
const {getAllBookings,updateBookingStatus}=require('../controllers/adminBookingcontroller');

router.get('/bookings',getAllBookings);
router.patch("/bookings/:id/status",updateBookingStatus);

module.exports=router;