const Invoice=require("../models/invoiceModel");
const rateCard=require("../config/rateCard");
const Counter = require('../models/counter');
const generateExtensionInvoice=async(booking,lastInvoice,extendTill,remarks="")=>{
    const from =lastInvoice.period.to;
    const to=extendTill;

    if(to<=from){
        throw new Error("Extended date must be after the last checkout");
    }

    const days=Math.max(1,Math.ceil((to-from)/(1000*60*60*24)));

    const rate=lastInvoice.ratePerDay;
    const baseAmount=rate*days;
    const gstPercent=lastInvoice.gstPercent ||0;
    const  gstAmount=(baseAmount*gstPercent)/100;
    const totalAmount=baseAmount+gstAmount;

    // invoice number logic generation where seq is incremented starting from 1
    const counter=await Counter.findOneAndUpdate(
        {name:"invoice"},
        {$inc:{seq:1}},
        {new:true,upsert:true}
    );
    const invoiceNumber=`INV-${String(counter.seq).padStart(5,'0')}`;

    return await Invoice.create({
        booking:booking._id,
        invoiceNumber:invoiceNumber,
        invoiceType:"EXTENSION",
        parentInvoice:lastInvoice.invoiceType==="BASE"?lastInvoice._id:lastInvoice.parentInvoice,
        guestName:booking.applicantName,
        period:{from,to},
        ratePerDay:rate,
        days:days,
        baseAmount:baseAmount,
        gstPercent:gstPercent,
        gstAmount:gstAmount,
        totalAmount:totalAmount,
        remarks:remarks
    });
    await newInvoice.save();
}


module.exports={generateExtensionInvoice};