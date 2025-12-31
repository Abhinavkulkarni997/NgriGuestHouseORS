
const Bookings=require('../models/Booking');
const Room =require('../models/Room');
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
            approvedAt:new Date(),
         
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
    try{
          const {roomId}=req.body;
           // Fetch booking details
            const booking =await Bookings.findById(req.params.id);
            if(!booking){
            return res.status(404).json({success:false,message:"Booking not found"});
        }
        if(booking.status!=="APPROVED"){
            return res.status(400).json({success:false,message:"Only approved bookings can be allocated rooms"});
        }

        // Fetch room details
        const room=await Room.findById(roomId);
        if(!room || room.isActive){
            return res.status(404).json({success:false,message:"Room not available for allocation"});
        }

        // Allocate room to booking
        booking.allocatedRoom=room._id;
        booking.roomNumber=room.roomNumber;
        booking.roomType=room.roomType;
        booking.status="ALLOCATED";
        booking.allocatedAt=new Date(),
        await booking.save();

        // Marking room as active
        room.isActive=true;
        await room.save();

        // send room allocation email(with room details)

        // await sendRoomAllocationEmail(booking);
        res.status(200).json({success:true,booking});
    }
    catch(error){
        console.log("Error in allocating room:",error);
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

