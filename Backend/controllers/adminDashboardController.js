const Booking=require("../models/Booking");
const { allocateRoom } = require("./adminbookingcontroller");
const getDashboardOverview=async(req,res)=>{
    try{
        const todayStart=new Date();
        todayStart.setHours(0,0,0,0);
        const todayEnd=new Date();
        todayEnd.setHours(23,59,59,999);

        const [,
            totalBookings,
            pendingBookings,
            approvedBookings,
            rejectedBookings,
            allocatedBookings,
            vacatedBookings,
            todayCheckIns,
            todayCheckOuts,

        ]=await Promise.all([
            Booking.countDocuments(),
            Booking.countDocuments({status:"PENDING"}),
            Booking.countDocuments({status:"APPROVED"}),
            Booking.countDocuments({status:"REJECTED"}),
            Booking.countDocuments({status:"ALLOCATED"}),
            Booking.countDocuments({status:"VACATED"}),
            Booking.countDocuments({arrivalDateTime:{$gte:todayStart,$lte:todayEnd}}),
            Booking.countDocuments({departureDateTime:{$gte:todayStart,$lte:todayEnd}}),
        ]);
        res.json({
            totalBookings,
            pendingBookings,
            approvedBookings,
            rejectedBookings,
            allocatedBookings,
            vacatedBookings,
            todayCheckIns,
            todayCheckOuts,
        });
    }catch(error){
        console.error("Dashboard overview error:",error);
        res.status(500).json({message:"Failed to load dashboard data"});
    }
}

module.exports={getDashboardOverview};