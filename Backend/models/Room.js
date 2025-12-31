const mongoose=require("mongoose");
const RoomSchema=new mongoose.Schema({

    roomNumber:{
        type: String,
        required:true,
        unique:true
    },
    roomType: {
        type: String,
        enum: ["SINGLE","DOUBLE","SUITE"],
        required:true
    },
    isActive:{
        type: Boolean,
        default:false
    }

},{timestamps:true});
module.exports=mongoose.model("Room",RoomSchema);