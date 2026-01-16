const express=require("express");
const router=express.Router();
const adminAuth=require('../middleware/adminAuth');
const {getRoomOccupancy,getRoomHistory}=require('../controllers/roomController');

router.get("/occupancy",adminAuth,getRoomOccupancy);
router.get("/:roomId/history",adminAuth,getRoomHistory);



module.exports = router;