const express=require('express');
const router=express.Router();
const {getAllBookings,approveBooking,rejectBooking, idCardView,allocateRoom,getAvailableRooms,vacateRoom, getCalendarBookings}=require('../controllers/adminBookingcontroller');
const {adminAuth}=require('../middleware/adminAuth');
router.get('/bookings',adminAuth,getAllBookings);
// router.patch("/bookings/:id/status",updateBookingStatus);

router.patch('/bookings/:id/approve',adminAuth,approveBooking);
router.patch('/bookings/:id/reject',adminAuth,rejectBooking);
router.patch("/bookings/:id/allocate-room",adminAuth,allocateRoom);
router.patch("/bookings/:id/vacate-room",adminAuth,vacateRoom);
router.get('/rooms/available',adminAuth,getAvailableRooms);
router.get('/bookings/:id/idCard',adminAuth,idCardView);
router.get('/bookings/calendar',adminAuth,getCalendarBookings);
module.exports=router;