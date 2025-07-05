// components/AuthorSection.tsx

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const AuthorSection = () => {
  return (
    <section className="bg-gray-100 text-black py-12 px-6 md:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Author Image */}
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.7 }}
          whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex-shrink-0"
        >
          <Image
            src="/author.jpg"
            alt="Andreas Babel"
            width={280}
            height={280}
            className="rounded-full shadow-2xl border-4"
          />
        </motion.div>

        {/* Author Content */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-left max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 text-center md:text-left">
            About the author
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-red-600 mb-6 text-center md:text-left">
             Andreas Babel – the data conductor for your success
          </h3>
          <p className="text-lg leading-relaxed font-light text-gray-700">
            Andreas Babel has been an expert in automation, digitalization, and efficiency for almost 30 years.
            With his platform solution <strong>"eco2lot,"</strong> he has helped companies save up to
            <strong> 25% energy</strong>, halve machine downtime, and increase employee motivation.
          </p>
          <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-red-500 hover:bg-red-700 text-white px-6 py-4 my-5 mx-30 rounded-full font-semibold text-lg shadow-lg cursor-pointer"
        >
          ➡ Know about Author
        </motion.button>
        </motion.div>
       
      </div>
       
    </section>
  );
};

export default AuthorSection