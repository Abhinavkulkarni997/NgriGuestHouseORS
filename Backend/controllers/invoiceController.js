const Invoice=require('../models/Invoice');

exports.getAllInvoices=async(req,res)=>{
    const invoices=await Invoice.find()
    .populate("booking")
    .sort({createdAt:-1});
    res.json(invoices);
};

exports.getInvoiceById=async(req,res)=>{
const invoice=await Invoice.findById(req.params.id).populate("booking");

if(!invoice){
    return res.status(404).json({message:"Invoice not found"});
}
res.json(invoice);
}