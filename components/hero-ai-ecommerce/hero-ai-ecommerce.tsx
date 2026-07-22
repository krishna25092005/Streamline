'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { CreditCard, LogIn, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TimelineAnimation } from '@/components/ui/timeline-animation';
import { useMediaQuery } from '@/hooks/use-media-query';
import MotionDrawer from '@/components/ui/motion-drawer';
import { useTheme } from '@/components/landing/ThemeProvider';
import ThemeToggle from '@/components/landing/ThemeToggle';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

export const HeroAiEcommerce = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { theme } = useTheme();

  return (
    <section
      ref={timelineRef}
      className="min-h-screen text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 relative overflow-hidden flex flex-col items-center transition-colors duration-300"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10 opacity-70 pointer-events-none" />

      {/* Mobile Navigation Drawer Trigger */}
      {isMobile && (
        <div className="w-full flex gap-4 justify-between items-center px-6 pt-4 relative z-20">
          <MotionDrawer
            direction="left"
            width={280}
            backgroundColor={theme === 'dark' ? '#0f172a' : '#ffffff'}
            clsBtnClassName="bg-slate-800 border-r border-slate-700 text-white"
            contentClassName="bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
            btnClassName="bg-white dark:bg-slate-800 text-slate-900 dark:text-white relative w-fit p-2 left-0 top-0 rounded-full shadow-sm border border-slate-200 dark:border-slate-700"
          >
            <nav className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <img src="/Strreamline_Logo.png" alt="Streamline Logo" className="h-10 w-auto object-contain" />
              </div>
              <a href="#features" className="block p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-sm">
                Features &amp; RBAC
              </a>
              <a href="#hero-preview" className="block p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-sm">
                Dashboard Overview
              </a>
              <a href="#pricing" className="block p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-sm">
                Pricing Tiers
              </a>
              <a href="#testimonials" className="block p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-sm">
                Testimonials
              </a>
            </nav>
          </MotionDrawer>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <TimelineAnimation
              as="button"
              animationNum={2}
              timelineRef={timelineRef}
              className="flex items-center gap-2 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 text-sm font-medium"
            >
              <Link href="/login" className="flex items-center gap-1">
                <LogIn size={16} /> Sign in
              </Link>
            </TimelineAnimation>
          </div>
        </div>
      )}

      {/* Hero Body */}
      <div className="text-center relative px-4 pt-14 pb-6 z-10 max-w-4xl mx-auto">
        {/* Headline with Staggered Entrance & Interactive Hover Animation */}
        <TimelineAnimation
          as="h1"
          animationNum={1}
          timelineRef={timelineRef}
          className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold font-bricolage tracking-tight text-slate-900 dark:text-white mb-6 leading-tight select-none"
        >
          <motion.span
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="inline-block cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Streamline Team Workflows
          </motion.span>{' '}
          <br className="sm:inline-block hidden" />
          With{' '}
          <motion.span
            whileHover={{ scale: 1.06, rotate: -1, y: -3 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            className="relative inline-flex items-center gap-2.5 border-2 border-blue-500 px-3.5 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg my-1 shadow-md hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer group"
          >
            {/* SVG Title Icon with Hover Rotate */}
            <motion.svg
              whileHover={{ rotate: 15, scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-blue-600 dark:text-blue-400 shrink-0 group-hover:text-blue-500 transition-colors"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm4-4H7v-2h9v2zm0-4H7V7h9v2z" />
            </motion.svg>
            <span className="font-extrabold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
              Real-Time Kanban
            </span>
            <div className="absolute -top-1.5 -left-1.5 w-2.5 h-2.5 bg-white dark:bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
            <div className="absolute -top-1.5 -right-1.5 w-2.5 h-2.5 bg-white dark:bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-2.5 h-2.5 bg-white dark:bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-2.5 h-2.5 bg-white dark:bg-slate-900 border-2 border-blue-500 group-hover:bg-blue-500 transition-colors"></div>
          </motion.span>
        </TimelineAnimation>

        <TimelineAnimation
          as="p"
          animationNum={3}
          timelineRef={timelineRef}
          className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-normal leading-relaxed"
        >
          Isolate independent team workspaces, enforce granular role-based permissions, and accelerate task delivery with real-time Kanban execution.
        </TimelineAnimation>

        <div className="flex flex-col items-center gap-4">
          <TimelineAnimation
            as="div"
            animationNum={4}
            timelineRef={timelineRef}
          >
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white px-7 py-3.5 rounded-full text-base sm:text-lg font-bold shadow-xl shadow-blue-500/25 hover:scale-105 transition-all"
            >
              <span>Start Your 14 Day Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </TimelineAnimation>

          <TimelineAnimation
            as="p"
            animationNum={5}
            timelineRef={timelineRef}
            className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-2 font-medium"
          >
            <CreditCard size={16} /> No Credit Card Required
          </TimelineAnimation>
        </div>
      </div>

      {/* Animated 3D Floating Hero Showcase (Switches between Dark & Light Mode Screenshots) */}
      <div id="hero-preview" className="w-full max-w-6xl mx-auto relative px-4 mb-20 z-10">
        <TimelineAnimation
          animationNum={6}
          timelineRef={timelineRef}
          className="w-full"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            {/* Ambient Pulsing Glow Aura */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-purple-600/30 rounded-[2.5rem] blur-3xl opacity-70 animate-pulse pointer-events-none" />

            <CardContainer className="w-full">
              <CardBody className="w-full h-auto rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-3 sm:p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl hover:shadow-blue-500/20 transition-all group/hero">
                <CardItem translateZ="60" className="w-full">
                  <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/60 dark:border-slate-800/60 group-hover/hero:border-blue-500/50 transition-colors">
                    {/* Glass Reflection Shimmer Line */}
                    <div className="absolute top-0 left-0 right-0 h-full w-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-10" />

                    {theme === 'dark' ? (
                      <img
                        src="/Streamline_Hero_Dark.png"
                        alt="Streamline Dark Mode SaaS Hero Dashboard"
                        className="w-full h-full object-cover object-top transition-all duration-500 group-hover/hero:scale-[1.02]"
                      />
                    ) : (
                      <img
                        src="/Streamline_Hero_Light.png"
                        alt="Streamline Light Mode SaaS Hero Dashboard"
                        className="w-full h-full object-cover object-top transition-all duration-500 group-hover/hero:scale-[1.02]"
                      />
                    )}
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </TimelineAnimation>
      </div>
    </section>
  );
};
