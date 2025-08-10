// app/components/ProblemProfitLeakOverlay.tsx
"use client";

import React from "react";

type Props = {
  /** Overall strength of the overlay (0–1) */
  opacity?: number;
  /** Base speed (bigger = slower) */
  speed?: number;
  /** 'below' draws the path under the cards; 'above' draws near the title */
  position?: "below" | "above";
};

export default function ProblemProfitLeakOverlay({
  opacity = 0.65,
  speed = 14,
  position = "below",
}: Props) {
  // y-position presets so it doesn’t clash with your content
  const y = position === "above" ? 190 : 430;

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        {/* brand red for dashed path */}
        <linearGradient id="brand" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>

        {/* faint ink for guide stroke */}
        <linearGradient id="ink" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#0f172a" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0.05" />
        </linearGradient>

        {/* coin gold */}
        <radialGradient id="coin" cx="35%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#fff7cc" />
          <stop offset="55%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </radialGradient>

        {/* subtle highlight on coin */}
        <linearGradient id="coinEdge" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        {/* soft shadow for coins */}
        <filter id="coinShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.25" />
        </filter>

        {/* spline the coins follow */}
        <path
          id="leakPath"
          d={`M 60,${y} C 280,${y - 40} 520,${y + 40} 760,${y}
              C 940,${y - 35} 1060,${y + 15} 1140,${y - 10}`}
        />

        {/* little swirl drain */}
        <path id="drainRing" d="M 0,0 m -12,0 a 12,12 0 1,0 24,0 a 12,12 0 1,0 -24,0" />
      </defs>

      {/* guide path (very faint) */}
      <g opacity={0.25}>
        <use href="#leakPath" fill="none" stroke="url(#ink)" strokeWidth="2" />
      </g>

      {/* dashed red path with slow travel */}
      <g className="anim" opacity={opacity}>
        <use
          href="#leakPath"
          fill="none"
          stroke="url(#brand)"
          strokeWidth="3"
          strokeDasharray="8 14"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-280"
            dur={`${speed}s`}
            repeatCount="indefinite"
          />
        </use>
      </g>

      {/* coins drifting toward the drain */}
      <g className="anim" filter="url(#coinShadow)">
        {Array.from({ length: 6 }).map((_, i) => {
          const delay = i * (speed / 6); // staggered starts
          const dur = speed * (0.9 + (i % 3) * 0.05);
          const size = 14 + (i % 3) * 3; // 14/17/20
          return (
            <g key={i}>
              {/* coin */}
              <g opacity="0.95">
                <circle r={size / 2} fill="url(#coin)">
                  <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" rotate="auto">
                    <mpath href="#leakPath" />
                  </animateMotion>
                </circle>
                {/* edge ring */}
                <circle r={size / 2} fill="none" stroke="url(#coinEdge)" strokeWidth="1.5">
                  <animateMotion dur={`${dur}s`} begin={`${delay}s`} repeatCount="indefinite" rotate="auto">
                    <mpath href="#leakPath" />
                  </animateMotion>
                </circle>
              </g>
              {/* faint trailing spark */}
              <circle r="2" fill="#ef4444" opacity="0.65">
                <animateMotion dur={`${dur}s`} begin={`${delay + 0.2}s`} repeatCount="indefinite">
                  <mpath href="#leakPath" />
                </animateMotion>
                <animate attributeName="opacity" values="0.65;0;0.65" dur={`${dur / 2}s`} repeatCount="indefinite" />
              </circle>
            </g>
          );
        })}
      </g>

      {/* drain on the right (coins disappear here) */}
      <g transform={`translate(1145, ${y - 10})`} opacity="0.7">
        {/* concentric rings */}
        <use href="#drainRing" fill="none" stroke="url(#brand)" strokeWidth="2" />
        <use
          href="#drainRing"
          fill="none"
          stroke="url(#brand)"
          strokeWidth="2"
          transform="scale(1.6)"
          opacity="0.5"
        />
        {/* subtle swirl */}
        <g className="anim" opacity="0.5">
          <use href="#drainRing" fill="none" stroke="url(#brand)" strokeWidth="1.5">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur={`${speed * 2}s`}
              repeatCount="indefinite"
            />
          </use>
        </g>
        {/* drain center */}
        <circle r="4" fill="#ef4444" />
      </g>

      {/* accessibility: reduce motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .anim { display: none; }
        }
      `}</style>
    </svg>
  );
}
