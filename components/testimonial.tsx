'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function Testimonial({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("p-6 flex flex-col justify-between h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 transition-colors", className)} {...props}>
      {children}
    </div>
  );
}

export function TestimonialQuote({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-sm font-normal text-slate-700 dark:text-slate-200 leading-relaxed mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function TestimonialAuthor({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center gap-3 mt-auto pt-3 border-t border-slate-100 dark:border-slate-800/60", className)} {...props}>
      {children}
    </div>
  );
}

export function TestimonialAvatar({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative w-10 h-10 rounded-full overflow-hidden shrink-0 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700", className)} {...props}>
      {children}
    </div>
  );
}

export function TestimonialAvatarImg({ className, src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      src={src}
      alt={alt || "Avatar"}
      className={cn("w-full h-full object-cover", className)}
      {...props}
    />
  );
}

export function TestimonialAvatarRing({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("absolute inset-0 rounded-full ring-1 ring-black/10 dark:ring-white/10 pointer-events-none", className)} {...props} />;
}

export function TestimonialAuthorName({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 className={cn("font-bricolage text-sm font-bold text-slate-900 dark:text-white leading-tight", className)} {...props}>
      {children}
    </h4>
  );
}

export function TestimonialAuthorTagline({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-xs text-slate-500 dark:text-slate-400 line-clamp-1", className)} {...props}>
      {children}
    </p>
  );
}
