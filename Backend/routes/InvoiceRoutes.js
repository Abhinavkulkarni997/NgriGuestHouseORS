const express=require('express');
const router=express.Router();


const {getAllInvoices,getInvoiceById,createInvoiceForBooking,updateInvoiceForBooking}=require('../controllers/invoiceController');
const adminAuth=require('../middleware/adminAuth');




router.get("/",adminAuth,getAllInvoices);
router.get("/:id",adminAuth,getInvoiceById);
router.post("/booking/:bookingId",adminAuth,createInvoiceForBooking);
// router.patch("/booking/:bookingId/update",adminAuth,updateInvoiceForBooking);


module.exports=router;