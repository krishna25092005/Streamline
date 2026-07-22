"use client";

import CTASection from "@/components/landing/CTASection";

export default function CTASectionDemo() {
  return (
    <CTASection
      badge="Trusted by modern teams"
      headingLine1="Design better."
      headingHighlight="ship faster."
      subtext="All your product workflows in one place — from idea to launch. Built for speed, clarity, and collaboration."
      primaryCTA={{
        label: 'Start building',
        href: '/signup',
      }}
      secondaryCTA={{
        label: 'Explore features',
        href: '/login',
      }}
      socialProof={{
        avatars: [
          { initials: 'JK', colorClass: 'bg-orange-500' },
          { initials: 'SR', colorClass: 'bg-cyan-500' },
          { initials: 'ML', colorClass: 'bg-violet-500' },
          { initials: 'AT', colorClass: 'bg-emerald-500' },
        ],
        rating: 5,
        label: 'Loved by 10k+ designers',
      }}
    />
  );
}
