const mongoose=require("mongoose");

const invoiceSchema=new mongoose.Schema(
    {
        booking:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Booking",
            required:true,
            unique:true,
        },
        
            invoiceNumber:{

            }
        
    }
)