
const Bookings=require('../models/Booking');
const path=require('path');
 const {sendApprovedEmail,sendRejectedEmail}=require('../services/mailservice');

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


// const updateBookingStatus=async(req,res)=>{
//     try{
//         const {status,remarks}=req.body;
//         const booking=await Bookings.findByIdAndUpdate(
//             req.params.id,
//             {status,remarks},
//             {new:true}
//         );

//         // send email based on status
//         if(status==="Approved"){
//             sendApprovedEmail(booking);
//         }else if(status==="Rejected"){
//             sendRejectionEmail(booking);
//         }
//         res.status(200).json({success:true,booking});
// }catch(error){
//         console.error("Error updating booking status:",error);
//         res.status(500).json({success:false,message:"Server Error failed to update booking status"});
//     }
// }

const approveBooking=async(req,res)=>{
    try{
        const {remarks}=req.body;
        const bookingId=req.params.id;
        const booking=await Bookings.findByIdAndUpdate(
            bookingId,
            {status:"APPROVED",
            adminRemarks:remarks,
            approvedAt:new Date()
            },
            {new:true}
        );
        //  send approval email 
        try{
            await sendApprovedEmail(booking);
        }catch(emailError){
            console.error("Error sending approval email:",emailError.message);
        }
        
        res.status(200).json({success:true,booking});
    }catch(error){
        console.error("Error approving booking:",error);
        res.status(500).json({success:false,message:"Server Error failed to approve booking"});
    }
}


const rejectBooking=async(req,res)=>{
    try{
        const {remarks}=req.body;
        const bookingId=req.params.id;
        const booking=await Bookings.findByIdAndUpdate(
            bookingId,
            {status:"REJECTED",
            adminRemarks:remarks,
            rejectedAt:new Date()
            },
            {new:true}
        );
        // send rejection email 
        try{
             await sendRejectedEmail(booking);
        }
        catch(emailError){
            console.error("Error sending rejection email:",emailError.message);
        }
       
        res.status(200).json({success:true,booking});   
    }catch(error){
        console.error("Error rejecting booking:",error);
        res.status(500).json({success:false,message:"Server Error failed to reject booking"});
    }
}

const allocateRoom=async(req,res)=>{
    const booking =await Bookings.findById(
       {status:"ALLOCATED",
        adminRemarks:remarks,
        allocatedAt:new Date()
       },{
        new:true
       }
    );

    try{
        await sendAllocatedEmail(booking);
    }
    catch(emailError){
        console.error("Error sending allocation email:",emailError.message);
    }
    try{
        const {roomNumber,roomType}=req.body;
        booking.allocatedRoom=roomNumber;
        booking.roomType=roomType;
        

        res.status(200).json({success:true,booking});
    }catch(error){
        console.log("Error in allocating room",error);
        res.status(500).json({success:false,message:"Server Error failed to allocate room"})
    }
}

const idCardView=async(req,res)=>{
    try{
        const booking=await Bookings.findById(req.params.id);
        if(!booking || !booking.officeIdFile){
            return res.status(404).json({
                success:false,
                message:"ID card not found"
            });
        }

        const filePath=path.join(__dirname,'../uploads',booking.officeIdFile);
        res.sendFile(filePath);
    }
    catch(error){
        console.error("Error fetching ID card:",error);
        res.status(500).json({success:false,message:"Server Error failed to fetch ID card"});
    }
}
module.exports={getAllBookings,approveBooking,rejectBooking,idCardView,allocateRoom};

