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
   <div className="relative h-screen w-full overflow-hidden">
  {/* Video background */}
  <video
    src="w1.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay (optional, halka dark effect dene ke liye) */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Navbar on top of video */}
  <div className="relative z-10">
    <Navbar />
  </div>
</div>

  );
};

export default Hero;