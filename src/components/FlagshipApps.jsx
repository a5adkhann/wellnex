import React from "react";
import { motion } from "framer-motion";
import { FaSpa, FaDumbbell } from "react-icons/fa";

const FlagshipApps = () => {
  const apps = [
    {
      icon: <FaSpa className="text-[#34C759] text-6xl mb-4" />,
      name: "SoulWhispers",
      tagline: "Your Pocket-Sized Wellness Companion",
      desc: "SoulWhispers helps users reconnect with calm and mindfulness through guided meditations, AI-powered journaling, and mood analytics — crafted to nurture peace in the digital age.",
      features: [
        "AI-powered mood journaling",
        "Telehealth & mental diagnostics",
        "Personalized provider connections",
        "Seamless booking & therapy sessions",
      ],
      image: "s1.png",
      btnText: "Download SoulWhispers",
    },
    {
      icon: <FaDumbbell className="text-[#34C759] text-6xl mb-4" />,
      name: "GymKey",
      tagline: "Smart Access to Fitness, Anytime",
      desc: "GymKey unlocks gyms with a tap — track workouts, book sessions, and manage memberships with smart digital access for both users and gym owners.",
      features: [
        "One-tap gym access",
        "Workout analytics dashboard",
        "Membership management",
        "Live class scheduling",
      ],
      image: "s1.png",
      btnText: "Explore GymKey",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24 font-[Poppins]">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-[#34C759]">Flagship Apps</span>
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg md:text-xl md:px-0 px-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Innovating wellness through intelligence, empathy, and design.
        </motion.p>
      </div>

      <div className="flex flex-col gap-32 items-center justify-center">
        {apps.map((app, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center md:px-0 px-10 justify-center w-full max-w-6xl ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            {/* Image Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[45%] flex justify-center"
            >
              <div className="max-w-[280px]">
                <img
                  src={app.image}
                  alt={app.name}
                  className="rounded-[1.5rem] w-full h-auto object-cover shadow-lg"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <div
              className={`w-full md:w-[45%] mt-10 md:mt-0 text-center md:text-left ${
                index % 2 === 0 ? "md:ml-8" : "md:mr-8"
              }`}
            >
              {app.icon}
              <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
                {app.name}
              </h3>
              <p className="text-[#34C759] text-lg font-medium mb-4">
                {app.tagline}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">{app.desc}</p>

              <ul className="space-y-2 text-gray-700 mb-8">
                {app.features.map((f, i) => (
                  <li
                    key={i}
                    className="flex justify-center md:justify-start items-start"
                  >
                    <span className="text-[#34C759] font-bold mr-2">•</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="bg-[#34C759] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#28a745] transition">
                {app.btnText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FlagshipApps;