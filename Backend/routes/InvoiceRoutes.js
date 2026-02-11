const express=require('express');
const router=express.Router();


const {getAllInvoices,getInvoiceById}=require('../controllers/invoiceController');
const adminAuth=require('../middleware/adminAuth');




router.get("/",adminAuth,getAllInvoices);
router.get("/:id",adminAuth,getInvoiceById);
// router.post("/booking/:bookingId",adminAuth,createInvoiceForBooking);
// router.post("/booking/:bookingId/extend-invoice",adminAuth,);


module.exports=router;