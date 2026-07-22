'use client';

import React from 'react';

interface StreamlineSvgTitleLogoProps {
  className?: string;
  height?: number;
  showText?: boolean;
}

export default function StreamlineTitleLogo({
  className = '',
  height = 36,
  showText = true,
}: StreamlineSvgTitleLogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg
        height={height}
        viewBox="0 0 240 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full"
      >
        <defs>
          <linearGradient id="streamlineLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>

          <linearGradient id="streamlineTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E293B" className="dark:stop-color-white" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>

          <filter id="logoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* SVG Title Logo Symbol (Interlocking Flow Wave) */}
        <g filter="url(#logoGlow)">
          <path
            d="M 12 18 C 12 10, 26 8, 34 16 L 24 26 C 20 22, 16 22, 16 26 C 16 30, 36 30, 36 40 C 36 48, 20 50, 12 42 L 22 32 C 26 36, 30 36, 30 32 C 30 28, 12 28, 12 18 Z"
            fill="url(#streamlineLogoGrad)"
          />
          <circle cx="36" cy="16" r="5" fill="#38BDF8" />
          <circle cx="12" cy="42" r="5" fill="#C084FC" />
        </g>

        {/* SVG Vector Title Typography Text */}
        {showText && (
          <g>
            <text
              x="54"
              y="39"
              fontFamily="Inter, system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="26"
              letterSpacing="-0.8"
              fill="currentColor"
              className="text-slate-900 dark:text-white"
            >
              Streamline
            </text>
            {/* AI Pill Badge SVG Overlay */}
            <rect x="194" y="16" width="38" height="18" rx="9" fill="url(#streamlineLogoGrad)" />
            <text
              x="202"
              y="29"
              fontFamily="Inter, system-ui, -apple-system, sans-serif"
              fontWeight="800"
              fontSize="10"
              fill="#FFFFFF"
            >
              AI
            </text>
          </g>
        )}
      </svg>
    </div>
  );
}
