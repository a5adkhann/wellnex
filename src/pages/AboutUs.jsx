import React from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { FaBrain, FaHeart, FaGlobe } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";


const AboutUs = () => {
  return (
    <div className="font-[Poppins] text-gray-100 bg-gradient-to-b from-[#0b0d13] via-[#111827] to-[#0b0d13] overflow-hidden">

      {/* NAVBAR */}
      <Navbar/>

      {/* HERO / INTRO */}
      <section className="relative py-28 px-6 md:px-20 text-left border-b border-[#1b2e1b] ">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-white mb-5"
        >
          About <span className="text-[#34C759]">Wellnex Systems</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl text-lg md:text-xl text-gray-400"
        >
          We are redefining wellness through technology — blending empathy,
          intelligence, and innovation to build a healthier, smarter world.
        </motion.p>
      </section>

      {/* MISSION & VISION */}
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 py-24">
        <Parallax speed={-5}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#1a1f2e] rounded-2xl p-10 shadow-xl border border-gray-700"
          >
            <FaHeart className="text-[#34C759] text-5xl mb-4" />
            <h2 className="text-3xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To empower every individual to achieve holistic well-being through
              AI-driven tools that connect mind, body, and lifestyle.
            </p>
          </motion.div>
        </Parallax>

        <Parallax speed={5}>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#1a1f2e] rounded-2xl p-10 shadow-xl border border-gray-700"
          >
            <FaBrain className="text-[#34C759] text-5xl mb-4" />
            <h2 className="text-3xl font-semibold mb-3">Our Vision</h2>
            <p className="text-gray-400 leading-relaxed">
              To create an interconnected ecosystem of wellness apps that help
              people live mindfully, move intelligently, and heal emotionally.
            </p>
          </motion.div>
        </Parallax>
      </section>


      {/* OUR STORY */}
<section className="bg-[#111827] py-24 px-6 md:px-20">
  
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    <motion.div
      className="space-y-8 text-gray-400"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
    className="text-4xl font-bold mb-10 text-white"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Our Journey
  </motion.h2>
      <p>
        Founded in 2023, Wellnex Systems began as a small vision — to merge
        the power of artificial intelligence with emotional intelligence.
      </p>
      <p>
        Over time, we grew into a team of passionate creators, developers,
        and wellness advocates building products like SoulWhispers and
        GymKey to inspire smarter living.
      </p>
      <p>
        Our path is just beginning. With every innovation, we aim to bring
        balance back to a fast-paced digital world.
      </p>
    </motion.div>
    {/* 🌀 Left side: Hero Component */}
    <div className="flex justify-center">
      
        {/* Import Hero and render here */}
        <Hero/>
      
    </div>

    {/* 🧠 Right side: Journey text */}
    
  </div>
</section>


      {/* CORE VALUES */}
      <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-[#10141c] to-[#0b0d13]">
        <h2 className="text-4xl font-bold text-white mb-16">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaHeart className="text-[#34C759] text-5xl mb-3" />,
              title: "Empathy",
              desc: "Understanding human emotions and designing products that care.",
            },
            {
              icon: <FaBrain className="text-[#34C759] text-5xl mb-3" />,
              title: "Innovation",
              desc: "Blending AI with wellness to unlock new dimensions of growth.",
            },
            {
              icon: <FaGlobe className="text-[#34C759] text-5xl mb-3" />,
              title: "Integrity",
              desc: "Building trust through transparency, respect, and responsibility.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1a1f2e] rounded-2xl p-10 shadow-lg border border-gray-700 text-center"
            >
              {v.icon}
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {v.title}
              </h3>
              <p className="text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-[#0b0d13]">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Join the <span className="text-[#34C759]">Wellness Revolution</span>
        </motion.h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Be part of a global movement towards mindful, intelligent living.  
          Together, let’s shape the future of well-being.
        </p>
        <button className="bg-[#34C759] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#28a745] transition">
          Get Involved
        </button>
      </section>

      {/* FOOTER */}
     <Footer/>
    </div>
  );
};

export default AboutUs;
