import {useEffect, useState} from 'react'
import { FcGlobe } from "react-icons/fc";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [isVisible,setIsVisible]=useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    const toggleVisible=()=>{
        const scrollY = window.scrollY;
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
        const progress = (scrollY / totalHeight) * 100;
        setScrollProgress(progress);
    }

    const ScrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })}

        useEffect(()=>{
            window.addEventListener('scroll',toggleVisible);
            return ()=>{
                window.removeEventListener('scroll',toggleVisible);
            }
        },[]);


        const radius = 24;
  const stroke = 5;
  const normalizedRadius = radius - stroke/2 ;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;
  return (
    <div className='fixed bottom-0 right-0 z-50 '>
    {isVisible &&(
        <button onClick={ScrollToTop} className='relative w-[72px] h-[72px]'>
        <svg height={radius * 2} width={radius * 2} className='absolute top-0 left-0  rotate-[-90deg] ' >
        <circle
        stroke="#FFFFE3"
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
       
        
        />
        <circle 
        stroke="#f59e0b"
        fill="transparent"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeLinecap= "round"
        strokeDashoffset={strokeDashoffset}

        />

        </svg>
         {/* <FcGlobe className='cursor-pointer bg-white p-2 rounded-lg'size={48}/> */}
         <FaArrowCircleUp className='text-amber-600 -inset-4 m-auto w-10 h-10 bg-white rounded-full shadow-md cursor-pointer p-2  absolute bottom-2 right-2'  />
        </button>
       
    )}
    </div>
  )
}

export default ScrollToTop
