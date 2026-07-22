'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function Marquee({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative overflow-hidden w-full group", className)} {...props}>
      {children}
    </div>
  );
}

export function MarqueeFade({ side = 'left', className }: { side?: 'left' | 'right'; className?: string }) {
  return (
    <div
      className={cn(
        "absolute top-0 bottom-0 z-20 w-16 pointer-events-none",
        side === 'left'
          ? "left-0 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent"
          : "right-0 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent",
        className
      )}
    />
  );
}

export function MarqueeContent({
  direction = 'left',
  className,
  children,
  ...props
}: {
  direction?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex w-max overflow-hidden">
      <div
        className={cn(
          "flex shrink-0 gap-4 py-3 items-stretch animate-scroll group-hover:[animation-play-state:paused]",
          direction === 'right' ? '[animation-direction:reverse]' : '',
          className
        )}
        {...props}
      >
        {children}
      </div>
      <div
        aria-hidden="true"
        className={cn(
          "flex shrink-0 gap-4 py-3 items-stretch animate-scroll group-hover:[animation-play-state:paused]",
          direction === 'right' ? '[animation-direction:reverse]' : '',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function MarqueeItem({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("shrink-0", className)} {...props}>
      {children}
    </div>
  );
}
