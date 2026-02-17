// in the below code we have 

// const mongoose=require("mongoose");
// const RoomSchema=new mongoose.Schema({

//     roomNumber:{
//         type: String,
//         required:true,
//         unique:true
//     },
//     roomType: {
//         type: String,
//         enum: ["SINGLE","DOUBLE","SUITE"],
//         required:true
//     },
//     isActive:{
//         type: Boolean,
//         default:false
//     }

// },{timestamps:true});
// module.exports=mongoose.model("Room",RoomSchema);




// code developed on 15-02-2026 according to the input provided by GH team and schema is changed as all the rooms are now by default AC rooms 
const mongoose=require("mongoose");
const RoomSchema=new mongoose.Schema({
    roomNumber:{
        type: Number,
        required:true,
        unique:true
    },
   
    isActive:{
        type: Boolean,
        default:true
    }

},{timestamps:true});
module.exports=mongoose.model("Room",RoomSchema);