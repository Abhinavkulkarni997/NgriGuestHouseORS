const Booking=require('../models/Booking');
const Room=require("../models/Room");

const getRoomOccupancy=async(req,res)=>{
    try{
        const rooms=await Room.find({isActive:true}).lean();
        const activeBookings=await Booking.find({
            status:"ALLOCATED",
        })
        .populate("allocatedRoom","roomNumber roomType")
        .lean();
        const occupancyMap={};
        activeBookings.forEach((b)=>{
            occupancyMap[b.allocatedRoom._id.toString()]=b;
        });

        const result=rooms.map((room)=>({
            roomId:room._id,
            roomNumber:room.roomNumber,
            roomType:room.roomType,
            occupied:!!occupancyMap[room._id.toString()],
            currentBooking:occupancyMap[room._id.toString()] ||null,

        }));
        res.json(result);
    }catch(error){
        console.error(error);
        res.status(500).json("Failed to load room occupancy");
    }
}

const getRoomHistory=async(req,res)=>{
    try{
        const {roomId}=req.params;

        const history=await Booking.find({
            allocatedRoom:roomId,
        })
        .sort({allocatedAt:-1})
        .select("bookingId applicantName arrivalDateTime departureDateTime status");

        res.json(history);
    }catch(error){
        console.error(error);
        res.status(500).json("Failed to load Room History");
    }
}


module.exports={getRoomOccupancy,getRoomHistory};