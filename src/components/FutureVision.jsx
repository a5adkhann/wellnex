import { motion } from "framer-motion";
import { FaChartLine, FaAppleAlt, FaWatchmanMonitoring } from "react-icons/fa";


 const FutureVision =()=> {
  return (
    <section className="bg-gradient-to-b from-[#f9fafb] to-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
          What’s Coming Next
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
        >
          The future of wellness is closer than you think. Our unified Wellnex
          Platform will merge fitness, nutrition, mental health, and diagnostics
          into one intelligent, connected experience.
        </motion.p>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center"
          >
            <FaWatchmanMonitoring className="text-[#34C759] text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Wearable Integration
            </h3>
            <p className="text-gray-600">
              Connect your smartwatch and track real-time wellness data like
              never before.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center"
          >
            <FaAppleAlt className="text-[#34C759] text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Nutrition & Meal Planning
            </h3>
            <p className="text-gray-600">
              Personalized diets designed for your body, your goals, and your
              pace of life.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center"
          >
            <FaChartLine className="text-[#34C759] text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Corporate Wellness Dashboards
            </h3>
            <p className="text-gray-600">
              Empower teams to stay healthy, happy, and productive through smart
              wellness insights.
            </p>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <button className="bg-[#34C759] hover:bg-[#2FAE4F] text-white px-8 py-3 text-lg rounded-full shadow-lg">
            Get Early Access
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default FutureVision