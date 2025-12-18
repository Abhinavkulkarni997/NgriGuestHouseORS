import GuestHouseResponse from "../models/GuestHouseResponse";

export const SubmitGuestHouseController=async (req,res)=>{
    try{
        const newResponse=new GuestHouseResponse({
            responses:req.body
        });
        await newResponse.save();
        res.status(201).json({message:'Survey response submitted successfully'});

    }catch(err){
        res.status(500).json({message:'Server Error',err:err.message});
    }
    
}