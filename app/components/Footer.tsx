// components/Footer.tsx
// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaGlobe } from "react-icons/fa";

 const Footer = () => {
  return (
    <footer className="relative bg-gray-800 text-white py-16 px-6 md:px-24 overflow-hidden">
      {/* Dotted background animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.5)_1px,_transparent_1px)] [background-size:20px_20px] z-0 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
      >
        {/* Brand Info */}
        <div>
          <h3 className="text-xl font-semibold text-red-500 mb-3">RedBlack Publishing</h3>
          <p className="text-sm text-gray-400">✓ Over 30 years of experience</p>
          <p className="text-sm text-gray-400">✓ Practice-tested solutions for SMEs</p>
          <p className="text-sm text-gray-400">✓ Made in Germany: BS-Systeme GmbH, Zorneding</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="flex items-center gap-2 text-sm">
            <FaEnvelope className="text-red-400" /> info@bs-systeme.de
          </p>
          <p className="flex items-center gap-2 text-sm">
            <FaGlobe className="text-red-400" /> www.bs-systeme.de
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center md:text-right flex flex-col justify-end">
          <p>© {new Date().getFullYear()} RedBlack Publishing. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};


export default Footer;
