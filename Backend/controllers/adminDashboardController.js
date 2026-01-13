const Booking=require("../models/Booking");

const getDashboardOverview=async(req,res)=>{
    try{
        const todayStart=new Date();
        todayStart.setUTCHours(0,0,0,0);

        const todayEnd=new Date();
        todayEnd.setUTCHours(23,59,59,999);
        console.log("UTC START:", todayStart.toISOString());
        console.log("UTC END:", todayEnd.toISOString());
        const sample=await Booking.find({
            arrivalDateTime:{$gte:todayStart,$lte:todayEnd}
        });
        console.log("Today arrival bookings:",sample);

        const [
  totalBookings,
  pendingBookings,
  approvedBookings,
  allocatedBookings,
  rejectedBookings,
  vacatedBookings,
  todaysCheckIns,
  todaysCheckOuts,
] = await Promise.all([
  Booking.countDocuments(),
  Booking.countDocuments({ status: "PENDING" }),
  Booking.countDocuments({ status: "APPROVED" }),
  Booking.countDocuments({ status: "ALLOCATED" }),
  Booking.countDocuments({ status: "REJECTED" }),
  Booking.countDocuments({ status: "VACATED" }),
  Booking.countDocuments({
    arrivalDateTime: { $gte: todayStart, $lte: todayEnd },
  }),
  Booking.countDocuments({
    departureDateTime: { $gte: todayStart, $lte: todayEnd },
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


const 

module.exports={getDashboardOverview};