const express=require('express');
const router=express.Router();
const {getAllBookings,approveBooking,rejectBooking, idCardView,allocateRoom,getAvailableRooms,vacateRoom, getCalendarBookings}=require('../controllers/adminBookingcontroller');

router.get('/bookings',getAllBookings);
// router.patch("/bookings/:id/status",updateBookingStatus);

router.patch('/bookings/:id/approve',approveBooking);
router.patch('/bookings/:id/reject',rejectBooking);
router.patch("/bookings/:id/allocate-room",allocateRoom);
router.patch("/bookings/:id/vacate-room",vacateRoom);
router.get('/rooms/available',getAvailableRooms);
router.get('/bookings/:id/idCard',idCardView);
router.get('/bookings/calender',getCalendarBookings);
module.exports=router;