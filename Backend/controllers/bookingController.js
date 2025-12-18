// import GuestHouseResponse from "../models/GuestHouseResponse";
const Booking=require("../models/Booking");
const crypto=require("crypto");

 const createBooking=async (req,res)=>{
    try{
      const data=req.body;

    //   logic to generate booking ID
      const bookingId="GH-"+crypto.randomBytes(4).toString("hex").toUpperCase();
    //   combining date and time

    const arrivalDateTime=new Date(`${data.arrivalDate}T${data.arrivalTime}`);
    const departureDateTime=new Date(`${data.departureDate}T${data.departureTime}`)

      const booking=new Booking({
        ...data,
        bookingId,
        arrivalDateTime,
        departureDateTime,
      })
        await booking.save();
        res.status(201).json({success:true,bookingId,message:'Booking response submitted successfully'});

    }catch(error){
        console.log("Booking error:",error);
        res.status(500).json({success:false,message:"Failed to submit booking"});
    }
    
}

module.exports ={createBooking}