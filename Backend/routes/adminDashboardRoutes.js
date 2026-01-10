const express=require('express');
const router=express.Router();
const adminAuth=require('../middleware/adminAuth');
const {getDashboardOverview}=require("../controllers/adminDashboardController");

router.get("/overview",adminAuth,getDashboardOverview);
module.exports=router;
