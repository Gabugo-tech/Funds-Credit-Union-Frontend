"use client";

import React from "react";

interface FcuLogoProps {
  size?: number;
  className?: string;
}

export default function FcuLogo({ size = 36, className = "" }: FcuLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      aria-label="Funds Credit Union logo"
    >
      {/* Sunburst rays */}
      <g fill="#6a9a1f">
        {Array.from({ length: 24 }).map((_, i) => (
          <rect
            key={i}
            x="49" y="2" width="2" height="8" rx="1"
            transform={`rotate(${i * 15} 50 50)`}
          />
        ))}
      </g>

      {/* Outer green ring */}
      <circle cx="50" cy="50" r="38" fill="none" stroke="#6a9a1f" strokeWidth="4" />

      {/* Dark navy background circle */}
      <circle cx="50" cy="50" r="34" fill="#0f1e3c" />

      {/* Bank pediment */}
      <polygon points="50,18 72,30 28,30" fill="white" />

      {/* Dollar sign */}
      <text
        x="50" y="29"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="#0f1e3c"
        fontFamily="Arial, sans-serif"
      >
        $
      </text>

      {/* Columns */}
      <rect x="31" y="30" width="4" height="22" fill="white" />
      <rect x="39" y="30" width="4" height="22" fill="white" />
      <rect x="47" y="30" width="4" height="22" fill="white" />
      <rect x="55" y="30" width="4" height="22" fill="white" />
      <rect x="63" y="30" width="4" height="22" fill="white" />

      {/* Base steps */}
      <rect x="28" y="52" width="44" height="3" fill="white" />
      <rect x="26" y="55" width="48" height="3" fill="white" />

      {/* Upward arrows */}
      <polygon points="36,50 33,56 35,56 35,62 37,62 37,56 39,56" fill="#0f1e3c" />
      <polygon points="50,44 47,50 49,50 49,62 51,62 51,50 53,50" fill="#0f1e3c" />
      <polygon points="64,48 61,54 63,54 63,62 65,62 65,54 67,54" fill="#0f1e3c" />
    </svg>
  );
}
