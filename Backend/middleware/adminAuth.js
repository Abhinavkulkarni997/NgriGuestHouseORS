const jwt=require("jsonwebtoken");
const adminAuth=(req,res,next)=>{
    // const token=req.cookies.adminToken;
    const authHeader=req.headers.authorization;
    // if(!token){
    //     return res.status(401).json({message:"Unauthorized"});
    // }
       if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({message:"Unauthorized"});
    }
    const token=authHeader.split(" ")[1];
    
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.admin=decoded;
        next();
    }catch(error){
        res.status(401).json({message:"Invalid token"});
    }
}


module.exports=adminAuth;