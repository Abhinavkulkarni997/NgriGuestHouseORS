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
                type:String,
                required:true,
                unique:true,

            },
            guestCategory:{
                type:String,
                required:true,
            },
            roomNumber:String,
            roomType:String,
            acType:{
                type:String,
                enum:["AC","NON_AC"],
            },
            ratePerDay:{
                type:Number,
                required:true,
            },
            numberOfDays:{
                type:Number,
                required:true,
            },

            baseAmount:Number,
            getAmount:{
                type:Number,
                required:true,
            }
        
    }
)