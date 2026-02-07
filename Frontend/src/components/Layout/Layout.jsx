// import React from "react";
// import Navbar from "../Navbar/Navbar";
// import Footer from "../Footer/Footer";
// import Navbar1 from "../Navbar/Navbar1";
// import ScrollToTop from "../ScrollToTop/ScrollToTop";
// const Layout = ({ children,hasHero=false }) => {
//   return (
//     <>
//       <Navbar1 hasHero={hasHero}/>

//       {!hasHero && <div className="h-[96px]"/>}

//       {/* Proper page wrapper (gives spacing but full width) */}
//       <main className="min-h-screen w-full ">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {children}
//         </div>
//       </main>
//             <ScrollToTop/>

//       <Footer />
//     </>
//   );
// };

// export default Layout;

// code developed and changed on 06-02-2026 latest layout code is below and the above code is old code which is commented for reference and backup
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Navbar1 from "../Navbar/Navbar1";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { ThemeProvider } from '../../Admin/Context/ThemeContext.jsx';
const Layout = ({ children,hasHero=false }) => {
  return (
    <>
    <ThemeProvider>
      <Navbar1 hasHero={hasHero}/>

      {/* Only NON-hero pages get offset */}
      {!hasHero && <div className="h-[96px]"/>}

      {/* Proper page wrapper (gives spacing but full width) */}
      <main className="min-h-screen w-full ">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
          {children}
        {/* </div> */}
      </main>
      </ThemeProvider>
            <ScrollToTop/>

      <Footer />
    </>
  );
};

export default Layout;

