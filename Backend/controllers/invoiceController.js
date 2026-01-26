const Invoice=require('../models/Invoice');
const Booking=require('../models/Booking');
const {generateInvoice}=require('../services/InvoiceService');



const getAllInvoices=async(req,res)=>{
    const invoices=await Invoice.find()
    .populate("booking")
    .sort({createdAt:-1});
    res.json(invoices);
};

const getInvoiceById=async(req,res)=>{
const invoice=await Invoice.findById(req.params.id).populate("booking");

if(!invoice){
    return res.status(404).json({message:"Invoice not found"});
}
res.json(invoice);
}


const createInvoiceForBooking=async(req,res)=>{
    try{
        const booking =await Booking.findById(req.params.bookingId);
        if(!booking){
            return res.status(404).json({message:"Booking not found"});
        }

        const invoice=await generateInvoice(booking);
        res.status(201).json(invoice);
    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server error"});
    }

    
}

module.exports={getAllInvoices,getInvoiceById,createInvoiceForBooking};