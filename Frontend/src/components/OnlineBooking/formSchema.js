import {z} from "zod";
 const guestSchema=z.object({
    name:z.string().min(1,"Guest name is required"),
    organization:z.string().optional(),
    age:z.preprocess((v)=>(v==="" || v===null?undefined:Number(v)),z.number().int().positive().optional()),
    gender:z.enum(["MALE","FEMALE"]).optional(),
    contact:z.string().regex(/^[0-9]{10}$/,'Enter valid 10 digit mobile number'),
    idProof:z.string().optional(),
    category:z.string().optional(),
    isApplicantGuest:z.boolean().optional(),

 });

 const bookingSchema=z.object({
   // Step1 Applicant details
    applicantName:z.string().min(1,"Applicant name required"),
    designation:z.string().min(1,"Designation required"),
    isApplicantGuest:z.boolean().optional(),

    officeIdFile: z
  .instanceof(FileList)
  .optional()
  .refine(
    (files) => {
      if (!files || files.length === 0) return true;

      const file = files[0];

      return (
        file.type === "application/pdf" &&
        file.size <= 2 * 1024 * 1024
      );
    },
    "Only PDF files up to 2MB are allowed"
  ),
    organization:z.string().min(1,"Choose organization"),
    employeeId:z.string().min(4,"EmployeeID is required"),
    mobileNumber:z.string().regex(/^[0-9]{10}$/,'Enter valid 10 digit mobile number'),
    officialEmail:z.string().email("Enter Email Id / Invalid email"),
    paymentBy:z.string().min(1,"Please select who will bear the Payment"),

  


   //  step-2- Visit details
   purpose:z.string().min(1,"select purpose"),
//    numberOfRooms: z.preprocess(
//   (val) => (val === "" || Number.isNaN(val) ? undefined : val),
//   z.number({
//     required_error: "Number of rooms is required",
//   }).int().min(1, "Select at least 1 room")
// ),
  numberOfRooms: z.preprocess(
  (val) => (val === "" || val === undefined ? undefined : Number(val)),
  z.number({
    required_error: "Number of rooms is required",
  }).int().min(1, "Please select number of rooms")
),
   arrivalDate:z.string().min(1,"Arrival date required"),
   arrivalTime:z.string().min(1,"Arrival time required"),
   departureDate:z.string().min(1,"Departure date required"),
   departureTime:z.string().min(1,"Departure time required"),

   // step 3 - Guests:array
   guests:z.array(guestSchema).min(1).max(6),

   captcha:z.string().min(1,"Enter captcha"),
   captchaValue: z.string().optional(),
  

   // terms
  agreeTerms: z.literal(true, {
  errorMap: () => ({ message: "You must accept terms" })
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