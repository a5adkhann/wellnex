import React from 'react';
import { motion } from 'framer-motion';
import {   MdOutlineSelfImprovement, MdWatch } from 'react-icons/md';

import { FaHeartbeat,FaRunning, } from "react-icons/fa";

import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.5, type: 'spring', stiffness: 100 } },
    hover: { scale: 1.05, boxShadow: '0 0 15px rgba(52, 199, 89, 0.5)', transition: { duration: 0.2 } },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -15 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8, delay: 0.7 } },
  };

  

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 123, 255, 0.3), rgba(52, 9, 255, 0.3)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
     
     
      <div className="absolute inset-0 bg-black opacity-15"></div> {/* Subtle overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Side: Text Content with Icons */}
        <div className="text-center lg:text-left lg:w-3/5 relative">
          {/* Small Wellness Icons Around Text */}
          <motion.div
            className="absolute -top-4 -left-4 text-[#34C759]"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
          >
            <FaHeartbeat className="text-2xl" />
          </motion.div>
      
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 tracking-tight font-poppins bg-clip-text text-transparent bg-gradient-to-r from-white to-[#D4F4E2] relative"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Wellnex Systems
            <span className="absolute -bottom-1 left-0 w-24 h-1 bg-gradient-to-r from-[#34C759] to-[#D4F4E2]"></span> {/* Gradient Underline */}
          </motion.h1>
          <motion.div
            className="text-2xl sm:text-3xl font-light mb-4 font-poppins text-[#E6F0FA] drop-shadow-md"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <TypeAnimation
              sequence={[
                'Wellness.',
                1000,
                'Tech.',
                1000,
                'Community.',
                1000,
              ]}
              wrapper="span"
              repeat={Infinity}
              speed={50}
            />
          </motion.div>
          <motion.p
            className="text-base sm:text-lg mb-6 max-w-md mx-auto lg:mx-0 font-poppins text-gray-200"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            A unified digital ecosystem empowering individuals, gyms, and wellness providers through cutting-edge HealthTech and fitness innovation.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident laudantium accusantium culpa id maxime sint numquam perspiciatis aperiam? Veritatis dolores reprehenderit corrupti id sapiente iste necessitatibus eum vitae, quaerat expedita.
          </motion.p>
          <motion.div
            className="inline-block bg-[#34C759] text-white px-3 py-1.5 rounded-full text-sm font-semibold font-poppins mb-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Trusted by 10K+ Active Users
          </motion.div>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <motion.a
              href="#join"
              className="bg-gradient-to-r from-[#34C759] to-[#2ca44e] text-white px-6 py-3 rounded-full font-semibold text-base font-poppins shadow-md hover:shadow-xl"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Join the Movement
            </motion.a>
            <motion.a
              href="#apps"
              className="border-2 border-[#D4F4E2] text-[#D4F4E2] px-6 py-3 rounded-full font-semibold text-base font-poppins shadow-md hover:bg-[#D4F4E2] hover:text-[#007BFF] hover:shadow-xl transition duration-200"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              Explore Our Apps
            </motion.a>
          </div>
        </div>
        {/* Right Side: Dynamic Icon Cluster */}
        <motion.div
          className="hidden lg:block lg:w-2/5 text-center relative"
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="relative flex justify-center items-center">
            <motion.div
              className="absolute text-[#34C759]"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              style={{ top: '-40px', left: '-20px' }}
            >
              <FaHeartbeat className="text-5xl" />
            </motion.div>
            <motion.div
              className="absolute text-[#D4F4E2]"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              style={{ top: '20px', right: '-30px' }}
            >
              <FaRunning className="text-4xl" />
            </motion.div>
            <motion.div
              className="absolute text-[#E6F0FA]"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              style={{ bottom: '-30px', left: '0px' }}
            >
              <MdOutlineSelfImprovement className="text-6xl" />
            </motion.div>
            <motion.div
              className="absolute text-[#34C759]"
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              style={{ bottom: '10px', right: '10px' }}
            >
              <MdWatch className="text-3xl" />
            </motion.div>
           <MdOutlineSelfImprovement className="text-[250px]" />
          </div>
          <motion.p
            className="text-sm italic text-[#D4F4E2] mt-4 font-poppins"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            “Transforming wellness with technology.” — Team Wellnex
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;