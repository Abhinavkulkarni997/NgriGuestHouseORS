const Admin=require('../models/Admin');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcryptjs");

const adminLogin=async(req,res)=>{
    try{
        console.log("LOGIN BODY:",req.body);
    const {email,password}=req.body;

    console.log("EMAIL:",email);
    console.log("PASSWORD:",password);

    const admin=await Admin.findOne({email});
    console.log("ADMIN FOUND:",admin);
    if(!admin){
        console.log("Admin not found");
        return res.status(401).json({message:"Invalid credentials"});
    }

    const isMatch=await admin.comparePassword(password,admin.password);
    console.log("PASSWORD MATCH:",isMatch);
    console.log("PLAIN:", password);
console.log("HASH:", admin.password);
console.log("MATCH:", await admin.comparePassword(password));
    if(!isMatch){
        console.log("PASSWORD mismatch");
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

        console.log("LOGIN SUCCESS");
        return res.status(200).json({
            token,
            success:true,
            admin:{email:admin.email},
            message:"Login success"
        });

    }catch(error){
        console.log("Admin login Error:",error);
        res.status(500).json({message:"Server Error"});
    }
};
module.exports={adminLogin};



