// components/PulsingDataFlowNetwork.jsx
import React from 'react';

const PulsingDataFlowNetwork = () => (
  <svg
    viewBox="0 0 800 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full max-w-2xl opacity-60"
  >
    {/* Grid Links */}
    <g className="links stroke-gray-400 stroke-[1px]">
      {/* Horizontal */}
      <line x1="50" y1="100" x2="750" y2="100" />
      <line x1="50" y1="200" x2="750" y2="200" />
      <line x1="50" y1="300" x2="750" y2="300" />
      {/* Vertical */}
      <line x1="200" y1="50" x2="200" y2="350" />
      <line x1="400" y1="50" x2="400" y2="350" />
      <line x1="600" y1="50" x2="600" y2="350" />
    </g>

    {/* Nodes */}
    <g className="nodes fill-white stroke-gray-500 stroke-[1px]">
      <circle cx="200" cy="100" r="6" />
      <circle cx="400" cy="200" r="6" />
      <circle cx="600" cy="300" r="6" />
      <circle cx="200" cy="300" r="6" />
      <circle cx="600" cy="100" r="6" />
    </g>

    {/* Invisible Paths */}
    <path
      id="hline1"
      d="M50,100 L750,100"
      stroke="none"
      fill="none"
    />
    <path
      id="vline2"
      d="M400,50 L400,350"
      stroke="none"
      fill="none"
    />
    <path
      id="diag"
      d="M200,300 L600,100"
      stroke="none"
      fill="none"
    />

    {/* Animated Packets */}
    <g className="packets fill-teal-400">
      <circle r="4">
        <animateMotion dur="3s" repeatCount="indefinite">
          <mpath xlinkHref="#hline1" />
        </animateMotion>
      </circle>
      <circle r="4">
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath xlinkHref="#vline2" />
        </animateMotion>
      </circle>
      <circle r="4">
        <animateMotion dur="5s" repeatCount="indefinite">
          <mpath xlinkHref="#diag" />
        </animateMotion>
      </circle>
    </g>
  </svg>
);

export default PulsingDataFlowNetwork;
