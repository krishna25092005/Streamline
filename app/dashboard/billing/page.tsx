'use client';

import { useState, useEffect } from 'react';
import { CreditCard, Zap, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { processRazorpayCheckout } from '@/lib/razorpay-client';

interface WorkspaceBillingInfo {
  id: string;
  name: string;
  plan: 'FREE' | 'PRO' | 'ENTERPRISE';
  userRole: 'ADMIN' | 'MEMBER';
  projectsCount: number;
}

export default function BillingPage() {
  const [workspace, setWorkspace] = useState<WorkspaceBillingInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBillingInfo();
  }, []);

  const fetchBillingInfo = async () => {
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs || !token) return;

    const ws = JSON.parse(storedWs);

    try {
      const res = await fetch(`/api/workspaces/${ws.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setWorkspace({
          id: data.data.id,
          name: data.data.name,
          plan: data.data.plan || 'FREE',
          userRole: data.data.userRole || 'MEMBER',
          projectsCount: data.data.projects?.length || 0,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = (targetPlan: 'PRO' | 'ENTERPRISE') => {
    if (!workspace) return;
    processRazorpayCheckout({
      plan: targetPlan,
      workspaceId: workspace.id,
      onSuccess: () => {
        fetchBillingInfo();
      },
    });
  };

  if (loading) {
    return <div className="p-8 text-slate-500 dark:text-slate-400 text-xs animate-pulse">Loading billing plan details...</div>;
  }

  const activePlan = workspace?.plan || 'FREE';
  const projectCount = workspace?.projectsCount || 0;
  const maxProjects = activePlan === 'FREE' ? 3 : activePlan === 'PRO' ? 15 : 999;

  return (
    <div className="max-w-5xl space-y-8 pb-12">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
          <CreditCard className="w-6 h-6 text-blue-600 dark:text-blue-400" /> Billing & Plan Management
        </h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
          Manage workspace plan subscription, Razorpay invoices, and feature usage limits
        </p>
      </div>

      {/* Active Plan Meter Status */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Active Subscription</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Current plan tier for {workspace?.name}</p>
            </div>
          </div>

          <span className="text-xs px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-extrabold uppercase tracking-wider">
            {activePlan} PLAN
          </span>
        </div>

        {/* Project usage progress bar */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 font-semibold">
            <span>Project Usage ({activePlan} Plan)</span>
            <span>
              {projectCount} / {maxProjects === 999 ? 'Unlimited' : `${maxProjects} Projects`}
            </span>
          </div>

          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
            <div
              className={`h-full ${projectCount >= maxProjects && activePlan === 'FREE' ? 'bg-red-500' : 'bg-blue-600'}`}
              style={{ width: `${Math.min((projectCount / maxProjects) * 100, 100)}%` }}
            />
          </div>

          {activePlan === 'FREE' && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              Free Plan includes max 3 projects. Upgrade to PRO to create up to 15 projects!
            </p>
          )}
        </div>
      </div>

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FREE */}
        <div className={`p-6 rounded-2xl bg-white dark:bg-slate-900 border ${activePlan === 'FREE' ? 'border-blue-500 shadow-xl' : 'border-slate-200 dark:border-slate-800'} flex flex-col justify-between space-y-6`}>
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Starter</span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Free Plan</h3>
            <p className="text-2xl font-black text-slate-900 dark:text-white">$0 <span className="text-xs font-medium text-slate-400">/ forever</span></p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400 pt-3">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Up to 3 Projects</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Interactive Kanban Board</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unlimited Tasks & Comments</li>
            </ul>
          </div>

          <button
            disabled={activePlan === 'FREE'}
            className="w-full py-2.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-500 disabled:opacity-60"
          >
            {activePlan === 'FREE' ? 'Current Active Plan' : 'Free Tier'}
          </button>
        </div>

        {/* PRO */}
        <div className={`p-6 rounded-2xl bg-gradient-to-b from-blue-50/80 to-white dark:from-blue-950/40 dark:to-slate-900 border ${activePlan === 'PRO' ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-2xl' : 'border-blue-200 dark:border-blue-500/30'} flex flex-col justify-between space-y-6 relative`}>
          <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">Popular</span>

          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">Growth</span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">PRO Plan</h3>
            <p className="text-2xl font-black text-slate-900 dark:text-white">₹2,499 <span className="text-xs font-medium text-slate-400">/ month</span></p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-3">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Up to 15 Projects</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Google Gemini 1.5 Flash AI Assistant</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> Advanced Bklit Analytics Suite</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500" /> AI Executive Sprint Reports</li>
            </ul>
          </div>

          <button
            onClick={() => handleUpgrade('PRO')}
            disabled={activePlan === 'PRO'}
            className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-500/25 transition-all cursor-pointer disabled:opacity-50"
          >
            {activePlan === 'PRO' ? 'Current Active Plan' : 'Upgrade with Razorpay'}
          </button>
        </div>

        {/* ENTERPRISE */}
        <div className={`p-6 rounded-2xl bg-gradient-to-b from-purple-50/80 to-white dark:from-purple-950/40 dark:to-slate-900 border ${activePlan === 'ENTERPRISE' ? 'border-purple-500 ring-2 ring-purple-500/20 shadow-2xl' : 'border-purple-200 dark:border-purple-500/30'} flex flex-col justify-between space-y-6`}>
          <div className="space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">Scale</span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Enterprise Plan</h3>
            <p className="text-2xl font-black text-slate-900 dark:text-white">₹7,999 <span className="text-xs font-medium text-slate-400">/ month</span></p>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-3">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Unlimited Projects</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Dedicated 24/7 Priority SLA Audit</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Custom Multi-Tenant Isolation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-500" /> Executive PDF Report Generator</li>
            </ul>
          </div>

          <button
            onClick={() => handleUpgrade('ENTERPRISE')}
            disabled={activePlan === 'ENTERPRISE'}
            className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-500/25 transition-all cursor-pointer disabled:opacity-50"
          >
            {activePlan === 'ENTERPRISE' ? 'Current Active Plan' : 'Upgrade with Razorpay'}
          </button>
        </div>
      </div>
    </div>
  );
}
