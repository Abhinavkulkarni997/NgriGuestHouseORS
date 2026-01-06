const Admin=require('../models/Admin');
const jwt=require("jsonwebtoken");
const loginAdmin=async(req,res)=>{
    const {email,password}=req.body;

    const admin=await Admin.finOne({email});
    if(!admin)
        return res.status(401).json({message:"Invalid credentials"});

    const isMatch=await admin.comparePassword(password);
    if(!isMatch)
        return res.status(401).json({message:"Invalid credentials"});

    const token=jwt.sign(
        {id:admin._id,role:admin.role},
        process.env.JWT_SECRET,
        {expiresIn:"1d"});
        res.cookie("adminToken",token,{
            httpOnly:true,
            secure:false, //  make this true in production(HTTPS)
            sameSite:"strict",
            maxAge:24*60*60*1000

        })
        .json({
            success:true,
            admin:{email:admin.email}
        });
};
module.exports={loginAdmin};