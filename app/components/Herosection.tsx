// components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaBook } from "react-icons/fa";
import Image from "next/image";

const Herosection = () => {
  return (
    <section className="relative bg-gradient-to-br from-black via-red-900 to-black text-white w-full min-h-screen flex items-center justify-center px-6 md:px-24 py-32 overflow-hidden"
     style={{
        backgroundImage: "url('/section1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
         
      }}>
      {/* Floating Background Accent */}
      <div className="absolute w-96 h-96 bg-red-700 opacity-20 rounded-full blur-3xl top-[-100px] left-[-100px] "></div>

      {/* Book Icon Top Left */}
      <div className="absolute top-8 left-6 md:left-16 z-20 flex items-center gap-2 text-black text-3xl font-semibold">
        <FaBook className="text-3xl text-white" />
        <span className="font-bold tracking-wide text-white">The Guide</span>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-4xl font-extrabold leading-tight mb-6 text-red-400 font-serif"
        >
        " The secret code for decision-makers:"
          <br />
          <span className="text-red-400">"Real-time data"</span> "instead of flying blind"
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-lg md:text-2xl text-black mb-10 font-light"
        >
          How to make precision the strongest force in your company – and save energy, time and money.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
        >
          ➡ Get your guide now
        </motion.button>

        {/* Guide Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 flex justify-center"
        >
          
        </motion.div>
      </div>
    </section>
  );
};
export default Herosection;
