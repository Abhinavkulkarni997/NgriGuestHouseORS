import React from 'react'

const generateCaptcha = (length=6) => {
    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
    let result="";
  for(let i=0;i<length;i++){
    result +=chars[Math.floor(Math.random()*chars.length)];
  }
  return result;
}

export default generateCaptcha