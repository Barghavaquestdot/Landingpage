"use client";
import React from "react";

export default function PulsingDataFlowNetwork() {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <radialGradient id="pulse" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
      </defs>
      {Array.from({ length: 22 }).map((_, i) => (
        <circle key={i} cx={(i * 35) % 800} cy={((i * 57) % 600)} r={2} fill="#ffffff" opacity={0.15}>
          <animate attributeName="r" values="2;6;2" dur={`${2 + (i % 6) * 0.6}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {Array.from({ length: 14 }).map((_, i) => (
        <circle key={`p-${i}`} cx={(i * 55) % 800} cy={((i * 45) % 600)} r={0} fill="url(#pulse)">
          <animate attributeName="r" values="0;60;0" dur={`${4 + (i % 4) * 0.8}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );
}
