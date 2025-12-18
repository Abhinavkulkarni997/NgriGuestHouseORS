const mongoose=require('mongoose');
const guestSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    organization:{
        type:String,
        
    },
    age:{
        type:Number,
        min:1
    },
    gender:{
        type:String,
        enum:["MALE","FEMALE"],
    },
    contact:{
        type:String,
    },
        idProof:{
            type:String
        },
        category:{
            type:String,
        },
        isApplicant:{
            type:Boolean,
            default:false
        }
    
});

const bookingSchema =new mongoose.Schema(
    {
        // step 1 :Applicant Details
        applicantName:{
            type:String,
            required:true,
            trim:true,
        },
        designation:{
            type:String,
            required:true,
        },
        isApplicantGuest:{
            type:Boolean,
            default:false,
        },
        organization:{
            type:String,
            required:true,
        },
        employeeId:{
            type:String,
            required:true,
        },
        mobileNumber:{
            type:String,
            required:true
        },
        officialEmail:{
            type:String,
            required:true,
            lowercase:true,
        },
        paymentBy:{
            type:String,
        },

        // step 2:Visit Details
        purpose:{
            type:String,
            required:true,
        },
        numberOfRooms:{
            type:String,
            required:true,
            min:1
        },
        arrivalDateTime:{
            type:Date,
            required:true,
        },
        departureDateTime:{
            type:Date,
            required:true,
        },

        // Step 3:Guests
        guests:{
            type:[guestSchema],
            required:true,
        },

        // Terms & Captcha
        agreeTerms:{
            type:Boolean,
            required:true,
        },

        // Booking status
        status:{
            type:String,
            enum:["PENDING","APPROVED","REJECTED"],
            default:"PENDING",
        },

        // Booking ID
        bookingId:{
            type:String,
            unique:true,
        },
        
    },
    {timestamps:true}
);

module.exports=mongoose.model("Booking",bookingSchema);