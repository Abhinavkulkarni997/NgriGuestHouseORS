const Admin=require('../models/Admin');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");
const adminLogin=async(req,res)=>{
    try{
    const {email,password}=req.body;

    const admin=await Admin.findOne({email});
    if(!admin){
        return res.status(401).json({message:"Invalid credentials"});
    }

    const isMatch=await Admin.comparePassword(password,admin.password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid credentials"});
    }

    const token=jwt.sign(
        {id:admin._id,role:"admin"},
        process.env.JWT_SECRET,
        {expiresIn:"1d"});
        res.cookie("adminToken",token,{
            httpOnly:true,
            secure:false, //  make this true in production(HTTPS)
            sameSite:"strict",
            maxAge:24*60*60*1000
        });

        return res.status(200).json({
            token,
            success:true,
            admin:{email:admin.email}
        });
    }catch(error){
        console.log("Admin login Error:",error);
        res.status(500).json({message:"Server Error"});
    }
};
module.exports={adminLogin};



