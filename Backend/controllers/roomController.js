const Booking=require('../models/Booking');
const Room=require("../models/Room");
const mongoose = require('mongoose');

// old code is fully working and as per old requirements 

// const getRoomOccupancy=async(req,res)=>{
//     try{
//         const rooms=await Room.find({isActive:true}).lean();
//         const activeBookings=await Booking.find({
//             status:"ALLOCATED",
//         })
//         .populate("allocatedRoom","roomNumber roomType")
//         .lean();
//         const occupancyMap={};
//         activeBookings.forEach((b)=>{
//             occupancyMap[b.allocatedRoom._id.toString()]=b;
//         });

//         const result=rooms.map((room)=>({
//             roomId:room._id,
//             roomNumber:room.roomNumber,
//             roomType:room.roomType,
//             occupied:!!occupancyMap[room._id.toString()],
//             currentBooking:occupancyMap[room._id.toString()] ||null,

//         }));
//         res.json(result);
//     }catch(error){
//         console.error(error);
//         res.status(500).json("Failed to load room occupancy");
//     }
// }

// code is changed and modified on 15-02-2026 as per new GH requirements removed roomType
const getRoomOccupancy = async (req, res) => {
    try {
        const rooms = await Room.find({ isActive: true }).lean();

        const activeBookings = await Booking.find({
            status: "ALLOCATED"
        })
        .populate("allocatedRooms", "roomNumber")
        .lean();

        const occupancyMap = {};

        activeBookings.forEach(b => {
            b.allocatedRooms.forEach(room => {
                occupancyMap[room._id.toString()] = b;
            });
        });

        const result = rooms.map(room => ({
            roomId: room._id,
            roomNumber: room.roomNumber,
            roomType: room.roomType,
            occupied: !!occupancyMap[room._id.toString()],
            currentBooking: occupancyMap[room._id.toString()] || null
        }));

        res.json(result);

    } catch (error) {
        res.status(500).json("Failed to load room occupancy");
    }
};


// const getRoomHistory=async(req,res)=>{
//     try{
//         const {roomNumber}=req.params;

//         if(!roomNumber){
//             return res.status(400).json({message:"Invalid room Number"});
//         }

//         const history=await Booking.find({
//         roomNumber:roomNumber
//         })
//         .sort({allocatedAt:-1})
//         .select("bookingId applicantName arrivalDateTime departureDateTime status paymentBy roomType roomNumber");

//         res.json(history);
//     }catch(error){
//         console.error(error);
//         res.status(500).json("Failed to load Room History");
//     }
// }

// code is changed and modified on 15-02-2026 as per new GH requirements removed roomType 

const getRoomHistory = async (req, res) => {
    try {
        const { roomId } = req.params;

        const history = await Booking.find({
            allocatedRooms: roomId
        })
        .sort({ allocatedAt: -1 })
        .select("bookingId applicantName arrivalDateTime departureDateTime status");

        res.json(history);

    } catch (error) {
        res.status(500).json("Failed to load Room History");
    }
};


const getRoomCalendar=async(req,res)=>{
    const {start,end}=req.query;
    try{
        const rooms=await Room.find({isActive:true})
        .sort({roomNumber:1})
        .lean();
        const bookings=await Booking.find({
            status:{$in:["ALLOCATED","VACATED"]},
            arrivalDateTime:{$lte:new Date(end)},
            departureDateTime:{$gte:new Date(start)},
        })
        .populate("allocatedRooms","roomNumber")
        .select("arrivalDateTime departureDateTime applicantName allocatedRooms")
        .lean();
        res.json({rooms,bookings});
    }catch(error){
        console.error(error);
        res.status(500).json("Failed to load calendar data");
    }

}


// const getRoomDirectory=async (req,res)=>{
//     try{
//         const rooms=await 
//         Room.find()
//         .sort({roomNumber:1})
//         .lean();
        
//         const lastBookings=await Booking.find({allocatedRoom:{$ne:null}})
//         .sort({allocatedAt:-1})
//         .lean()

//         const lastBookingMap={};
//         lastBookings.forEach(b=>{
//             if(!lastBookingMap[b.allocatedRoom]){
//                 lastBookingMap[b.allocatedRoom]=b;
//             }
//     });
//     const result=rooms.map(room=>({
//         ...room,
//         lastBooking:lastBookingMap[room._id] || null,
//     }));

//     res.json(result);
//     }catch(error){
//         console.error(error);
//         res.status(500).json("Failed to load room directory data");
//     }
// }

// code modified on 15-02-2026 and changed as per the new requirements 
const getRoomDirectory = async (req, res) => {
    try {
        const rooms = await Room.find()
            .sort({ roomNumber: 1 })
            .lean();

        const bookings = await Booking.find({
            allocatedRooms: { $exists: true, $ne: [] }
        })
        .sort({ allocatedAt: -1 })
        .lean();

        const lastBookingMap = {};

        bookings.forEach(b => {
            b.allocatedRooms.forEach(roomId => {
                const id = roomId.toString();
                if (!lastBookingMap[id]) {
                    lastBookingMap[id] = b;
                }
            });
        });

        const result = rooms.map(room => ({
            ...room,
            lastBooking: lastBookingMap[room._id.toString()] || null
        }));

        res.json(result);

    } catch (error) {
        res.status(500).json("Failed to load room directory data");
    }
};



module.exports={getRoomOccupancy,getRoomHistory,getRoomCalendar,getRoomDirectory};