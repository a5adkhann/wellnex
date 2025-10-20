import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#030d0a] via-[#07140e] to-[#0d2018] text-white flex flex-col">
      {/* Navbar */}
      <Navbar/>

      {/* Header Section */}
      <section className="px-8 md:px-20 py-16 text-left border-b border-[#1b2e1b] ">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-green-400 mb-4"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 max-w-2xl leading-relaxed"
        >
          Whether you have a question, a suggestion, or you just want to say hello — 
          our team at <span className="text-green-400">Wellnex Systems</span> is always ready to connect.
          Let’s make something meaningful together.
        </motion.p>
      </section>

      {/* Contact Section */}
      <div className="flex-1 px-8 md:px-20 pb-20 grid md:grid-cols-2 gap-14 mt-10">
        {/* Left Side */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-4 bg-green-500/10 rounded-2xl shadow-lg border border-green-400/20">
              <FaMapMarkerAlt className="text-green-400 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Office</h4>
              <p className="text-gray-400">Tech Park, Karachi, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-green-500/10 rounded-2xl shadow-lg border border-green-400/20">
              <FaEnvelope className="text-green-400 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-400">support@wellnex.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-4 bg-green-500/10 rounded-2xl shadow-lg border border-green-400/20">
              <FaPhoneAlt className="text-green-400 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-400">+92 311 4567890</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-6 text-green-400">Send us a Message</h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-white/5 border border-gray-700 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-white/5 border border-gray-700 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 bg-white/5 border border-gray-700 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      <Footer/>
    </div>
  );
};

export default Contact;
