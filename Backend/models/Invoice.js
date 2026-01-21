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
            getPercent:{
                type:Number,
                default:0,
            },
            gstAmount:Number,

            totalAmount:{
                type:Number,
                required:true
            },
            paymentBy:{
                    type:String,
                },
          
            gstAmount:{
                type:String,
                required:true
            },
            totalAmount:{
                type:String,
                required:true
            },
            paymentBy:{
                type:String,
                required:true
            },
            generatedAt:{
                type:Date,
                default:Date.now,
            }
            },
            {timeStamps:true}
        
    
)

module.exports=mongoose.model("Invoice",invoiceSchema);