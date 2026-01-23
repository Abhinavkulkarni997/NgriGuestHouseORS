const Invoice=require('../models/Invoice');
const rateCard=require("../config/rateCard");
const counter = require('../models/counter');


const generateInvoice=async(booking)=>{
    // invoice number
    const counter=await counter.findOneAndUpdate(
        {name:"invoice"},
        {$inc:{seq:q}},
        {new:true,upsert:true}
    );

    const invoiceNumber=`Inv-${String(counter.seq).padStart(5,"0")}`;

    // rate calculation
    const category=booking.guestCategory;

    if(!rateCard[category]){
        throw new Error("Invalid guest category");
    }
    const acType=booking.AcType="AC"?"AC":"NON_AC";

    const rate=rateCard[category][acType];

    if(!rate){
        throw new Error("Rate not found for category/ac Type");
    }

    const days=Math.ceil(
        (new Date(booking.departureDateTime)-new Date(booking.arrivalDateTime))/(1000*60*60*24) 
    )||1;
    const baseAmount=rate*days;

    const gstPercent=0;
    const gstAmount=(baseAmount*gstPercent)/100;
    const totalAmount=baseAmount+gstAmount;

    const invoice=await Invoice.create({
        booking:booking._id,
        invoiceNumber,
        guestCategory:category,
        roomNumber:booking.roomNumber,
        roomType:booking.roomType,
        acType,
        ratePerDay:rate,
        numberOfDays:days,
        baseAmount,
        gstPercent,
        gstAmount,
        totalAmount,
        paymentBy:booking.paymentBy,
    });
    return invoice;

};

module.exports = {generateInvoice};