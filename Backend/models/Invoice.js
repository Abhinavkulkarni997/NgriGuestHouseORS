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
                required:true,
            },
            ratePerDay:{
                type:Number,
                required:true,
            },
            numberOfDays:{
                type:Number,
                required:true,
            },

            baseAmount:{
                type:Number,
                required:true,

            },
            getPercent:{
                type:Number,
                default:0,
            },
            gstAmount:
            {type:Number,
                default:0,
            },

            totalAmount:{
                type:Number,
                required:true
            },
            paymentBy:{
                    type:String,
                    required:true,
                },
            generatedAt:{
                type:Date,
                default:Date.now,
            },
          
            },
            {timestamps:true}
);

module.exports=mongoose.model("Invoice",invoiceSchema);