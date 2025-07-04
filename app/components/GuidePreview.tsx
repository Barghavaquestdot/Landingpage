// components/GuidePreview.tsx
"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const highlights = [
  "\u201cWhy Palma leads to New York without navigation to the Bahamas\u201d",
  "\u201cWhat cooling data has to do with tire pressure\u201d",
  "\u201cHow to turn your machinery into a high-performance orchestra\u201d",
  "\u201cWhat sensors, AI and real-time data really bring \u2013 and how to get started\u201d"
];



 const GuidePreview = () => {
  return (
    <section className="bg-black text-white py-28 px-6 md:px-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute w-96 h-96 bg-red-400 opacity-10 rounded-full blur-3xl top-[-80px] left-[-80px] "></div>
        <div className="absolute w-96 h-96 bg-red-600 opacity-10 rounded-full blur-3xl bottom-[-80px] right-[-80px] "></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.3 }}
          className="text-left space-y-6 text-lg md:text-xl max-w-3xl mx-auto"
        >
          {highlights.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <FaCheckCircle className="text-green-400 mt-1" />
              <span className="text-white">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

          
      </div>
    </section>
  );
};
export default GuidePreview