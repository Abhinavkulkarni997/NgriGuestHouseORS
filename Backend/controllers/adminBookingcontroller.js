const Bookings=require('../models/Booking');
const Room =require('../models/Room');
const path=require('path');
const {sendRoomAllocationEmail,sendApprovedEmail,sendRejectedEmail}=require('../services/mailservice');
const { rmSync } = require('fs');
const {generateInvoice}=require('../services/InvoiceService');
const Invoice=require('../models/Invoice');


// logic to fetch bookings
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



// logic for approve Booking
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

// logic for reject Booking
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

// finalize booking logic for invoice generation
const finalizeBooking=async(req,res)=>{
    try{
        // const {guestCategory,acType,ratePerDay,gstPercent=0,remarks}=req.body;
        const {guestCategory,acType,remarks}=req.body;


        const booking=await Bookings.findById(req.params.id);

        if(!booking){
            return res.status(404).json({success:false,message:"Booking not found"});
        }

        

        if (booking.status === "FINALIZED") {
            return res.status(400).json({
            success: false,
            message: "Booking already finalized"
        });
        }

        if(booking.status!=="VACATED" || !booking.vacatedAt){
            return res.status(400).json({success:false,
                message:"Only vacated bookings can be finalized"});
        }

        // check if invoice already exists and to prevent duplication of  invoice generation
        const existingInvoice=await Invoice.findOne({booking:booking._id});
        if(existingInvoice){
            booking.invoice=existingInvoice._id;
            booking.status="FINALIZED";
            booking.finalizedAt=booking.finalizedAt|| new Date();
            await booking.save();

            return res.status(200).json({
                success:true,
                message:"Booking already finalized earlier",
                invoiceId:existingInvoice._id
            })
        }
        // if(!guestCategory || !ratePerDay){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Guest Category and rate per day are required to finalize booking"
        //     });
        // }

        // freezing category only if not already present
        if(!booking.guestCategory){

         if(!guestCategory){
            return res.status(400).json({
                success:false,
                message:"Guest Category  are required to finalize booking"
            });
        }
        booking.guestCategory=guestCategory;
    }

        // if(!booking.roomType){
        //     return res.status(400).json({
        //         success:false,
        //         message:"Room Type missing in booking, cannot finalize"
        //     });
        // }

        // to prevent FINALIZE without VACATED timestamp
        // if (!booking.vacatedAt) {
        // return res.status(400).json({
        //      success: false,
        //      message: "Booking must be vacated before finalization"
        //     });
        //     }
        // calculation of  stay duration
        // const arrival=new Date(booking.arrivalDateTime);
        // const vacated=new Date(booking.vacatedAt);
        // const numberOfDays=Math.max(1,Math.ceil((vacated-arrival)/(1000*60*60*24)));

        // Freeze billing values
        // booking.guestCategory=guestCategory;
        // booking.acType=acType ||booking.acType;
        // booking.ratePerDay=ratePerDay;
        // booking.gstPercent=gstPercent;
        // booking.numberOfDays=numberOfDays;
        // booking.finalizeRemarks=remarks||"";
        // booking.status="FINALIZED";
        // booking.finalizedAt=new Date();

        // await booking.save();

            // Generate Invoice logic
        
        let invoice;
        try{
              invoice=await generateInvoice(booking);
            //    booking.invoice=invoice._id;
            //    await booking.save();
        }catch(err){
            // booking.status="VACATED";
            // booking.finalizedAt=null;
            // await booking.save();
            // throw err;
            console.error("Invoice generation error:",err);
            return res.status(500).json({
                success:false,
                message:"Invoice generation failed during finalization"
            });

        }
    //     if (!invoice) {
    //     return res.status(500).json({
    //     success: false,
    //     message: "Invoice generation failed"
    //     });
    // }

    // finally updating booking status to finalized
        booking.invoice=invoice._id;
        booking.finalizeRemarks=remarks||"";
        booking.status="FINALIZED";
        booking.finalizedAt=new Date();
        await booking.save();

    res.status(200).json({success:true,
        message:"Booking finalized successfully",
        invoiceId:invoice._id
    });
    }catch(error){
        console.error("Error in finalizing booking:",error);
        res.status(500).json({
            success:false,
            message:"Server Error failed to finalize booking"})
    }
}

// whenever the booking is finalized invoice is generated and if the invoice exists or if the guest want to stay more time then we will update the invoice accordingly
const StayInvoice=async(req,res)=>{
    try{
        const {extendedTill,remarks}=req.body;
        const booking=await Bookings.findById(req.params.id);
        if(!booking){
            return res.status(404).json({success:false,message:"Booking not found"});
        }

        if(booking.status !=="FINALIZED"){
            return res.status(400).json({success:false,message:"Only finalized bookings can have stay invoice"});
        }

        if(!extendedTill){
            return res.status(400).json({success:false,message:"Extended till date is required"});
        }

        const lastInvoice=await Invoice.findOne({booking:booking._id}).sort({createdAt:-1});
        if(!lastInvoice){
            return res.status(404).json({success:false,message:"No existing invoice found for this booking"});
        }

        const extensionInvoice=await generateExtensionInvoice(booking,lastInvoice,new Date(extendedTill),remarks);
        res.status(200).json({success:true,
            message:"Extended stay invoice generated",
            invoiceId:extensionInvoice._id
        });

    }catch(error){
        console.error("Error in extension stay invoice ",error);
        res.status(500).json({success:false,message:"Failed to generate extended stay invoice"});
    }

}

// logic for allocating room
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

        // if (!booking.guestCategory || !booking.acType) {
        //     return res.status(400).json({
        //     message: "Finalize Guest Category and AC Type before allocating room"
        //     });
        // }
        // Allocate room to booking
        booking.allocatedRoom=room._id;
        booking.roomNumber=room.roomNumber;
        booking.roomType=room.roomType;
        booking.status="ALLOCATED";
        booking.allocatedAt=new Date(),
        await booking.save();

         // send room allocation email(with room details)

        try{
            await sendRoomAllocationEmail(booking);
        }catch(emailError){
            console.error("Allocation email failed:",emailError.message)
        }

        // Marking room as active
        room.isActive=true;
        await room.save();

       
     
        res.status(200).json({success:true,message:"Room allocated successfully",booking});
    }
    catch(error){
        console.log("Error in allocating room:",error);
        res.status(500).json({success:false,message:"Server Error failed to allocate room"})
    }
}

// logic to vacate the room
const vacateRoom=async(req,res)=>{
   
    try{
         const {remarks}=req.body;
         const booking=await Bookings.findById(req.params.id);
         if(!booking){
            return res.status(404).json({success:false,message:"Booking not found"});
         }
         if(booking.status!=="ALLOCATED"){
            return res.status(400).json({success:false,message:"Only allocated Booking can be vacated"});
         }

         if(!booking.allocatedRoom){
            return res.status(400).json({
                success:false,message:"No room is currently allocated to this booking"
            })

         }

        //  vacate the room
        const room=await Room.findById(booking.allocatedRoom);
        if(room){
            room.isActive=false;
            await room.save();
        }
        //update booking
        booking.status="VACATED";
        booking.vacatedAt=new Date();
        booking.vacateRemarks=remarks||"";
        // booking.allocatedRoom=null;
        console.log("Allowed statuses:", booking.schema.path("status").enumValues);
        await booking.save(); 

        // await generateInvoice(booking);

        res.status(200).json({success:true,message:"Room vacated successfully",booking})
    }catch(error){
        console.log("Error in vacating the room: ",error);
        res.status(500).json({
            success:false,
            message:"Server Error while vacating the room"
        });
    }
};

// logic for idCard View 
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

const getAvailableRooms=async(req,res)=>{
    const availableRooms=await Room.find({isActive:false});
    res.status(200).json({success:true,availableRooms});
}



// logic for calendar building
const getCalendarBookings=async(req,res)=>{
    try{
        const bookings=await Bookings.find({status:{$in:["ALLOCATED","VACATED"]}})
        .select("arrivalDateTime departureDateTime applicantName status roomNumber roomType");

        const calendarEvents=bookings.map((b=>({
              id:b._id,
              title:`Room ${b.roomNumber} ${b.applicantName}`,
              start:b.arrivalDateTime,
              end:b.departureDateTime,
              status:b.status,
              roomNumber:b.roomNumber,
              roomType:b.roomType,
              applicantName:b.applicantName,
        })));

        res.status(200).json({success:true,events:calendarEvents});
    }catch(error){
        console.error("error in fetching the calendar details:",error);
        res.status(500).json({success:false,message:"Calendar Fetch Failed"});
    }
}



module.exports={getAllBookings,approveBooking,rejectBooking,idCardView,allocateRoom,getAvailableRooms,vacateRoom,getCalendarBookings,finalizeBooking};

