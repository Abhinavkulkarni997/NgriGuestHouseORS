const express=require('express');
const router=express.Router();
const {getAllBookings}=require('../controllers/adminBookingcontroller');

router.get('/bookings',getAllBookings);

module.exports=router;