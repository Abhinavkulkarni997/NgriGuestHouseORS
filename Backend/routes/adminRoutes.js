const express=require('express');
const router=express.Router();
const Bookings=require('../models/Booking');

router.get('/bookings',async(req,res)=>{
    try{
        const bookings=await Bookings.find().sort({createdAt:-1});
        res.json({success:true,bookings});
    }
    catch(error){
        res.status(500).json({success:false,message:"Server Error failed to fetch bookings"});
    }
})

module.exports=router;