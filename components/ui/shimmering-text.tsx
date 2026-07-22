'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ShimmeringTextProps {
  text: string;
  className?: string;
  shimmerColor?: string;
}

export function ShimmeringText({
  text,
  className = '',
}: ShimmeringTextProps) {
  return (
    <span
      className={cn(
        'relative inline-block font-semibold bg-gradient-to-r from-slate-500 via-blue-500 via-40% to-slate-500 dark:from-slate-400 dark:via-blue-400 dark:to-slate-400 bg-[length:200%_100%] bg-clip-text text-transparent animate-[shimmer_3s_infinite_linear]',
        className
      )}
    >
      {text}
    </span>
  );
}

export default ShimmeringText;
