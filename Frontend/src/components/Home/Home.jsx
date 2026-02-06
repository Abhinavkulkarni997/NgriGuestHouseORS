// import React,{useEffect} from 'react';
// import Hero from '../Hero/Hero';
// import GuestHouseCharges from '../Charges/GuestHouseCharges';
// import Guidelines from '../Guidelines/Guidelines';
// import GuestHouseGallery from '../GuestHouseGallery/GuestHouseGallery';
// // import GuestHouseGallerySwiper from '../GuestHouseGallery/GuestHouseGallerySwiper';
// // import ScrollToTop from '../ScrollToTop/ScrollToTop';
// import {useLocation} from 'react-router-dom';

// const Home = () => {
//   const {hash}=useLocation();

//   useEffect(()=>{
//     if(hash){
//       const section=document.querySelector(hash);
//       section?.scrollIntoView({behavior:'smooth'});
      
//     }

//   },[hash]);


//   return (
//      <>
//      <Hero/>
//      <section id="charges" className='scroll-mt-28 '>   
//         <GuestHouseCharges />
//        
//      </section>
  
//     <section id="guidelines" className='scroll-mt-28 py-20'>
//     <Guidelines />
//       </section>

//       <GuestHouseGallery/>

//       {/* <ScrollToTop/> */}
//       {/* <GuestHouseGallerySwiper/> */}
//     </>
//   )
// }

// export default Home;

// code developed and changed on 06-02-2026 latest home code is above and the below code is old code which is commented for reference and backup
import React,{useEffect} from 'react';
import Hero from '../Hero/Hero';
import GuestHouseCharges from '../Charges/GuestHouseCharges';
import Guidelines from '../Guidelines/Guidelines';
import GuestHouseGallery from '../GuestHouseGallery/GuestHouseGallery';
// import GuestHouseGallerySwiper from '../GuestHouseGallery/GuestHouseGallerySwiper';
// import ScrollToTop from '../ScrollToTop/ScrollToTop';
import {useLocation} from 'react-router-dom';

const Home = () => {
  const {hash}=useLocation();

  useEffect(()=>{
    if(hash){
      const section=document.querySelector(hash);
      section?.scrollIntoView({behavior:'smooth'});  
    }
  },[hash]);


  return (
     <>
     <Hero/>
     <section id="charges" className='scroll-mt-28 py-20'>
       <div className="max-w-7xl mx-auto px-4">
        <GuestHouseCharges />
        </div>
     </section>
  
    <section id="guidelines" className='scroll-mt-28 py-20'>
     <div className="max-w-7xl mx-auto px-4">
    <Guidelines />
  </div>
      </section>

       <section  className=' py-20'>

      <div className="max-w-7xl mx-auto px-4">
      <GuestHouseGallery/>
  </div>
  </section>
   
      {/* <ScrollToTop/> */}
      {/* <GuestHouseGallerySwiper/> */}
    </>
  )
}

export default Home;