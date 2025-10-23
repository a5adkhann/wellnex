import React from "react";
import { motion } from "framer-motion";

const LetsConnectSection = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] text-white flex flex-col justify-center p-10 md:p-16 border-t-2 border-gray-600">
        <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f8faf9] mb-4 sm:mb-5"
          >
            Let's Connect
          </motion.h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Fill out the form and we’ll get back to you shortly.
        </p>

        <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
        <ul className="space-y-4 text-gray-300 text-sm">
          <li className="flex items-start gap-3">
            <span className="text-[#34C759] mt-1">✔</span>
            <span>Our expert will review your request and contact you.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#34C759] mt-1">✔</span>
            <span>If needed, we’ll sign an NDA to ensure your privacy.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#34C759] mt-1">✔</span>
            <span>Our Pre-Sales Manager will send you a proposal.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#34C759] mt-1">✔</span>
            <span>Then we start working on your project together.</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default LetsConnectSection;
