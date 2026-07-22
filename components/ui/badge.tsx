'use client';

import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'success';
}

export function Badge({ className = '', variant = 'default', children, ...props }: BadgeProps) {
  const baseStyle = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors';

  const variantStyles = {
    default: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30',
    secondary: 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700',
    outline: 'border border-slate-300 dark:border-slate-800 text-slate-600 dark:text-slate-400',
    success: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30',
  };

  return (
    <div className={`${baseStyle} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
