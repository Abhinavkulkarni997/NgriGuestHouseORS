// const mongoose=require('mongoose');

// const counterSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//         unique:true,
//     },
//     seq:{
//         type:Number,
//         default:0
//     }

// });

// module.exports=mongoose.model("Counter",counterSchema);

// code is modified on 16-02-2026 to prevent same booking id to two users 
const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  sequenceValue: { type: Number, default: 0 }
});

counterSchema.index({ name: 1, year: 1 }, { unique: true });

const Counter = mongoose.models.Counter || mongoose.model("Counter", counterSchema);
module.exports = Counter;
