import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { MdOutlineSelfImprovement, MdWatch } from 'react-icons/md';
import { FaHeartbeat, FaRunning } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Heroo = () => {
  return (
    <section
      className="relative min-h-screen text-white bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 70, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1920&auto=format&fit=crop')`,
      }}
    >
    

      {/* Hero Content */}
      <div className="flex items-center justify-center min-h-screen px-5 sm:px-8 md:px-12 lg:px-20 py-10 md:py-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
          {/* Left Side */}
          <div className="text-center md:text-left space-y-5 sm:space-y-6">
            {/* Headline */}
           

            {/* Animated Text */}
            <motion.div
              className="text-2xl sm:text-2xl md:text-6xl  text-[#E6F0FA]/90 font-bold font-inter"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <TypeAnimation
                sequence={['Wellness.', 1000, 'Technology.', 1000, 'Community.', 1000]}
                wrapper="span"
                repeat={Infinity}
                speed={45}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg sm:text-base md:text-lg text-gray-100/90 max-w-2xl mx-auto md:mx-0 leading-relaxed tracking-wide font-inter"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              A unified digital ecosystem empowering individuals, gyms, and
              wellness providers through cutting-edge HealthTech and fitness
              innovation. Our mission: to merge wellness with what’s next.
            </motion.p>

            {/* Badge */}
            <motion.div
              className="inline-block bg-gradient-to-l from-green-600 to-green-950 text-white px-5 py-2 rounded-full text-sm sm:text-sm md:text-base font-semibold font-inter shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Trusted by 10K+ Active Users
            </motion.div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4 sm:pt-6">
              <Link
                to="/contact"
                className="bg-gradient-to-l from-green-600 to-green-950 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base font-poppins shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                Join the Movement
              </Link>
              <Link
                to="/apps"
                className="border-1 border-[#D4F4E2] text-[#D4F4E2] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base font-poppins hover:border-green-950 hover:shadow-[0_4px_25px_rgba(0,255,100,0.15)] transition-all duration-200"
              >
                Explore Our Apps
              </Link>
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex justify-center items-center relative">
            <div className="relative flex justify-center items-center w-[260px] sm:w-[300px] md:w-[320px] h-[260px] sm:h-[300px] md:h-[320px]">
              <motion.div
                className="absolute text-[#34C759]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ top: '-40px', left: '0px' }}
              >
                <FaHeartbeat className="text-4xl sm:text-5xl" />
              </motion.div>

              <motion.div
                className="absolute text-[#D4F4E2]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ top: '20px', right: '0px' }}
              >
                <FaRunning className="text-3xl sm:text-4xl" />
              </motion.div>

              <motion.div
                className="absolute text-[#E6F0FA]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ bottom: '-30px', left: '0px' }}
              >
                <GiWeightLiftingUp className="text-5xl sm:text-6xl" />
              </motion.div>

              <motion.div
                className="absolute text-[#34C759]"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{ bottom: '10px', right: '0px' }}
              >
                <MdWatch className="text-2xl sm:text-3xl" />
              </motion.div>

              <MdOutlineSelfImprovement className="text-[220px] sm:text-[260px] md:text-[300px] text-[#D4F4E2]/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heroo;
