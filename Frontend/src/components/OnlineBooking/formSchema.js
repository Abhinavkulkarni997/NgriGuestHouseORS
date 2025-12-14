import {z} from "zod";
 const guestSchema=z.object({
    name:z.string().min(1,"Guest name is required"),
    organization:z.string().optional(),
    age:z.preprocess((v)=>(v===""?undefined:Number(v)),z.number().int().positive().optional()),
    gender:z.enum(["MALE","FEMALE"]).or(z.string()).optional(),
    contact:z.string().min(0).optional(),
    idProof:z.string().optional(),
    category:z.string().optional()

 });

 const bookingSchema=z.object({
    applicationName:z.string().min(1,"Applicant name required"),
    designation:z.string().min(1,"Designation required"),
    officeIdFile:z
    .any()
    .refine((f)=>!f || (f && f.size<=2*1024*1024),"Max file size 2MB")
    .optional(),
    organization:z.string().min(1,"Choose organization"),
    employeeId:z.string().optional(),
    mobileNumber:z.string().min(7,"Enter mobile number"),
    officialEmail:z.string().email("Invalid email"),
    paymentBy:z.string().optional(),


   //  step-2- Visit details
   purpose:z.string().min(1,"select purpose"),
   numberOfRooms:z.number().int().positive().min(1),
   arrivalDate:z.string().min(1,"Arrival date required"),
   arrivalTime:z.string().min(1,"Arrival time required"),
   departureDate:z.string().min(1,"Departure date required"),
   departureTime:z.string().min(1,"Departure time required"),

   // step 3 - Guests:array
   guests:z.array(guestSchema).max(6),

   // terms
   agreeTerms:z.boolean().refine(Boolean,"You must accept terms")
 });

 const defaultValues={
   applicantName:"",
   designation:"",
   officeIdFile:null,
   organization:"",
   employeeID:"",
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

export default {guestSchema,bookingSchema,defaultValues};