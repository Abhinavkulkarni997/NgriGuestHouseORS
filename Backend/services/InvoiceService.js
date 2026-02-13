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


const createOrUpdateInvoice=async(booking,paymentMode="CASH")=>{
    // validate booking 
    if(!booking.arrivalDateTime || !booking.departureDateTime){
        throw new Error("Invalid booking dates for invoice calculation");
    }

    const category=booking.guestCategory;
    if(!category || !rateCard[category]){
        throw new Error("Invalid guest category");
    }

    const acType=booking.acType==="AC"?"AC":"NON_AC";
    const ratePerDay=rateCard[category][acType];

    if(!ratePerDay){
        throw new Error(
            `Rate not found for category: ${category},AC Type:${acType}`
        );
    }

    const gstPercent=booking.gstPercent ?? 0;

    // -------CALCULATION--------
    const calc=calculateInvoice({
        from:booking.arrivalDateTime,
        to:booking.departureDateTime,
        ratePerDay,
        gstPercent
    });

    // ---------FIND EXISTING INVOICE-----------
    let invoice=await Invoice.findOne({booking:booking._id});


    if(!invoice){
        const counter=await Counter.findOneAndUpdate(
            {name:"invoice"},
            {$inc:{seq:1}},
            {new:true,upsert:true}
        );

        const invoiceNumber=`INV-${String(counter.seq).padStart(5,"0")}`;

        invoice=new Invoice({
            booking:booking._id,
            invoiceNumber,

            period:{
                from:booking.arrivalDateTime,
                to:booking.departureDateTime
            },

            guestCategory:category,
            roomNumber:booking.roomNumber,
            roomType:booking.roomType,
            acType,

            ratePerDay,
            gstPercent,

            ...calc,

            payment:{
                mode:paymentMode,
                status:paymentMode==="CASH"?"PAID":"PENDING",
            }
        });
    }else{
        // ------------UPDATE THE SAME INVOICE----------------
        invoice.period={
            from:booking.arrivalDateTime,
            to:booking.departureDateTime
        };

        invoice.guestCategory=category;
        invoice.roomNumber=booking.roomNumber;
        invoice.roomType=booking.roomType;
        invoice.acType=acType;

        invoice.ratePerDay=ratePerDay;
        invoice.gstPercent=gstPercent;

        invoice.numberOfDays=calc.numberOfDays;
        invoice.subtotal=calc.subtotal;
        invoice.gstAmount=calc.gstAmount;
        invoice.total=calc.total;

       if(paymentMode){
        
       }
   };

    }
    await invoice.save();
    return invoice;
}
module.exports = {createOrUpdateInvoice};