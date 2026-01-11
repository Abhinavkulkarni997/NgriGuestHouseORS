const Booking=require("../models/Booking");

const getDashboardOverview=async(req,res)=>{
    try{
        const todayStart=new Date();
        todayStart.setUTCHours(0,0,0,0);

        const todayEnd=new Date();
        todayEnd.setUTCHours(23,59,59,999);
        const [
            totalBookings,
            pendingBookings,
            approvedBookings,
            allocatedBookings,
            rejectedBookings,
            vacatedBookings,
            todaysCheckIns,
            todaysCheckOuts,
            
        ]=await Promise.all([
            Booking.countDocuments(),
            Booking.countDocuments({status:"PENDING"}),
            Booking.countDocuments({status:"APPROVED"}),
            Booking.countDocuments({status:"ALLOCATED"}),
            Booking.countDocuments({status:"REJECTED"}),
            Booking.countDocuments({status:"VACATED"}),  
            Booking.countDocuments({
  allocatedAt: { $gte: todayStart, $lte: todayEnd },
  status: "ALLOCATED",
}),

           Booking.countDocuments({
  vacatedAt: { $gte: todayStart, $lte: todayEnd },
  status: "VACATED",
}),
         
        ]);
        res.json({
            totalBookings,
            pendingBookings,
            approvedBookings,
            allocatedBookings,
            rejectedBookings,
            vacatedBookings,
            todaysCheckIns,
            todaysCheckOuts,
        });
    }catch(error){
        console.error("Dashboard overview error:",error);
        res.status(500).json({message:"Failed to load dashboard data"});
    }
}

module.exports={getDashboardOverview};