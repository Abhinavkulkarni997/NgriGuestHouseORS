const express=require('express');
const router=express.Router();
const {getAllBookings,approveBooking,rejectBooking}=require('../controllers/adminBookingcontroller');

router.get('/bookings',getAllBookings);
// router.patch("/bookings/:id/status",updateBookingStatus);

router.post('/bookings/:id/approve',approveBooking);
router.post('/bookings/:id/reject',rejectBooking);

module.exports=router;