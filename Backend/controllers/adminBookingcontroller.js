
const Bookings=require('../models/Booking');

const getAllBookings=async(req,res)=>{
    try{
        const bookings=await Bookings.find().sort({createdAt:-1});
        res.status(200).json({success:true,bookings});
        console.log("Fetched bookings:",bookings);
    }
    catch(error){
        console.error("Error fetching bookings:",error);
        res.status(500).json({success:false,message:"Server Error failed to fetch bookings"});
    }
}


const updateBookingStatus=async(req,res)=>{
    try{
        const {status,remarks}=req.body;
        const booking=await Bookings.findByIdAndUpdate(
            req.params.id,
            {status,remarks},
            {new:true}
        );

        // send email based on status
        if(status==="Approved"){
            sendApprovedEmail(booking);
        }else if(status==="Rejected"){
            sendRejectionEmail(booking);
        }
        res.status(200).json({success:true,booking});
}catch(error){
        console.error("Error updating booking status:",error);
        res.status(500).json({success:false,message:"Server Error failed to update booking status"});
    }
}

module.exports={getAllBookings,updateBookingStatus};

