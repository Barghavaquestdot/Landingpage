"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Packaging industry: 40% less waste, 15% energy savings",
    company: "Packaging Industry",
  },
  {
    text: "Electronics manufacturer: Scrap reduced from 10% to 3%, maintenance costs -30%",
    company: "Electronics Manufacturer",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 text-gray-900 py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          What Our Clients Are Saying
        </motion.h2>

        {/* ⭐️ 5 Golden Stars */}
        <div className="flex justify-center gap-2 mb-10">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-yellow-400 text-xl" />
          ))}
        </div>

        <div className="relative h-52 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 text-left relative w-full max-w-xl"
            >
              <FaQuoteLeft className="text-red-500 text-2xl absolute top-4 left-4 opacity-50" />
              <p className="text-lg font-medium pl-10 mb-4">{testimonials[currentIndex].text}</p>
              <p className="text-sm font-semibold text-gray-600 pl-10">
                — {testimonials[currentIndex].company}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
