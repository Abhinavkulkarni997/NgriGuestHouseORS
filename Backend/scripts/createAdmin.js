const mongoose=require("mongoose");
const Admin=require('../models/Admin');

mongoose.connect('mongodb://localhost:27017/guesthouse');

const createAdmin=async()=>{
    const adminExists=await Admin.findOne({email:"admin@ngri.res.in"});
    if(adminExists){
        console.log('Admin already exists');
        process.exit();
    }
    await Admin.create({
        email:'admin@ngri.res.in',
        password:'admin@123'
    })
    console.log('user created successfully');
    process.exit();
}

createAdmin();