import React from 'react'
import { motion } from "framer-motion";
import { FaDumbbell, FaRobot, FaNetworkWired, FaCloud } from "react-icons/fa";
const WhyWellnex = () => {
     const features = [
    {
      icon: <FaDumbbell className="text-[#34C759] text-4xl mb-4" />,
      title: "Integrated Wellness",
      desc: "Physical, mental, and emotional health united in one ecosystem.",
    },
    {
      icon: <FaRobot className="text-[#34C759] text-4xl mb-4" />,
      title: "AI-Driven Personalization",
      desc: "Smart insights that adapt to your unique lifestyle and goals.",
    },
    {
      icon: <FaNetworkWired className="text-[#34C759] text-4xl mb-4" />,
      title: "Scalable for Providers",
      desc: "Seamlessly supports individuals, gyms, and healthcare networks alike.",
    },
    {
      icon: <FaCloud className="text-[#34C759] text-4xl mb-4" />,
      title: "Built for the Future",
      desc: "Cloud-native, mobile-first, and privacy-conscious at every layer.",
    },
  ];

  return (
    <div>
       <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
         <motion.div
                  className="mb-14"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-[2px] bg-[#34C759]" />
                    <h2 className="text-4xl md:text-5xl font-bold font-poppins bg-clip-text text-transparent bg-gradient-to-r from-[#34C759] to-[#000000]">
                      Why Wellnex ?
                    </h2>
                  </div>
                  <p className="text-black  text-start text-lg font-inter ms-16">
                    Because the future of wellness deserves smarter, deeper, and more connected solutions.
                  </p>
                </motion.div>
      {/* <motion.h2
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why <span className="text-[#34C759]">Wellnex?</span>
      </motion.h2> */}

      {/* <motion.p
        className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Because the future of wellness deserves smarter, deeper, and more connected solutions.
      </motion.p> */}

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default WhyWellnex
