// app/components/ProblemControlBackground.tsx
"use client";

import React from "react";

export default function ProblemControlBackground({
  opacity = 0.22,
  speed = 16,
}: {
  opacity?: number; // overall accent strength (0–1)
  speed?: number;   // larger = slower
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        {/* paper + vignette */}
        <linearGradient id="paper" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f8f8f9" />
        </linearGradient>
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="60%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.14" />
        </radialGradient>

        {/* faint ink + brand red */}
        <linearGradient id="ink" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="brand" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>

        {/* soft blooms */}
        <filter id="bloom" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="60" />
        </filter>

        {/* data-flow curve */}
        <path id="flow" d="M40,330 C260,260 460,330 640,300 820,270 980,340 1160,310" />
      </defs>

      {/* base */}
      <rect width="1200" height="600" fill="url(#paper)" />

      {/* corner blooms */}
      <g opacity={opacity}>
        <circle cx="150" cy="120" r="260" fill="#ef4444" filter="url(#bloom)" />
        <circle cx="1080" cy="520" r="280" fill="#ef4444" filter="url(#bloom)" />
      </g>

      {/* faint grid */}
      <g opacity="0.06" stroke="url(#ink)" fill="none">
        {Array.from({ length: 31 }).map((_, i) => (
          <line key={`v-${i}`} x1={i * 40} y1="0" x2={i * 40} y2="600" />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line key={`h-${i}`} x1="0" y1={i * 40 + 80} x2="1200" y2={i * 40 + 80} />
        ))}
      </g>

      {/* three instrumentation rings behind the cards (approx. column centers) */}
      <g opacity="0.28">
        {[
          { cx: 260, cy: 250, r: 70 },
          { cx: 600, cy: 250, r: 70 },
          { cx: 940, cy: 250, r: 70 },
        ].map(({ cx, cy, r }, i) => (
          <g key={i} transform={`translate(${cx},${cy})`}>
            {/* dial base */}
            <circle r={r} fill="none" stroke="#e5e7eb" strokeWidth="10" />
            {/* progress arc */}
            <circle
              r={r}
              fill="none"
              stroke="url(#brand)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * r * 0.65} ${2 * Math.PI * r}`}
              transform="rotate(-110)"
              opacity="0.6"
            />
            {/* rotating needle (very slow) */}
            <g className="anim">
              <line
                x1="0"
                y1="0"
                x2={r - 14}
                y2="0"
                stroke="url(#brand)"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  values="-18; 18; -18"
                  keyTimes="0; 0.5; 1"
                  dur={`${speed}s`}
                  repeatCount="indefinite"
                />
              </line>
              <circle r="3" fill="#ef4444" />
            </g>
          </g>
        ))}
      </g>

      {/* data-flow path across cards */}
      <g className="anim" opacity="0.5">
        <use href="#flow" fill="none" stroke="url(#ink)" strokeWidth="2" />
        <use
          href="#flow"
          fill="none"
          stroke="url(#brand)"
          strokeWidth="2.5"
          strokeDasharray="8 14"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-280"
            dur={`${speed * 0.9}s`}
            repeatCount="indefinite"
          />
        </use>
        {/* small pulse traveling the curve */}
        <circle r="4" fill="#ef4444">
          <animateMotion dur={`${speed * 1.1}s`} repeatCount="indefinite">
            <mpath href="#flow" />
          </animateMotion>
        </circle>
      </g>

      {/* vignette */}
      <rect width="1200" height="600" fill="url(#vignette)" />

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .anim { display: none; }
        }
      `}</style>
    </svg>
  );
}
