// components/SvgBackground.tsx
"use client";

import { motion } from "framer-motion";

const SvgBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
      {/* Animated Waves */}
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full h-auto opacity-60"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff416c" />
            <stop offset="100%" stopColor="#ff4b2b" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#grad)"
          d="M0,192L60,186.7C120,181,240,171,360,154.7C480,139,600,117,720,101.3C840,85,960,75,1080,101.3C1200,128,1320,192,1380,224L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
        />
      </svg>

      {/* Blurred glowing circles */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-pink-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-[240px] h-[240px] bg-[#d0181c] rounded-full blur-[100px] opacity-20 animate-pulse"></div>
    </div>
  );
};

export default SvgBackground;
