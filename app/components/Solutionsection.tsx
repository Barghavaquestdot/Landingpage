"use client";

import { motion } from "framer-motion";
import PulsingDataFlowNetwork from "./PulsingDataFlowNetwork";
import { FaCogs, FaLeaf, FaSmile, FaListAlt, FaBolt } from "react-icons/fa";
import Image from "next/image";

const advantages = [
  {
    icon: <FaListAlt className="text-teal-400 text-3xl" />,
    title: "Clear roadmap for precise processes",
  },
  {
    icon: <FaCogs className="text-teal-400 text-3xl" />,
    title: "Automated collection and use of real-time data",
  },
  {
    icon: <FaLeaf className="text-teal-400 text-3xl" />,
    title: "Reduce energy consumption & costs by up to 25%",
  },
  {
    icon: <FaSmile className="text-teal-400 text-3xl" />,
    title: "Motivate employees, retain customers long-term",
  },
  {
    icon: <FaBolt className="text-teal-400 text-3xl" />,
    title: "Meet sustainability & CSRD reporting requirements",
  },
];

const SolutionSection = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Left: Animated Network Background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <PulsingDataFlowNetwork />
      </div>

      {/* Right: Background Image (blurred) */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none hidden md:block">
        <div className="relative w-full h-full">
          <Image
            src="/section3.jpg" // Replace with your actual image path
            alt="Blurred background"
            fill
            className="object-cover  opacity-60"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          The 40-Page Guide® is your roadmap for maximum efficiency
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-12"
        >
          You will learn step by step how to analyze your processes, obtain precise data, and optimize
          your energy and resource usage – all while relieving the burden on your employees and delighting your customers.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-4 bg-white bg-opacity-10 p-5 rounded-xl shadow-lg"
            >
              {item.icon}
              <span className="text-left text-base md:text-lg font-medium text-black">
                {item.title}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-red-500 hover:bg-red-700 text-white px-6 py-4 my-5 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
        >
          ➡ Request for free Guide
        </motion.button>
      </div>
    </section>
  );
};

export default SolutionSection;
