const Booking=require("../models/Booking");
const crypto=require("crypto");

 const createBooking=async (req,res)=>{
    try{
      const {captcha,captchaValue,...data}=req.body;

      if(typeof data.guests==="string"){
        data.guests=JSON.parse(data.guests);
      }
    //   logic to generate booking ID
    const year=new Date().getFullYear();
      const count=await Booking.countDocuments({bookingId:new RegExp(`^${year}/NGRI/GH/`)});
      const sequence=String(count+1).padStart(4,"0");
      const bookingId=`${year}/NGRI/GH/${sequence}`;

    //   combining date and time

    const arrivalDateTime=new Date(`${data.arrivalDate}T${data.arrivalTime}`);
    const departureDateTime=new Date(`${data.departureDate}T${data.departureTime}`)

      const booking=new Booking({
        ...data,
        numberOfRooms:Number(data.numberOfRooms),
        bookingId,
        arrivalDateTime,
        departureDateTime,
        status:"PENDING"
      })
        await booking.save();
        res.status(201).json({success:true,bookingId,message:'Booking response submitted successfully'});

    }catch(error){
        console.log("Booking error:",error);
        res.status(500).json({success:false,message:"Failed to submit booking"});
    }
    
}

module.exports = {createBooking};