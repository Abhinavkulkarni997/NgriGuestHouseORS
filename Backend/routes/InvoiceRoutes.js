const express=require('express');
const router=express.Router();
const {getAllInvoices,getInvoiceById}=require('../controllers/invoiceController');
const {adminAuth}=require('../middleware/adminAuth')
router.get("/",adminAuth,getAllInvoices);
router.get("/:id",adminAuth,getInvoiceById);



module.exports=router;