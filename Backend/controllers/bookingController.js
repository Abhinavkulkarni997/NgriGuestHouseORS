// const Booking=require("../models/Booking");
// const Counter =require("../models/Counter");
// const { sendAcknowledgementEmail,sendAdminAlertEmail } = require("../services/mailservice");
// // const crypto=require("crypto");


//  const createBooking=async (req,res)=>{
//     console.log("Booking API HIT HERE");
//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);
//     try{
//       const data=req.body;

//       if(typeof data.guests==="string"){
//         try{
//           data.guests=JSON.parse(data.guests);

//         }catch(e){
//           return res.status(400).json({
//             success:false,
//             message:"Invalid guests data format",
//           })
//         }
//       }

//   const arrivalDateTime=new Date(`${data.arrivalDate}T${data.arrivalTime}`);
//     const departureDateTime=new Date(`${data.departureDate}T${data.departureTime}`);
   
//     //   logic to generate booking ID
//     const year=new Date().getFullYear();
//       const count=await Booking.countDocuments({bookingId:new RegExp(`^${year}/NGRI/GH/`)});
//       const sequence=String(count+1).padStart(4,"0");
//       const bookingId=`${year}/NGRI/GH/${sequence}`;


  

//       const booking=new Booking({
//         ...data,
//         officeIdFile:req.file?.filename,
//         numberOfRooms:Number(data.numberOfRooms),
//         bookingId,
//         arrivalDateTime,
//         departureDateTime,
//         status:"PENDING"
//       })
   
//         await booking.save();
//         await sendAcknowledgementEmail({toEmail:booking.officialEmail,name:booking.applicantName,bookingId:bookingId,bookingDate: new Date().toLocaleDateString("en-IN"),});
//         await sendAdminAlertEmail({bookingId,applicantName:booking.applicantName});
//         res.status(201).json({success:true,bookingId,message:'Booking response submitted successfully'});

//     }catch(error){
//         console.log("Booking error:",error);
//         res.status(500).json({success:false,message:"Failed to submit booking"});
//     }
    
// }

// module.exports = {createBooking};

// code was developed on 16-02-2026  to prevent race condition
const Booking=require("../models/Booking");
const Counter =require("../models/Counter");
const { sendAcknowledgementEmail,sendAdminAlertEmail } = require("../services/mailservice");
// const crypto=require("crypto");


 const createBooking=async (req,res)=>{
    console.log("Booking API HIT HERE");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    try{
      const data=req.body;

      if(typeof data.guests==="string"){
        try{
          data.guests=JSON.parse(data.guests);

        }catch(e){
          return res.status(400).json({
            success:false,
            message:"Invalid guests data format",
          })
        }
      }

  const arrivalDateTime=new Date(`${data.arrivalDate}T${data.arrivalTime}`);
    const departureDateTime=new Date(`${data.departureDate}T${data.departureTime}`);
   
    //   logic to generate booking ID  Atomic increment (NO race condition)
    const year=new Date().getFullYear();
      const counter = await Counter.findOneAndUpdate(
      { name: "booking", year },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const sequence = String(counter.seq).padStart(4, "0");
    const bookingId = `${year}/NGRI/GH/${sequence}`;

    const booking = new Booking({
      ...data,
      officeIdFile: req.file?.filename,
      numberOfRooms: Number(data.numberOfRooms),
      bookingId,
      arrivalDateTime,
      departureDateTime,
      status: "PENDING"
    });
        await booking.save();
        await sendAcknowledgementEmail({toEmail:booking.officialEmail,name:booking.applicantName,bookingId:bookingId,bookingDate: new Date().toLocaleDateString("en-IN"),});
        await sendAdminAlertEmail({bookingId,applicantName:booking.applicantName});
        res.status(201).json({success:true,bookingId,message:'Booking response submitted successfully'});

    }catch(error){
        console.log("Booking error:",error);
        res.status(500).json({success:false,message:"Failed to submit booking"});
    }
    
}


const getBookingStatus=async (req,res)=>{
  try{
    const {email,mobile}=req.query;

    if(!email || !mobile){
      return res.status(400).json({
        success:false,
        message:"Email and Mobile number are required"
      });
    }


    const filterEmail=email.trim().toLowerCase();
    const filterMobile=mobile.trim();

    const bookings=await Booking.find({officialEmail:filterEmail,
      mobileNumber:filterMobile,
    }).sort({createdAt:-1})
    .populate("allocatedRooms","roomNumber");

    if(bookings.length===0){
      return res.status(400).json({
        success:false,
        message:"No booking found with provided details"
      });
    }

    return res.status(200).json({
      success:true,
      data:bookings,
    });

  }catch(error){
    console.error("Status API Error:",error);
    return res.status(500).json({
      success:false,
      message:"Server Error"
    })
  }

}

module.exports = {createBooking,getBookingStatus};