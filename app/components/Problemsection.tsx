// components/ProblemSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

 const ProblemSection = () => {
  return (
    <section className="bg-gray-300 text-black w-full py-20 px-6 md:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Fantasy Image on Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/section2.jpg"
            alt="Fantasy World"
            width={600}
            height={400}
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Content on Right */}
        <div className="w-full md:w-1/2 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Lack of accuracy costs you money every day!
          </motion.h2>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="text-left space-y-6 text-lg md:text-xl"
          >
            {["Data is entered manually or not used at all?",
              "Are machines running inefficiently and for an unnecessarily long time?",
              "Errors, rejects, downtime – and you don’t know why?"]
              .map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                  className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-red-400 before:rounded-full"
                >
                  {point}
                </motion.li>
              ))}
          </motion.ul>

           <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
            className="mt-10 text-2xl font-bold text-red-400 text-center"
          >
            ➡ Every small mistake adds up to a huge problem.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

