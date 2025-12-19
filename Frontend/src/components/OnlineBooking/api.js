import React from 'react'

export async function submitBooking(data){
    const res= await fetch("/api/booking",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    });
    if(!res.ok){
        const err=await res.json().catch(()=>({message:res.statusText}));
        throw new Error(err.message || "Submission failed");
    }
    return res.json();
  
}

