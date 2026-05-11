import {z} from "zod";
// the below code is commented on 30-04-2026 as fields like organization , age gender idproof category are made compulsory
//  const guestSchema=z.object({
//     name:z.string().min(1,"Guest name is required"),
//     organization:z.string().optional(),
//     age:z.preprocess((v)=>(v==="" || v===null?undefined:Number(v)),z.number().int().positive().optional()),
//     gender:z.enum(["MALE","FEMALE"]).optional(),
//     contact:z.string().regex(/^[0-9]{10}$/,'Please Enter a valid 10 digit mobile number'),
//     idProof:z.string().optional(),
//     category:z.string().optional(),
//     isApplicantGuest:z.boolean().optional(),

//  });
 const guestSchema=z.object({
    name:z.string().min(1,"Guest name is required"),
    organization:z.string().min(1,"Please Select the Organization"),
 age: z.preprocess(
  (v) => {
    if (v === "" || v === null || v === undefined) return undefined;
    const num = Number(v);
    return isNaN(num) ? undefined : num;
  },
  z.number({
    required_error: "Please enter the valid Age",
    invalid_type_error: "Please enter the valid Age",
  })
    .int("Please Enter The Valid Age")
    .positive("Please Enter The Valid Age")
),
     gender: z.enum(["MALE", "FEMALE"], {
    errorMap: () => ({ message: "Please Select The Gender" }),
  }),
    contact:z.string().regex(/^[0-9]{10}$/,'Please Enter a valid 10 digit mobile number'),
    idProof:z.string().min(1,"Please Enter the Id proof Number"),
    category:z.string().min(1,"Please select the  category"),
    isApplicantGuest:z.boolean().optional(),

 });
 const bookingSchema=z.object({
   // Step1 Applicant details
    applicantName:z.string().min(1,"Applicant Name Is Required"),
    designation:z.string().min(1,"Designation is Required"),
    isApplicantGuest:z.boolean().optional(),

    // officeIdFile is made optional on 30-04-2026 as some users reported issue in uploading the file and also to make the form submission easy. 
    // We can validate the file upload separately and show error message if file is not uploaded or invalid.
  //   officeIdFile: z
  // .instanceof(FileList)
  // .optional()
  // .refine(
  //   (files) => {
  //     if (!files || files.length === 0) return true;

  //     const file = files[0];

  //     return (
  //       file.type === "application/pdf" &&
  //       file.size <= 2 * 1024 * 1024
  //     );
  //   },
  //   "Only PDF files up to 2MB are allowed"
  // ),

  officeIdFile:z
  .any()
  .refine((files)=>files?.length===1,{message:"Scanned Copy Of Office Id  is Required"})
  .refine((files)=>files?.[0]?.type==="application/pdf",{
    message:"Only PDF files are allowed"
  })
  .refine((files)=>files?.[0]?.size<=2*1024*1024,{
    message:"File size should be less than 2MB"
  }),
    organization:z.string().min(1,"Please Select the Organization Name"),
    employeeId:z.string().min(4,"Please Enter the EmployeeID "),
    mobileNumber:z.string().regex(/^[0-9]{10}$/,'Please Enter a valid 10 digit mobile number'),
    officialEmail:z.string().email("Enter Email Id / Invalid email"),
    paymentBy:z.string().min(1,"Please Select Who Will Bear The Payment"),

  


   //  step-2- Visit details
   purpose:z.string().min(1,"Please Select The Purpose"),
//    numberOfRooms: z.preprocess(
//   (val) => (val === "" || Number.isNaN(val) ? undefined : val),
//   z.number({
//     required_error: "Number of rooms is required",
//   }).int().min(1, "Select at least 1 room")
// ),
// The below number of Rooms is working but there is slight change in the error message when user selects the default option and tries to proceed without changing it.
//  It shows "Please select number of rooms" instead of "Number of rooms is required".
//  This is because we are treating empty string as undefined and zod is giving the error message for invalid type instead of required error. 
// We can customize the error message for invalid type to be same as required error to avoid confusion.
//   numberOfRooms: z.preprocess(
//   (val) => (val === "" || val === undefined ? undefined : Number(val)),
//   z.number({
//     required_error: "Number of rooms is required",
//   }).int().min(1, "Please select number of rooms")
// ),
numberOfRooms: z.preprocess(
  (val) => (val === "" || val === undefined ? undefined : Number(val)),
  z.number({
    required_error: "Number Of Rooms Is Required",
  }).int().min(1, "Please Select The Number Of Rooms")
),
   arrivalDate:z.string().min(1,"Arrival Date is Required"),
   arrivalTime:z.string().min(1,"Arrival Time is Required"),
   departureDate:z.string().min(1,"Departure Date is Required"),
   departureTime:z.string().min(1,"Departure Time is Required"),

   // step 3 - Guests:array
   guests:z.array(guestSchema).min(1).max(6),

   captcha:z.string().min(1,"Please Enter the Captcha"),
   captchaValue: z.string().optional(),
  

   // terms
  agreeTerms: z.literal(true, {
  errorMap: () => ({ message: "You must Accept The Terms & Conditions" })
})
  })
  .superRefine(
    (data,ctx) => {
      const captchaText=ctx?.context?.captchaText;

      if(captchaText && data.captcha!==data.captchaText){
    ctx.addIssue({
      path:["captcha"],
      message:"Captcha does not match",
      code:"custom",
    })
  }



      if(!data.arrivalDate|| !data.arrivalTime || !data.departureDate || !data.departureTime){
         return;
      }
    
      if(data.arrivalDate){
        const today=new Date();
        today.setHours(0,0,0,0);

        const arrivalDate=new Date(data.arrivalDate);
        arrivalDate.setHours(0,0,0,0);
      
      if(arrivalDate<today){
        ctx.addIssue({
          path:["arrivalDate"],
          message:"Arrival date cannot be in the Past Date",
          code:z.ZodIssueCode.custom,
        })
      }
      
    }
     const arrival=new Date(`${data.arrivalDate}T${data.arrivalTime}`);
     const departure=new Date(`${data.departureDate}T${data.departureTime}`);

     if(departure<=arrival ){
      ctx.addIssue({
         path:["departureDate"],
         message:"Departure date & time must be after arrival",
         code: z.ZodIssueCode.custom,
      })
     }
  //    if (!data.agreeTerms) {
  //   ctx.addIssue({
  //     path: ["agreeTerms"],
  //     message: "You must accept Terms & Conditions",
  //     code: z.ZodIssueCode.custom,
  //   });
  // }

  if(data.isApplicantGuest){
   const firstGuest=data.guests[0];
   if(!firstGuest){
      ctx.addIssue({
         path:["guests"],
         message:"Applicant must be added as guest",
         code:z.ZodIssueCode.custom,
      });
   }else{
      if(firstGuest.name!==data.applicantName){
         ctx.addIssue({
            path:["guests",0,"name"],
            message:"Applicant name must match",
            code:z.ZodIssueCode.custom,
         })
      }
  }

  }
  });

 const defaultValues={
   applicantName:"",
   designation:"",
   officeIdFile:undefined,
   organization:"",
   employeeId:"",
   mobileNumber:"",
   officialEmail:"",
   paymentBy:"",
   purpose:"",
   numberOfRooms:"",
   arrivalDate:"",
   arrivalTime:"",
   departureDate:"",
   departureTime:"",

   guests:[
      {
         name:"",organization:"",age:undefined,gender:undefined,contact:"",idProof:"",category:"",isApplicant:false}
      
   ],
   agreeTerms:false,
   captcha:"",
   captchaValue:"",

   

}

export  {guestSchema,bookingSchema,defaultValues};