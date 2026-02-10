const Invoice=require('../models/Invoice');
const rateCard=require("../config/rateCard");
const Counter = require('../models/counter');
const {calculateInvoice}=require("../utils/invoiceCalculator");


// const generateInvoice=async(booking)=>{
//     console.log('Full Booking Object:', booking);
//     // invoice number logic generation where seq is incremented starting from 1
//     const counter=await Counter.findOneAndUpdate(
//         {name:"invoice"},
//         {$inc:{seq:1}},
//         {new:true,upsert:true}
//     );

//     const invoiceNumber = `Inv-${String(counter.seq).padStart(5,"0")}`;

//     // rate calculation
//     const category=booking.guestCategory;

//     console.log('Guest Category:', category);
//     console.log('Available rate card categories:', Object.keys(rateCard));

//     if(!category || !rateCard[category]){
//         throw new Error("Invalid guest category");
//     }
//     const acType=booking.acType === "AC"?"AC":"NON_AC";

//     const ratePerDay=rateCard[category][acType];

//    if (!ratePerDay) {
//         throw new Error(`Rate not found for category: ${category}, AC Type: ${acType}`);
//     }

//     if(!booking.vacatedAt || !booking.arrivalDateTime){
//         throw new Error("Invalid booking dates for invoice calculation");
//     }
    

//     const days=Math.ceil(
//         (new Date(booking.vacatedAt)-new Date(booking.arrivalDateTime))/(1000*60*60*24) 
//     )||1;
//     const baseAmount=ratePerDay*days;

//     const gstPercent=booking.gstPercent ?? 0;
//     const gstAmount=(baseAmount*gstPercent)/100;
//     const totalAmount=baseAmount+gstAmount;

//     const invoice=await Invoice.create({
//         booking:booking._id,
//         guestName:booking.applicantName,
//         invoiceNumber,
//         guestCategory:category,
//         roomNumber:booking.roomNumber,
//         roomType:booking.roomType,
//         acType,
//         ratePerDay,
//         numberOfDays:days,
//         baseAmount,
//         gstPercent,
//         gstAmount,
//         totalAmount,
//         paymentBy:booking.paymentBy ||"CASH",
//     });
//     return invoice;

// };

// code developed on 10-02-2026 as per new requirement changes
const Invoice=require('../models/Invoice');
const rateCard=require('../config/rateCard');
const Counter=require('../models/counter');
const {calculateInvoice}=require('../utils/invoiceCalculator');

const createOrUpdateInvoice=async(booking)=>{
    if(!booking.arrivalDateTime || !booking.departureDateTime){
        throw new Error("Invalid booking dates for invoice calculation");
    }
}
module.exports = {generateInvoice};