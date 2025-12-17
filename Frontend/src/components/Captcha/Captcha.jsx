import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form';
import {generateCaptcha} from './generatecaptcha';
const Captcha = () => {
    const {register,setValue,formState:{errors}}=useFormContext();
    const [captcha,setCaptcha]=useState("");

    const refreshCaptcha=()=>{
        const newCaptcha=generateCaptcha();
        setCaptcha(newCaptcha);
        setValue("captchaValue",newCaptcha);
    };
    useEffect(()=>{
        refreshCaptcha();
    },[]);

    return(
        <div className="space-y-3">
            <h2></h2>
        </div>
    )
  
}

export default Captcha
