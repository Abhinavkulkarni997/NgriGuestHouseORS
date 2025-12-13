import {z} from "zod";
 const guestSchema=z.object({
    name:z.string().min(1,"Guest name is required"),
    organization:z.string().optional(),
    age:z.preprocess((v)=>(v===""?undefined:Number(v)),z.number().int().positive().optional()),
    gender:z.enum(["MALE","FEMALE"]).or(z.string()).optional(),
    contact:z.string().min(0).optional(),
    idProof:z.string().optional(),
    category:z.string().optional()

 })

 const bookingSchema=z.object({
    applicationName:z.string().min(1,"Applicant name required"),
    designation:z.string().min(1,"Designation required"),
    officeIdFile:z
 })