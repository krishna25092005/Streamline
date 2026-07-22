'use client';

import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import { motion, HTMLMotionProps, useMotionValue, useSpring } from 'framer-motion';

// Context for Compound Cursor Component
interface CursorContextType {
  color: string;
  textColor: string;
  borderColor: string;
}

const CursorContext = createContext<CursorContextType>({
  color: '#10b981',
  textColor: '#ffffff',
  borderColor: 'rgba(255, 255, 255, 0.2)',
});

// Helper function: Calculate high-contrast text color (dark vs light) based on bg hex luminance
export function getContrastColor(hexColor: string): { textColor: string; borderColor: string } {
  if (!hexColor || typeof hexColor !== 'string') {
    return { textColor: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.2)' };
  }

  let hex = hexColor.replace('#', '').trim();
  if (hex.length === 3) {
    hex = hex.split('').map((c) => c + c).join('');
  }

  if (hex.length !== 6) {
    return { textColor: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.2)' };
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  const isLight = yiq >= 150;

  return {
    textColor: isLight ? '#0f172a' : '#ffffff',
    borderColor: isLight ? 'rgba(15, 23, 42, 0.15)' : 'rgba(255, 255, 255, 0.25)',
  };
}

export interface KiboCursorProps extends HTMLMotionProps<'div'> {
  color?: string;
  followMouse?: boolean;
  children?: React.ReactNode;
  className?: string;
  x?: number;
  y?: number;
}

export function Cursor({
  color = '#000000',
  followMouse = false,
  x: customX,
  y: customY,
  children,
  className = '',
  style,
  ...props
}: KiboCursorProps) {
  const contrast = useMemo(() => getContrastColor(color), [color]);

  const mouseX = useMotionValue(customX ?? 0);
  const mouseY = useMotionValue(customY ?? 0);

  const springConfig = { stiffness: 450, damping: 28 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (customX !== undefined) mouseX.set(customX);
    if (customY !== undefined) mouseY.set(customY);
  }, [customX, customY, mouseX, mouseY]);

  useEffect(() => {
    if (!followMouse) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => window.removeEventListener('mousemove', handleWindowMouseMove);
  }, [followMouse, mouseX, mouseY]);

  const contextValue = useMemo(
    () => ({
      color,
      textColor: contrast.textColor,
      borderColor: contrast.borderColor,
    }),
    [color, contrast]
  );

  return (
    <CursorContext.Provider value={contextValue}>
      <motion.div
        role="tooltip"
        tabIndex={0}
        style={{
          ...(followMouse
            ? {
                position: 'fixed',
                top: 0,
                left: 0,
                x: smoothX,
                y: smoothY,
              }
            : customX !== undefined && customY !== undefined
            ? {
                position: 'absolute',
                x: smoothX,
                y: smoothY,
              }
            : {}),
          ...style,
        }}
        className={`pointer-events-none z-50 flex items-start gap-1 select-none focus:outline-none ${className}`}
        {...props}
      >
        {children}
      </motion.div>
    </CursorContext.Provider>
  );
}

export function CursorPointer({
  color,
  className = '',
}: {
  color?: string;
  className?: string;
}) {
  const context = useContext(CursorContext);
  const pointerColor = color || context.color || 'currentColor';

  return (
    <svg
      className={`w-4.5 h-4.5 shrink-0 drop-shadow-md transition-colors duration-200 ${className}`}
      style={{ fill: pointerColor }}
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z" />
    </svg>
  );
}

export function CursorBody({
  children,
  bgColor,
  textColor,
  borderColor,
  className = '',
}: {
  children?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
}) {
  const context = useContext(CursorContext);

  const finalBgColor = bgColor || context.color;
  const finalTextColor = textColor || context.textColor;
  const finalBorderColor = borderColor || context.borderColor;

  return (
    <div
      style={{
        backgroundColor: finalBgColor,
        color: finalTextColor,
        borderColor: finalBorderColor,
      }}
      className={`flex flex-col gap-0.5 px-2.5 py-1.5 rounded-2xl rounded-tl-xs shadow-xl border backdrop-blur-md text-[11px] font-semibold leading-tight transition-colors duration-200 ${className}`}
    >
      {children}
    </div>
  );
}

export function CursorName({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <span className="font-extrabold text-[10px] tracking-wide opacity-95">{children}</span>;
}

export function CursorMessage({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <span className="font-medium text-[11px] opacity-90">{children}</span>;
}

export default React.memo(Cursor);
