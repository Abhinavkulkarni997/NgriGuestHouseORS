const express=require("express");
const router=express.Router();
const adminAuth=require('../middleware/adminAuth');
const {getRoomOccupancy,getRoomHistory,getRoomCalendar}=require('../controllers/roomController');

router.get("/occupancy",adminAuth,getRoomOccupancy);
router.get("/:roomId/history",adminAuth,getRoomHistory);
router.get("/calendar",adminAuth,getRoomCalendar);



module.exports = router;