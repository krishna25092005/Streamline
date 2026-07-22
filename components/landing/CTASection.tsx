'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar, FaCircle } from 'react-icons/fa';

interface Avatar {
  initials: string;
  colorClass: string;
}

interface SocialProof {
  avatars: Avatar[];
  rating: number; // out of 5
  label: string;
}

interface CTASectionProps {
  badge?: string;
  headingLine1?: string;
  headingHighlight?: string;
  subtext?: string;
  primaryCTA?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  socialProof?: SocialProof;
}

const DEFAULT_SOCIAL_PROOF: SocialProof = {
  avatars: [
    { initials: 'JK', colorClass: 'bg-orange-500' },
    { initials: 'SR', colorClass: 'bg-cyan-500' },
    { initials: 'ML', colorClass: 'bg-violet-500' },
    { initials: 'AT', colorClass: 'bg-emerald-500' },
  ],
  rating: 5,
  label: 'Loved by 12k+ engineers & designers',
};

function AvatarStack({ avatars }: { avatars: Avatar[] }) {
  return (
    <div className="flex items-center">
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className={`${avatar.colorClass} flex h-6 w-6 items-center justify-center rounded-full border-2 border-white dark:border-slate-900 text-[9px] font-bold text-white shadow-md ${
            i !== 0 ? '-ml-2' : ''
          }`}
        >
          {avatar.initials}
        </div>
      ))}
    </div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-[2px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar
          key={i}
          className={`text-[10px] ${
            i < rating ? 'text-amber-400' : 'text-slate-300 dark:text-slate-700'
          }`}
        />
      ))}
    </div>
  );
}

export default function CTASection({
  badge = 'Trusted by 12,000+ teams',
  headingLine1 = 'Start Streamlining Your Workspaces Today.',
  headingHighlight = 'confidence.',
  subtext = "Stop stitching together tools that don't talk. Everything your team needs — multi-tenant task management, RBAC security, and real-time Kanban — unified in one thoughtful workspace.",
  primaryCTA = { label: 'Get started free', href: '/signup' },
  secondaryCTA = { label: 'See how it works', href: '/login' },
  socialProof = DEFAULT_SOCIAL_PROOF,
}: CTASectionProps) {
  return (
    <section className="relative flex h-full w-full items-center justify-center py-16 px-4 overflow-hidden select-none">
      {/* Background Radial Dot Grid */}
      <div className="absolute inset-0 z-0 h-full w-full bg-transparent [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.12)_1px,transparent_0)] [mask-image:linear-gradient(to_bottom,black_70%,transparent)] [background-size:20px_20px] dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] pointer-events-none" />

      {/* Radial Ambient Blur Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-blue-600/10 dark:bg-blue-500/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-10 w-full max-w-2xl overflow-hidden bg-transparent px-4 py-8 text-center sm:px-12 sm:py-12">
        <div className="mb-5 flex justify-center">
          <Badge
            variant="secondary"
            className="text-blue-600 dark:text-blue-400 bg-blue-500/10 border border-blue-500/30 flex items-center gap-1.5 rounded-full px-3.5 py-1 text-[10px] font-bold tracking-wider uppercase shadow-sm"
          >
            <FaCircle className="text-blue-500 animate-pulse text-[5px]" />
            {badge}
          </Badge>
        </div>

        <h2 className="font-bricolage text-slate-900 dark:text-white mb-4 text-2xl sm:text-4xl md:text-5xl leading-[1.15] font-extrabold tracking-tight">
          {headingLine1}
          <br />
          Ship with{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent italic">
            {headingHighlight}
          </span>
        </h2>

        <p className="text-slate-600 dark:text-slate-300 mx-auto mb-8 max-w-md text-sm sm:text-base leading-relaxed font-normal">
          {subtext}
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-3.5 mb-6">
          <Link href={primaryCTA.href || '/signup'} className="w-full sm:w-auto">
            <Button
              size="md"
              variant="gradient"
              className="group w-full sm:w-auto gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-lg shadow-blue-500/20 transition-all hover:scale-105"
            >
              <span>{primaryCTA.label}</span>
              <FiArrowRight className="text-base transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </Link>

          {secondaryCTA && (
            <Link href={secondaryCTA.href || '/login'} className="w-full sm:w-auto">
              <Button
                size="md"
                variant="outline"
                className="w-full sm:w-auto rounded-full px-6 py-3 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm font-bold transition-all hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                {secondaryCTA.label}
              </Button>
            </Link>
          )}
        </div>

        {socialProof && (
          <div className="text-slate-600 dark:text-slate-400 flex items-center justify-center gap-2.5 text-[11px] font-medium pt-1">
            <AvatarStack avatars={socialProof.avatars} />
            <StarRating rating={socialProof.rating} />
            <span className="text-slate-600 dark:text-slate-400 font-semibold">{socialProof.label}</span>
          </div>
        )}
      </div>
    </section>
  );
}
