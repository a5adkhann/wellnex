import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import ContactHeroSection from "../components/ContactHeroSection";
import LetsConnectSection from "../components/LetsConnectSection";
import ContactFormSection from "../components/ContactFormSection";

const Contact = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="font-[Poppins] text-black bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13]">
      <ContactHeroSection/>

      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <LetsConnectSection/>

        <ContactFormSection/>
      </section>
    </div>
  );
};

export default Contact;
