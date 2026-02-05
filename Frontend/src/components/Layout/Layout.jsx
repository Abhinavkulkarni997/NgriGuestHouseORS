import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Navbar1 from "../Navbar/Navbar1";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
const Layout = ({ children,hasHero=false }) => {
  return (
    <>
      <Navbar1 hasHero={hasHero}/>

      {!hasHero && <div className="h-[96px]"/>}

      {/* Proper page wrapper (gives spacing but full width) */}
      <main className="min-h-screen w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
            <ScrollToTop/>

      <Footer />
    </>
  );
};

export default Layout;
