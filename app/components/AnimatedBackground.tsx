"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const topWaveRef = useRef<SVGPathElement | null>(null);
  const bottomWaveRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    if (topWaveRef.current) {
      topWaveRef.current.animate(
        [
          { transform: "translateX(0%)" },
          { transform: "translateX(-50%)" }
        ],
        {
          duration: 40000,
          iterations: Infinity,
          easing: "linear"
        }
      );
    }
    if (bottomWaveRef.current) {
      bottomWaveRef.current.animate(
        [
          { transform: "translateX(0%)" },
          { transform: "translateX(50%)" }
        ],
        {
          duration: 45000,
          iterations: Infinity,
          easing: "linear"
        }
      );
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* Top Animated Wave */}
      <svg
        className="absolute top-0 left-0 w-[200%] h-72 opacity-20"
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={topWaveRef}
          d="M0,50 C300,150 900,-50 1200,50 L1200,0 L0,0 Z"
          fill="#fcdcdc"
        />
      </svg>

      {/* Bottom Animated Wave */}
      <svg
        className="absolute bottom-0 right-0 w-[200%] h-72 opacity-20"
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={bottomWaveRef}
          d="M0,150 C300,50 900,250 1200,150 L1200,200 L0,200 Z"
          fill="#fcdcdc"
        />
      </svg>

      {/* Floating Book Icon */}
      <motion.div
        className="absolute top-[12%] left-[10%] w-36 h-36 opacity-10"
        animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 8H56V48C56 51.3 53.3 54 50 54H14C10.7 54 8 51.3 8 48V8Z"
            fill="#e06d6d"
          />
          <path d="M16 16H48V20H16V16Z" fill="#fff" />
          <path d="M16 24H40V28H16V24Z" fill="#fff" />
        </svg>
      </motion.div>

      {/* Decorative Floating Dots */}
      <motion.div
        className="absolute top-[30%] right-[8%] w-4 h-4 bg-[#d0181c] rounded-full opacity-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[35%] left-[6%] w-3 h-3 bg-[#d0181c] rounded-full opacity-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[15%] right-[10%] w-2 h-2 bg-[#d0181c] rounded-full opacity-10"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackground;