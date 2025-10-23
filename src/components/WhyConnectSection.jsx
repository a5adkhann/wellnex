import React from "react";
import { motion } from "framer-motion";

const WhyConnectSection = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-[#34C759]" />
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#FFF]">
                Why Connect With Us?
              </h2>
            </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Guidance",
              desc: "We don’t just build — we help you define goals, analyze your audience, and create actionable roadmaps.",
            },
            {
              title: "End-to-End Solutions",
              desc: "From concept to launch, we handle design, development, and optimization all under one roof.",
            },
            {
              title: "Trusted Expertise",
              desc: "Our team has worked with startups, enterprises, and global brands — ensuring quality & innovation.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl text-center text-white transition-all shadow-[0_4px_25px_rgba(0,255,100,0.15)] "
            >
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-lg sm:text-2xl md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#f8faf9] mb-4 sm:mb-5 text-center"
              >
                {card.title}
              </motion.h1>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyConnectSection;
