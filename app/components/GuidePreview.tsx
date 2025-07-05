// components/GuidePreview.tsx
"use client";

import { motion } from "framer-motion";
import { FaRegCheckSquare } from "react-icons/fa";
import Image from "next/image";

const highlights = [
  "Learn to Set the Right Targets\nWhy precise KPIs are your single biggest lever for avoiding wasted effort and wasted budget.",
  "Correlate Cooling & Pressure Metrics\nHow to integrate thermal, hydraulic and energy readings so you spot hidden process bottlenecks immediately.",
  "Align Equipment for Peak Throughput\nA proven framework to synchronize machine settings, reduce variability and keep every line running at top speed.",
  "Deploy Sensors, AI & Real-Time Dashboards\nExactly what a modern monitoring stack delivers—and a step-by-step playbook to get yours live in days, not months.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const GuidePreview = () => {
  return (
    <section className="relative bg-black text-white py-28 px-6 md:px-32 overflow-hidden">
      {/* Floating Circle Backgrounds */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-red-400 opacity-10 rounded-full blur-3xl top-[-80px] left-[-80px] animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-red-600 opacity-10 rounded-full blur-3xl bottom-[-80px] right-[-80px] animate-pulse"></div>
      </div>

      {/* Decorative Floating Images */}
      <div className="hidden md:block absolute top-24 left-0 z-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/left.jpg" // replace with your image path
            alt="Left illustration"
            width={250}
            height={250}
            className="object-contain animate-float"
          />
        </motion.div>
      </div>
      <div className="hidden md:block absolute bottom-24 right-0 z-0">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/right.jpg" // replace with your image path
            alt="Right illustration"
            width={250}
            height={250}
            className="object-contain animate-float-slow"
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 animate-pulse"
        >
          📘 What to expect – A look at the guide
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-12"
        >
          What you can expect on 40 pages
        </motion.p>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-left space-y-8 text-lg md:text-xl max-w-3xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-4 hover:scale-[1.02] transition-transform"
            >
              <FaRegCheckSquare className="text-red-400 mt-2" />
              <span className="text-white whitespace-pre-line">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-red-500 hover:bg-red-700 text-white px-8 py-4 my-10 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
        >
          ➡ Book Now
        </motion.button>
      </div>
    </section>
  );
};

export default GuidePreview;
