import { response} from "express";
import mongoose from "mongoose";

const GuestHouseResponseSchema=new mongoose.Schema({
    responses:{type:Object,required:true},
    submittedAt:{type:Object,default:Date.now}
})

export default mongoose.model("GuestHouseResponse",GuestHouseResponseSchema);

