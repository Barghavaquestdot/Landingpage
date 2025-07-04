// components/TestimonialsSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

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
  return (
    <section className="bg-gray-100 text-gray-900 py-5 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          What Our Clients Are Saying
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500 text-left relative"
            >
              <FaQuoteLeft className="text-red-500 text-2xl absolute top-4 left-4 opacity-50" />
              <p className="text-lg font-medium pl-10 mb-4">{testimonial.text}</p>
              <p className="text-sm font-semibold text-gray-600 pl-10">— {testimonial.company}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
