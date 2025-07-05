// components/CallToActionSection.tsx
"use client";

import { motion } from "framer-motion";
import { FaDownload, FaPhoneAlt } from "react-icons/fa";

 const CallToActionSection = () => {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12"
        >
           Ready for your digital quantum leap?
        </motion.h2>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          {/* Option 1 */}
          <button className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md transition-all cursor-pointer">
            <FaDownload /> Download guide & checklist
          </button>

          {/* Option 2 */}
          <button className="flex items-center justify-center gap-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md transition-all cursor-pointer">
            <FaPhoneAlt /> Arrange a free initial consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default CallToActionSection;
