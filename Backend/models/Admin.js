const mongoose=require("mongoose");
const bcrypt=require("bcryptjs");

// creation of adminSchema which requires email and password and role we assign to it as admin
const adminSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,default:"ADMIN"}
},{timestamps:true});

// Hashing of password
adminSchema.pre("save",async function(){
    if(!this.isModified("password")) return;
    this.password=await bcrypt.hash(this.password,10);

});

adminSchema.methods.comparePassword=function(password){
    return bcrypt.hash(password,this.password);
}

module.exports=mongoose.model("Admin",adminSchema);