import React from 'react'

export async function submitBooking(formData){
    const res= await fetch("/api/booking",{
        method:"POST",
        body:formData
    });
    if(!res.ok){
        const err=await res.json().catch(()=>({message:res.statusText}));
        throw new Error(err.message || "Submission failed");
    }
    return res.json();
  
}

