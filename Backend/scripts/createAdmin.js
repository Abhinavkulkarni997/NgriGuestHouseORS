const mongoose=require("mongoose");
const Admin=require('../models/Admin');
const bcrypt=require("bcryptjs");

mongoose.connect('mongodb://localhost:27017/guesthouse');

const createAdmin=async()=>{
    try{
    const adminExists=await Admin.findOne({email:"admin@ngri.com"});
    if(adminExists){
        console.log('Admin already exists');
        process.exit();
    }
    await Admin.create({
        email:'admin@ngri.com',
        password:await bcrypt.hash('Admin@123',10)
    })
    console.log('user created successfully');
    process.exit();
}catch(error){
    console.log('Error creating admin:',error);
    process.exit(1);
}
}

createAdmin();