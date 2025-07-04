// components/WhoNeeds.tsx
"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhoNeeds = () => {
  const audience = [
    "Managing directors of small and medium-sized enterprises",
    "Energy and production managers",
    "Decision-makers who think about precision and digitalization together"
  ];

  return (
    <section className="relative w-full bg-gradient-to-br from-white to-gray-100 text-black py-28 px-6 md:px-32 overflow-hidden">
      {/* Decorative Animated Background Circles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute w-96 h-96 bg-red-300/20 rounded-full blur-3xl top-[-50px] left-[-80px]"
        ></motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "mirror", delay: 1 }}
          className="absolute w-96 h-96 bg-red-500/10 rounded-full blur-3xl bottom-[-60px] right-[-60px]"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          🎯 Who is this guide for?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg md:text-xl text-gray-600 mb-14"
        >
          This guide is built for professionals ready to ditch guesswork and start optimizing with clarity.
        </motion.p>

       <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid gap-8 md:grid-cols-2 text-left"
>
  {audience.map((item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
     className={`flex items-start gap-4 p-6 rounded-2xl bg-white shadow-xl hover:scale-[1.02] transition-transform w-full ${
    index === 2 ? "md:col-span-2 md:mx-auto max-w-xl" : ""
  }`}
    >
      <FaCheck className="text-red-600 text-xl mt-1" />
      <span className="text-lg font-medium text-gray-800">{item}</span>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
};

export default WhoNeeds;
