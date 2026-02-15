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

         guestCategory: {
            type: String,
            enum: [
                'CSIR_EMPLOYEE',
                'PROJECT_FELLOW',
                'NON_DEPENDANT_FAMILY',
                'OFFICIAL_EXPERT',
                'ASI_PSU_EMPLOYEE',
                'OTHER_GUEST',
                'NRI_FOREIGN'
            ],
         
            default: null
        },

        // acType is removed on 15-02-2026 as all the rooms are AC by default provided by GH data so below is commented
        // acType: {
        //     type: String,
        //     enum: ["AC", "NON_AC"],
            
        //     default:null
        // },
        // step 2:Visit Details
        purpose:{
            type:String,
            required:true,
        },
        numberOfRooms:{
            type: Number,
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
             type: [{
                name: String,
                organization: String,
                age: Number,
                gender: String,
                contact: String,
                idProof: String,
                category: String,
                isApplicant: { type: Boolean, default: false }
                }],
                default: []
            },

        // Terms & Captcha
        agreeTerms:{
            type:Boolean,
            required:true,
        },

        // Booking status
        status:{
            type:String,
            enum:["PENDING","APPROVED","REJECTED","ALLOCATED","VACATED","FINALIZED"],
            default:"PENDING",
        },
        adminRemarks:{
            type:String,
            default:"",
        },
        officeIdFile:{
            type:String,

        },

        // Booking ID
        bookingId:{
            type:String,
            unique:true,
            index:true
        },

        // adding room schema here
        // allocatedRoom:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:"Room",
        // },

        // below room is added on 15-02-2026 changed from allocated room to allocatedRooms since we got data from GH 

         allocatedRooms:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Room",
        }],

       
       

        // roomNumber and roomType is removed on 15-02-2026 because as per new data these are not required
        // roomNumber:String,
        // roomType:String,
      
        approvedAt:Date,
        allocatedAt:{
            type:Date,
        },
        rejectedAt:{
            type:Date,
        },
        vacatedAt:{
            type:Date,
        },
        vacateRemarks:{
            type:String,
        },



        // ratePerDay:{
        //     type:Number,
        // },
        // gstPercent:{
        //     type:Number,
        //     default:0,
        // },
        // numberOfDays:{type:Number},
        finalizeRemarks:String,
        finalizedAt:Date,
        invoice:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Invoice",

        },

        expectedDepartureDateTime:Date,
        actualDepartureDateTime:Date,
        

        
    },
     
    {timestamps:true}
);

// code added on 15-02-2026 and  allocated rooms length matches numberOfRooms.
bookingSchema.pre("save", function(next) {

  if (this.arrivalDateTime >= this.departureDateTime) {
    return next(new Error("Departure must be after arrival"));
  }

  if (this.status === "ALLOCATED") {
    if (!this.allocatedRooms ||
        this.allocatedRooms.length !== this.numberOfRooms) {
      return next(new Error("Allocated rooms mismatch"));
    }
  }

  next();
});

bookingSchema.index({
  allocatedRooms: 1,
  arrivalDateTime: 1,
  departureDateTime: 1
});

module.exports=mongoose.model("Booking",bookingSchema);