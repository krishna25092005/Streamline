'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950 pt-16 pb-12 px-4 lg:px-12 text-slate-600 dark:text-slate-400 text-sm transition-colors relative overflow-hidden select-none">
      {/* Background ambient radial glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/5 dark:bg-blue-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16 relative z-10">
        {/* Brand & Newsletter Column (Spans 2 columns on lg screens) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex items-center gap-3 w-fit group">
            <img
              src="/Strreamline_Logo.png"
              alt="Streamline Logo"
              className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
            Multi-tenant SaaS Team Task Management platform built for production scale, tenant security, and real-time team velocity.
          </p>

          {/* Newsletter Box */}
          <div className="max-w-md w-full">
            <h4 className="font-bricolage text-sm font-bold text-slate-900 dark:text-white mb-2">
              Subscribe to Engineering Updates
            </h4>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>You're subscribed! We'll keep you updated.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email..."
                  required
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs outline-none focus:border-blue-500 transition-colors"
                />
                <Button type="submit" variant="gradient" size="sm" className="px-4 py-2.5 rounded-xl text-xs gap-1 shadow-md hover:scale-105 transition-all">
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </form>
            )}
          </div>

          {/* Social Icons with Navbar-Style Hover Pills */}
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 pt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-300/70 dark:hover:bg-slate-800 hover:scale-110 transition-all shadow-sm"
              aria-label="Github"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-300/70 dark:hover:bg-slate-800 hover:scale-110 transition-all shadow-sm"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-300/70 dark:hover:bg-slate-800 hover:scale-110 transition-all shadow-sm"
              aria-label="Linkedin"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-200/60 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-300/70 dark:hover:bg-slate-800 hover:scale-110 transition-all shadow-sm"
              aria-label="Discord"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Column 1: Product */}
        <div className="flex flex-col gap-1.5">
          <h4 className="font-bricolage text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Product</h4>
          <a
            href="#features"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Features &amp; RBAC</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </a>
          <a
            href="#hero-preview"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Dashboard Overview</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </a>
          <a
            href="#pricing"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Subscription Pricing</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </a>
          <Link
            href="/signup"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Start Free Trial</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </Link>
        </div>

        {/* Navigation Column 2: Architecture & Security */}
        <div className="flex flex-col gap-1.5">
          <h4 className="font-bricolage text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Security</h4>
          <a
            href="#features"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Multi-Tenant Isolation</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </a>
          <a
            href="#features"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>JWT Refresh Rotation</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </a>
          <a
            href="#features"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Role-Based Access (RBAC)</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </a>
          <a
            href="#features"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Prisma Zero-Trust Data</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </a>
        </div>

        {/* Navigation Column 3: Workspaces */}
        <div className="flex flex-col gap-1.5">
          <h4 className="font-bricolage text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">Workspaces</h4>
          <Link
            href="/login"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Sign In to Account</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </Link>
          <Link
            href="/signup"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Create Workspace</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </Link>
          <Link
            href="/dashboard"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Dashboard Console</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </Link>
          <Link
            href="/forgot-password"
            className="px-3 py-1.5 -mx-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800/80 transition-all flex items-center justify-between group"
          >
            <span>Password Reset</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
          </Link>
        </div>
      </div>

      {/* Bottom Copyright & Status Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 relative z-10">
        <p>© {new Date().getFullYear()} Streamline Inc. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <span className="hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer transition-colors">Terms of Service</span>
          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            All Systems Operational
          </span>
        </div>
      </div>
    </footer>
  );
}
