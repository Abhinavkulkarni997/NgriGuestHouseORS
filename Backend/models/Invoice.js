// const mongoose=require("mongoose");

// const invoiceSchema=new mongoose.Schema(
//     {
//         booking:{
//             type:mongoose.Schema.Types.ObjectId,
//             ref:"Booking",
//             required:true,
//          unique:true,
//         },
//             invoiceNumber:{
//                 type:String,
//                 required:true,
//                 unique:true,
//             },

//             // invoiceType:{
//             //     type:String,
//             //     enum:["BASE","EXTENSION"],
//             //     default:"BASE",

//             // },

//             // parentInvoice:{
//             //     type:mongoose.Schema.Types.ObjectId,
//             //     ref:"Invoice",
//             //     default:null,
//             // },

//             period:{
//                 from:{type:Date,required:true},
//                 to:{type:Date,required:true},
//             },
//              guestCategory:{
//                 type:String,
//                 required:true,
//             },

//             roomNumber:String,
//             roomType:String,

          

//             acType:{
//                 type:String,
//                 enum:["AC","NON_AC"],
//                 required:true,
//             },

//             ratePerDay:{
//                 type:Number,
//                 required:true,
//             },

//             numberOfDays:{
//                 type:Number,
//                 required:true,
//             },
//               subtotal:{
//                 type:Number,
//                 required:true,
                
//             },

//             // baseAmount:{
//             //     type:Number,
//             //     required:true,

//             // },
//             gstPercent:{
//                 type:Number,
//                 default:0,
//             },
//             gstAmount:
//             {type:Number,
//                 default:0,
//             },

//             total:{
//                 type:Number,
//                 required:true
//             },

//             payment:{
//                 mode:{
//                     type:String,
//                      enum:["CASH","ONLINE"],
//                     default:"CASH",
//                 },
//                 status:{
//                 type:String,
//                 enum:["PAID","PENDING"],
//                 default:"PAID",
//             },
//                 transactionId:{
//                     type:String,
//                     default:null
//                 },
//                 paidAt:{
//                     type:Date,
//                     default:null
//                 }
            
//             },
            
//             // paymentBy:{
//             //         type:String,
//             //         required:true,
//             //     },
//             generatedAt:{
//                 type:Date,
//                 default:Date.now,
//             },
          
//             },
//             {timestamps:true}
// );

// module.exports=mongoose.model("Invoice",invoiceSchema);


// code developed on 15-02-2026 as per the new changes suggested by GH team and roomNumber,roomType,acType are removed 
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

            

            period:{
                from:{type:Date,required:true},
                to:{type:Date,required:true},
            },
             guestCategory:{
                type:String,
                required:true,
            },

            roomNumbers:[String],

            ratePerDay:{
                type:Number,
                required:true,
            },

            numberOfDays:{
                type:Number,
                required:true,
            },
              subtotal:{
                type:Number,
                required:true,
                
            },

           
            gstPercent:{
                type:Number,
                default:0,
            },
            gstAmount:
            {type:Number,
                default:0,
            },

            total:{
                type:Number,
                required:true
            },

            payment:{
                mode:{
                    type:String,
                     enum:["CASH","ONLINE"],
                    default:"CASH",
                },
                status:{
                type:String,
                enum:["PAID","PENDING"],
                default:"PAID",
            },
                transactionId:{
                    type:String,
                    default:null
                },
                paidAt:{
                    type:Date,
                    default:null
                }
            
            },
            generatedAt:{
                type:Date,
                default:Date.now,
            },
          
            },
            {timestamps:true}
);

module.exports=mongoose.model("Invoice",invoiceSchema);