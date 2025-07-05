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
    <section className="relative bg-black text-white pt-28 pb-12 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Background Gradient Circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-80 h-80 bg-red-400 opacity-10 rounded-full blur-3xl top-[-80px] left-[-80px] animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-red-600 opacity-10 rounded-full blur-3xl bottom-[-80px] right-[-80px] animate-pulse"></div>
      </div>

      {/* Half-Circle Guide Image - same for mobile and desktop */}
      <div className="absolute bottom-0 left-0 w-[520px] h-[520px] z-0">
        <div
          className="w-full h-full opacity-80"
          style={{
            clipPath: "circle(100% at 0% 100%)",
          }}
        >
          <Image
            src="/guidesection.jpg"
            alt="Guide Background"
            width={520}
            height={520}
            className="object-cover w-full h-full opacity-100"
            priority
          />
        </div>
      </div>

      {/* Content block always shifted right */}
      <div className="relative z-10 max-w-4xl mx-auto md:ml-[460px]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 animate-pulse text-left"
        >
          📘 What to expect – A look at <br />
          <span className="block text-center text-red-400">the guide</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 md:pl-6"
        >
          What you can expect on 40 pages
        </motion.p>

        {/* Highlights List */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 sm:space-y-8 text-left text-base sm:text-lg md:text-xl max-w-3xl md:pl-6"
        >
          {highlights.map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="flex items-start gap-3 hover:scale-[1.02] transition-transform"
            >
              <FaRegCheckSquare className="text-red-400 mt-1" />
              <span className="whitespace-pre-line">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        {/* Book Now Button shifted right */}
        <div className="mt-10 pl-6 sm:pl-10 md:pl-20">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-red-500 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
          >
            ➡ Book Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default GuidePreview;
