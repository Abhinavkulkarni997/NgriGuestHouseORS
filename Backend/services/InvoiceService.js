const rateCard=require("../config/rateCard");
const Invoice=require("../models/Invoice");
const generateInvoice=async(booking)=>{
    const category=booking.guestCategory;
    const acType=booking.AcType="AC"?"AC":"NON_AC";

    const rate=rateCard[category][acType];

    const days=Math.ceil(
        (new Date(booking.departureDateTime)-new Date(booking.arrivalDateTime))/(1000*60*60*24) 
    )||1;
    const baseAmount=rate*days;

    const gstPercent=0;
    const gstAmount=0;
    const totalAmount=baseAmount+gstAmount;

    const invoice=await Invoice.create({
        booking:booking._id,
        invoiceNumber:`INV-${booking.bookingId}`,
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