import React from "react";
import { motion } from "framer-motion";

const ContactFormSection = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] border-t-2 border-l-2  border-gray-600 flex justify-center items-center p-10 md:p-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="  w-full max-w-3xl p-8 md:p-12"
        >
           <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#34C759]" />
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#FFF]">
                Contact Us
              </h2>
            </div>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your challenge / goal*"
              className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name*"
                className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
              />
              <input
                type="email"
                placeholder="Corporate email*"
                className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Phone number"
                className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
              />
              <input
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 text-white border border-gray-800  focus:ring-1 focus:ring-[#34C759] outline-none"
              />
            </div>

            <div className="flex items-center gap-3 text-sm text-white">
              <input type="checkbox" className="accent-[#34C759]" />
              <span>Secure data with NDA first</span>
            </div>

            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full px-4 py-3 text-white border border-gray-800 focus:ring-1 focus:ring-[#34C759] outline-none resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-l from-green-600 to-green-950 text-white py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-md"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default ContactFormSection;
