const express=require('express');
const router=express.Router();
const {getAllBookings,approveBooking,rejectBooking, idCardView,allocateRoom,getAvailableRooms}=require('../controllers/adminBookingcontroller');

router.get('/bookings',getAllBookings);
// router.patch("/bookings/:id/status",updateBookingStatus);

router.patch('/bookings/:id/approve',approveBooking);
router.patch('/bookings/:id/reject',rejectBooking);
router.patch("/bookings/:id/allocate-room",allocateRoom);
router.get('/rooms/available',getAvailableRooms);
router.get('/bookings/:id/idCard',idCardView);
module.exports=router;