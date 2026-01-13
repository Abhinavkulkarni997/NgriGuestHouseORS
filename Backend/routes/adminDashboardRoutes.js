const express=require('express');
const router=express.Router();
const adminAuth=require('../middleware/adminAuth');
const {getDashboardOverview,getTodayActivities}=require("../controllers/adminDashboardController");

router.get("/overview",adminAuth,getDashboardOverview);
router.get("/dashboard/today",adminAuth,getTodayActivities);
module.exports=router;
