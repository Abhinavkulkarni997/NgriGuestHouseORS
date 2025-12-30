const express=require('express');
const router=express.Router();
const {getAllBookings,approveBooking,rejectBooking, idCardView}=require('../controllers/adminBookingcontroller');

router.get('/bookings',getAllBookings);
// router.patch("/bookings/:id/status",updateBookingStatus);

router.patch('/bookings/:id/approve',approveBooking);
router.patch('/bookings/:id/reject',rejectBooking);

router.get('/bookings/:id/idCard',idCardView);
module.exports=router;