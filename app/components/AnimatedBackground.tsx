// app/components/AnimatedBackground.tsx
"use client";

import React from "react";

interface Props {
  opacity?: number; // 0–1 paper/halo strength
  speed?: number;   // base speed for bookmark drift
}

export default function AnimatedProblemBackground({
  opacity = 0.35,
  speed = 12,
}: Props) {
  const range = (n: number) => Array.from({ length: n }, (_, i) => i);

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        {/* Paper tint */}
        <linearGradient id="paper" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fff5f5" />
        </linearGradient>

        {/* Vignette to keep content readable */}
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="60%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.18" />
        </radialGradient>

        {/* Soft red glow */}
        <radialGradient id="pulseRed" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.40" />
          <stop offset="60%" stopColor="#ef4444" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>

        {/* Bookmark gradient */}
        <linearGradient id="bookmark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>

        {/* Simple “open book” watermark */}
        <linearGradient id="ink" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#111827" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#111827" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* Paper base */}
      <rect width="1200" height="600" fill="url(#paper)" />

      {/* Ruled paper lines (very faint) */}
      <g opacity={0.18}>
        {Array.from({ length: 20 }).map((_, i) => {
          const y = i * 30 + 5;
          return (
            <line
              key={`line-${i}`}
              x1="0"
              y1={y}
              x2="1200"
              y2={y}
              stroke="#0f172a"
              strokeOpacity="0.18"
              strokeWidth="1"
            />
          );
        })}
        {/* Notebook margin line (subtle red) */}
        <line
          x1="96"
          y1="0"
          x2="96"
          y2="600"
          stroke="#ef4444"
          strokeOpacity="0.18"
          strokeWidth="2"
        />
      </g>

      {/* Book watermark (open pages) */}
      <g opacity={0.12} transform="translate(600,320)">
        <path
          d="M-220,-60 C-160,-100 -80,-100 0,-70 C80,-100 160,-100 220,-60 L220,90 C160,50 80,50 0,80 C-80,50 -160,50 -220,90Z"
          fill="url(#ink)"
        />
      </g>

      {/* Soft halos */}
      <g className="anim" opacity={opacity}>
        {[{ cx: 160, cy: 120, d: 0 }, { cx: 1020, cy: 140, d: 1 },
          { cx: 250, cy: 510, d: 0.4 }, { cx: 980, cy: 480, d: 1.2 }].map(
          ({ cx, cy, d }, i) => (
            <circle key={i} cx={cx} cy={cy} r="0" fill="url(#pulseRed)">
              <animate
                attributeName="r"
                values="0; 120; 0"
                dur={`${10 + (i % 3) * 2}s`}
                begin={`${d}s`}
                repeatCount="indefinite"
              />
            </circle>
          )
        )}
      </g>

      {/* Drifting bookmarks (book vibe) */}
      <g className="anim" opacity={0.45}>
        {range(6).map((i) => {
          const x = 120 + i * 180 + (i % 2 ? 40 : 0);
          const delay = i * 0.8;
          const dur = speed + (i % 3) * 2;

          return (
            <g key={`bm-${i}`} transform={`translate(${x}, -120)`}>
              {/* ribbon */}
              <path
                d="M0,0 L0,120 L20,105 L40,120 L40,0 Z"
                fill="url(#bookmark)"
                stroke="#ffffff"
                strokeOpacity="0.55"
                strokeWidth="1.2"
              />
              {/* tiny hole at top like a tag */}
              <circle cx="20" cy="12" r="3" fill="#ffffff" fillOpacity="0.8" />
              <animateTransform
                attributeName="transform"
                type="translate"
                from={`${x} -140`}
                to={`${x} 660`}
                dur={`${dur}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="-2 20 60; 2 20 60; -2 20 60"
                keyTimes="0; 0.5; 1"
                dur={`${dur * 0.8}s`}
                repeatCount="indefinite"
              />
            </g>
          );
        })}
      </g>

      {/* Gentle vignette */}
      <rect width="1200" height="600" fill="url(#vignette)" />

      {/* Reduce motion: hide anim groups */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .anim { display: none; }
        }
      `}</style>
    </svg>
  );
}
