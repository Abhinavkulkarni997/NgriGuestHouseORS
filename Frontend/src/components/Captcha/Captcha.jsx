import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form';
import generateCaptcha from './generatecaptcha'
import { FiRefreshCcw } from "react-icons/fi";

const Captcha = ({captchaText,setCaptchaText}) => {
    const {register,formState:{errors}}=useFormContext();
    // const [captcha,setCaptcha]=useState("");

    const refreshCaptcha=()=>{
        const newCaptcha=generateCaptcha();
        setCaptchaText(newCaptcha);
       
    };
    useEffect(()=>{
        refreshCaptcha();
    },[]);

    return(
        <div className="space-y-3">
            <div className='flex items-center gap-3'>
                <div className='px-4 py-2 font-mono rounded bg-yellow-50 tracking-widest'>{captchaText}</div>
                <button type="button" className='text-sm text-cyan-600' onClick={refreshCaptcha}>Can't read image? <span className='text-cyan-600 text-sm'>click here to <FiRefreshCcw/> Refresh</span></button>
            </div>

            <input {...register("captcha")} placeholder='Enter Captcha'  className='w-full rounded-lg border p-3'/>
            {errors?. captcha && (
                <p className='text-red-600 text-sm'>{errors.captcha.message}</p>
            )}
        </div>
    )
  
}

export default Captcha;
