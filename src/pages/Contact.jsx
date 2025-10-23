import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactHeroSection from "../components/ContactHeroSection";
import LetsConnectSection from "../components/LetsConnectSection";
import ContactFormSection from "../components/ContactFormSection";
import Loader from "../components/Loader";
import ContactDetailsSection from "../components/ContactDetailsSection";

const Contact = () => {

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
    <div className="font-[Poppins] text-black bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13]">
      <ContactHeroSection/>

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <LetsConnectSection/>

        <ContactFormSection/>
      </section>

      <ContactDetailsSection/>
    </div>
  );
};

export default Contact;
