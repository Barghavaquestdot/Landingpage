"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const topWaveRef = useRef<SVGPathElement | null>(null);
  const bottomWaveRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    topWaveRef.current?.animate(
      [{ transform: "translateX(0%)" }, { transform: "translateX(-50%)" }],
      { duration: 40000, iterations: Infinity, easing: "linear" }
    );
    bottomWaveRef.current?.animate(
      [{ transform: "translateX(0%)" }, { transform: "translateX(50%)" }],
      { duration: 45000, iterations: Infinity, easing: "linear" }
    );
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {/* === Precision Grid + Sweep (top layer but very subtle) === */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.10]"
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* grid */}
        <defs>
          <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M48 0H0V48" fill="none" stroke="#d0181c" strokeOpacity="0.12" strokeWidth="1" />
          </pattern>
          <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d0181c" stopOpacity="0" />
            <stop offset="50%" stopColor="#d0181c" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#d0181c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="1440" height="900" fill="url(#grid)" />
        {/* scanning line */}
        <motion.rect
          y={0}
          height={900}
          width={220}
          fill="url(#sweep)"
          initial={{ x: -220 }}
          animate={{ x: [-220, 1440, -220] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* === Top Animated Wave === */}
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

      {/* === Bottom Animated Wave (UPDATED) === */}
      <svg
        className="absolute bottom-0 right-0 w-[300%] h-[120vh] opacity-25"
        viewBox="0 0 1200 200"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Red gradient for the bottom wave */}
          <linearGradient id="bottomWaveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#d0181c" stopOpacity="1" />
          </linearGradient>
        </defs>
        <path
          ref={bottomWaveRef}
          d="M0,150 C300,50 900,250 1200,150 L1200,200 L0,200 Z"
          fill="url(#bottomWaveGrad)"
        />
      </svg>

      {/* === Rotating Gears (industrial control) === */}
      <motion.svg
        className="absolute top-6 right-6 w-16 h-16 opacity-20"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="18" fill="none" stroke="#d0181c" strokeWidth="8" />
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * Math.PI) / 4;
          const x1 = 50 + Math.cos(angle) * 18;
          const y1 = 50 + Math.sin(angle) * 18;
          const x2 = 50 + Math.cos(angle) * 28;
          const y2 = 50 + Math.sin(angle) * 28;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#d0181c"
              strokeWidth="8"
              strokeLinecap="round"
            />
          );
        })}
      </motion.svg>

      <motion.svg
        className="absolute bottom-8 left-8 w-12 h-12 opacity-20"
        viewBox="0 0 100 100"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
      >
        <circle cx="50" cy="50" r="15" fill="none" stroke="#d0181c" strokeWidth="6" />
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * Math.PI) / 3;
          const x1 = 50 + Math.cos(angle) * 15;
          const y1 = 50 + Math.sin(angle) * 15;
          const x2 = 50 + Math.cos(angle) * 24;
          const y2 = 50 + Math.sin(angle) * 24;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#d0181c"
              strokeWidth="6"
              strokeLinecap="round"
            />
          );
        })}
      </motion.svg>

      {/* === Process Path + Control Points (precision nodes) === */}
      <svg
        className="absolute inset-x-0 top-[28%] mx-auto w-[80%] h-24 opacity-25"
        viewBox="0 0 800 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20,80 C160,20 320,20 460,60 S760,90 780,40"
          fill="none"
          stroke="#d0181c"
          strokeWidth="2"
          strokeDasharray="6 10"
        />
      </svg>
      <div className="absolute inset-x-0 top-[28%] mx-auto w-[80%] pointer-events-none">
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-[#d0181c]"
          style={{ left: 0, top: 0 }}
          animate={{ x: [0, 680], y: [0, 10, -6, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-[#d0181c]/80"
          style={{ left: 140, top: 8 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-[#d0181c]/80"
          style={{ left: 360, top: -2 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-[#d0181c]/80"
          style={{ left: 560, top: 6 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </div>

      {/* === Floating Book Icon (kept) === */}
      <motion.div
        className="absolute top-[12%] left-[10%] w-36 h-36 opacity-10"
        animate={{ y: [0, 10, 0], rotate: [0, 2, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8H56V48C56 51.3 53.3 54 50 54H14C10.7 54 8 51.3 8 48V8Z" fill="#e06d6d" />
          <path d="M16 16H48V20H16V16Z" fill="#fff" />
          <path d="M16 24H40V28H16V24Z" fill="#fff" />
        </svg>
      </motion.div>

      {/* === Decorative Floating Dots (kept, tuned) === */}
      <motion.div
        className="absolute top-[30%] right-[8%] w-4 h-4 bg-[#d0181c] rounded-full opacity-10"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[35%] left-[6%] w-3 h-3 bg-[#d0181c] rounded-full opacity-10"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[10%] w-2 h-2 bg-red-500 rounded-full opacity-10"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default AnimatedBackground;