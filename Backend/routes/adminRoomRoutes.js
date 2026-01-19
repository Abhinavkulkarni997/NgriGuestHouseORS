const express=require("express");
const router=express.Router();
const adminAuth=require('../middleware/adminAuth');
const {getRoomOccupancy,getRoomHistory,getRoomCalendar,getRoomDirectory}=require('../controllers/roomController');

router.get("/occupancy",adminAuth,getRoomOccupancy);
router.get("/:roomId/history",adminAuth,getRoomHistory);
router.get("/calendar",adminAuth,getRoomCalendar);
router.get("/",adminAuth,getRoomDirectory);



module.exports = router;