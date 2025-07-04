// components/SolutionSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaCog, FaBatteryHalf, FaSmile, FaFileAlt } from "react-icons/fa";

 const SolutionSection = () => {
  return (
    <section className="bg-gray-300 text-white w-full py-20 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}

          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-primary"
        >
          The 40-Page Guide® is your roadmap for maximum efficiency
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-black mb-12"
        >
          Learn how to analyze your processes, get real-time data, and reduce energy usage while boosting employee satisfaction and customer loyalty.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-black">
          {[
            {
              icon: <FaLightbulb className="text-yellow-400 w-6 h-6" />, text: "Clear roadmap for precise processes"
            },
            {
              icon: <FaCog className="text-blue-400 w-6 h-6" />, text: "Automated collection and use of real-time data"
            },
            {
              icon: <FaBatteryHalf className="text-green-400 w-6 h-6" />, text: "Reduce energy consumption & costs by up to 25%"
            },
            {
              icon: <FaSmile className="text-pink-400 w-6 h-6" />, text: "Motivate employees, retain customers long-term"
            },
            {
              icon: <FaFileAlt className="text-purple-400 w-6 h-6" />, text: "Meet sustainability & CSRD reporting requirements with ease"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex items-start gap-4 bg-white bg-opacity-5 p-6 rounded-xl shadow-md hover:bg-opacity-10 transition"
            >
              {item.icon}
              <span className="text-lg">{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-red-600 transition-all cursor-pointer"
        >
          ➡ Request your free guide now
        </motion.button>
      </div>
    </section>
  );
};
export default SolutionSection;
