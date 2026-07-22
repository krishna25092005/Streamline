'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Layers,
  Sparkles,
  CreditCard,
  BookOpen,
  HelpCircle,
  Users,
  FileText,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  ShieldCheck,
  Zap,
  Kanban,
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Button } from '@/components/ui/button';
import StreamlineTitleLogo from '@/components/ui/streamline-title-logo';

interface MenuLink {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  rowSpan?: number;
  bgGradient?: string;
  external?: boolean;
}

interface MenuSection {
  id: string;
  label: string;
  gridLayout: string;
  links: MenuLink[];
}

export function NavbarWithMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections: MenuSection[] = [
    {
      id: 'product',
      label: 'Product',
      gridLayout: 'grid-cols-1 md:grid-cols-3 gap-4',
      links: [
        {
          label: 'Get Started Free',
          href: '/signup',
          description: 'Create your multi-tenant workspace instantly',
          icon: Sparkles,
          rowSpan: 2,
          bgGradient: 'from-blue-600/30 via-indigo-600/20 to-purple-600/30',
        },
        {
          label: 'Real-Time Kanban',
          href: '#hero-preview',
          description: 'Drag & drop task board with priority badges',
          icon: Kanban,
        },
        {
          label: 'Role Security (RBAC)',
          href: '#features',
          description: 'Owner, Admin & Member permissions',
          icon: ShieldCheck,
        },
        {
          label: 'Subscription Pricing',
          href: '#pricing',
          description: 'Starter, Pro & Enterprise tiers',
          icon: CreditCard,
        },
        {
          label: 'Workload Analytics',
          href: '#features',
          description: 'Visual workload charts & overdue alerts',
          icon: Zap,
        },
      ],
    },
    {
      id: 'resources',
      label: 'Resources',
      gridLayout: 'grid-cols-1 md:grid-cols-2 gap-4',
      links: [
        {
          label: 'Documentation & API',
          href: '#features',
          description: 'Complete architecture & API references',
          icon: BookOpen,
        },
        {
          label: 'SaaS Security Guide',
          href: '#features',
          description: 'Multi-tenant isolation & data safety',
          icon: FileText,
        },
        {
          label: 'Help & Support',
          href: '/login',
          description: 'Get support and workspace answers',
          icon: HelpCircle,
        },
        {
          label: 'Community & Teams',
          href: '#testimonials',
          description: 'Join engineering leads & product managers',
          icon: Users,
        },
      ],
    },
    {
      id: 'socials',
      label: 'Socials',
      gridLayout: 'grid-cols-2 md:grid-cols-3 gap-3',
      links: [
        {
          label: 'GitHub',
          href: 'https://github.com',
          description: 'View source code & repos',
          icon: Layers,
          external: true,
        },
        {
          label: 'Discord',
          href: 'https://discord.com',
          description: 'Join developer community',
          icon: Users,
          external: true,
        },
        {
          label: 'Twitter / X',
          href: 'https://twitter.com',
          description: 'Follow product updates',
          icon: Sparkles,
          external: true,
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 lg:px-12 py-3 transition-all duration-300">
      {/* Solid Opaque White Navbar Container */}
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 rounded-2xl px-6 py-2.5 flex items-center justify-between border ${
          isScrolled
            ? 'bg-white dark:bg-slate-900 border-blue-500/40 dark:border-blue-500/40 shadow-2xl shadow-blue-500/15 scale-[1.005]'
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl dark:shadow-2xl dark:shadow-black/50'
        }`}
      >
        {/* Perfectly Fitted Logo Image inside Navbar */}
        <Link href="/" className="flex items-center group shrink-0">
          <img
            src="/Strreamline_Logo.png"
            alt="Streamline Logo"
            className="h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Interactive Navbar Menu */}
        <nav className="hidden md:flex items-center gap-1.5 relative">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="relative"
              onMouseEnter={() => setActiveMenu(sec.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all ${
                  activeMenu === sec.id
                    ? 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-white shadow-sm border border-slate-200 dark:border-slate-700'
                    : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <span>{sec.label}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    activeMenu === sec.id ? 'rotate-180 text-blue-500' : ''
                  }`}
                />
              </button>

              {/* Solid Opaque White Dropdown Container */}
              {activeMenu === sec.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[480px] lg:w-[560px] transition-all duration-200">
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
                    <div className={`grid ${sec.gridLayout}`}>
                      {sec.links.map((lnk, idx) => {
                        const IconComponent = lnk.icon;
                        const isFeatured = lnk.bgGradient;
                        return (
                          <Link
                            key={idx}
                            href={lnk.href}
                            target={lnk.external ? '_blank' : '_self'}
                            onClick={() => setActiveMenu(null)}
                            className={`group relative p-3 rounded-xl border transition-all flex flex-col justify-between ${
                              isFeatured
                                ? `bg-gradient-to-br ${lnk.bgGradient} border-blue-500/30 hover:border-blue-500/60 shadow-md`
                                : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-blue-500/30'
                            } ${lnk.rowSpan ? 'row-span-2' : ''}`}
                          >
                            <div>
                              <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform shadow-sm">
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <h4 className="font-bricolage text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                                {lnk.label}
                                {lnk.external && <span className="text-[9px] opacity-60">↗</span>}
                              </h4>
                              <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5 leading-tight">
                                {lnk.description}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center text-[11px] font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                              <span>Explore</span>
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <a
            href="#pricing"
            className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Pricing
          </a>
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl px-3 py-1.5 transition-colors"
          >
            Sign In
          </Link>
          <Link href="/signup">
            <Button variant="gradient" size="sm" className="gap-1.5 text-xs px-4 py-2 rounded-xl">
              <span>Get Started Free</span>
              <ArrowRight className="w-3 h-3" />
            </Button>
          </Link>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown - Solid Opaque White */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col gap-3 text-slate-800 dark:text-slate-200 shadow-2xl">
          <div className="pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center">
            <img src="/Strreamline_Logo.png" alt="Streamline Logo" className="h-9 w-auto object-contain" />
          </div>
          <Link
            href="/signup"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/30 text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center justify-between"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a href="#hero-preview" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 py-1 text-xs">
            Dashboard Overview
          </a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 py-1 text-xs">
            Features &amp; RBAC
          </a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 py-1 text-xs">
            Pricing Tiers
          </a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-600 py-1 text-xs">
            Testimonials
          </a>
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <Link
              href="/login"
              className="w-full text-center py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
