import React, { useEffect, useState } from "react";
import FlagshipApps from "../components/FlagshipApps";
import AppsHeroSection from "../components/AppsHeroSection";
import Loader from "../components/Loader";

const OurApps = () => {
   const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (loading) {
      return <Loader />;
    }

  return (
    <>
      <div className="font-[Poppins] text-gray-100 bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] overflow-hidden">
        <AppsHeroSection />
        <FlagshipApps />
      </div>
    </>
  );
};

export default OurApps;
