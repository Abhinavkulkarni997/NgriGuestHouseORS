import {z} from "zod";
 const guestSchema=z.object({
    name:z.string().min(1,"Guest name is required"),
    organization:z.string().optional(),
    age:z.preprocess((v)=>(v==="" || v===null?undefined:Number(v)),z.number().int().positive().optional()),
    gender:z.enum(["MALE","FEMALE"]).optional(),
    contact:z.string().min(0).optional(),
    idProof:z.string().optional(),
    category:z.string().optional()

 });

 const bookingSchema=z.object({
   // Step1 Applicant details
    applicantName:z.string().min(1,"Applicant name required"),
    designation:z.string().min(1,"Designation required"),
    officeIdFile: z
  .any()
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
    officialEmail:z.string().email("Invalid email"),
    paymentBy:z.string().optional(),


   //  step-2- Visit details
   purpose:z.string().min(1,"select purpose"),
   numberOfRooms:z.preprocess((v)=>Number(v),z.number().int().positive().min(1)),
   arrivalDate:z.string().min(1,"Arrival date required"),
   arrivalTime:z.string().min(1,"Arrival time required"),
   departureDate:z.string().min(1,"Departure date required"),
   departureTime:z.string().min(1,"Departure time required"),

   // step 3 - Guests:array
   guests:z.array(guestSchema).min(1).max(6),

   // terms
   agreeTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept terms" })
    })
  })
  .superRefine(
    (data,ctx) => {
      if(!data.arrivalDate|| !data.arrivalTime || !data.departureDate || !data.departureTime){
         return;
      }
    
      
     const arrival=new Date(`${data.arrivalDate}T${data.arrivalTime}`);
     const departure=new Date(`${data.departure}T${data.departureTime}`);

     if(arrival>=departure){
      ctx.addIssue({
         path:["departureDate"],
         message:"Departure date & time must be after arrival",
      })
     }
  });


 const defaultValues={
   applicantName:"",
   designation:"",
   officeIdFile:null,
   organization:"",
   employeeId:"",
   mobileNumber:"",
   officialEmail:"",
   paymentBy:"",
   purpose:"",
   numberOfRooms:1,
   arrivalDate:"",
   arrivalTime:"",
   departureDate:"",
   departureTime:"",

   guests:[
      {
         name:"",organization:"",age:"",gender:"",contact:"",idProof:"",category:""}
      
   ],
   agreeTerms:false

}

export  {guestSchema,bookingSchema,defaultValues};