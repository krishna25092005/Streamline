'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, ArrowRight, UserCheck } from 'lucide-react';
import toast from 'react-hot-toast';
import ThemeToggle from '@/components/landing/ThemeToggle';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        toast.error(data.error?.message || 'Authentication failed');
        setLoading(false);
        return;
      }

      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(data.data.user));

      if (data.data.workspaces && data.data.workspaces.length > 0) {
        localStorage.setItem('currentWorkspace', JSON.stringify(data.data.workspaces[0]));
      }

      toast.success(`Welcome back, ${data.data.user.name}!`);
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemoLogin = async (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('Password123!');
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: demoEmail, password: 'Password123!' }),
      });

      const data = await res.json();
      if (data.success) {
        localStorage.setItem('accessToken', data.data.accessToken);
        localStorage.setItem('refreshToken', data.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(data.data.user));

        if (data.data.workspaces && data.data.workspaces.length > 0) {
          localStorage.setItem('currentWorkspace', JSON.stringify(data.data.workspaces[0]));
        }

        toast.success(`Logged in as ${data.data.user.name}`);
        router.push('/dashboard');
      }
    } catch (err) {
      console.error(err);
      toast.error('Quick demo login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Theme Toggle Button Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-600/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-6 group">
          <img src="/Strreamline_Logo.png" alt="Streamline Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">Sign in to your workspace</h2>
        <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
          Or{' '}
          <Link href="/signup" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors">
            create a new multi-tenant organization
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 px-4 sm:px-0">
        <div className="bg-white dark:bg-slate-900 py-8 px-4 sm:px-10 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email address</label>
              <div className="mt-1 relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 block w-full rounded-xl py-2.5 text-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                <Link href="/forgot-password" className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500">
                  Forgot password?
                </Link>
              </div>
              <div className="mt-1 relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Lock className="h-5 w-5" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 block w-full rounded-xl py-2.5 text-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Sign in'}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          {/* Quick Demo Logins Section */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
              <UserCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>Quick Demo Accounts (1-Click Login)</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('alex@acme.com')}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-left hover:border-blue-500/50 transition-all flex flex-col"
              >
                <span className="font-semibold text-slate-900 dark:text-white">Alex Morgan</span>
                <span className="text-blue-600 dark:text-blue-400 text-[11px]">Admin / Owner (Acme Corp)</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('sarah@techstart.io')}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-left hover:border-blue-500/50 transition-all flex flex-col"
              >
                <span className="font-semibold text-slate-900 dark:text-white">Sarah Chen</span>
                <span className="text-purple-600 dark:text-purple-400 text-[11px]">Owner (TechStart AI)</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('david@designstudio.com')}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-left hover:border-blue-500/50 transition-all flex flex-col"
              >
                <span className="font-semibold text-slate-900 dark:text-white">David Kim</span>
                <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">Owner (DesignStudio)</span>
              </button>
              <button
                type="button"
                onClick={() => handleQuickDemoLogin('emily@acme.com')}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-left hover:border-blue-500/50 transition-all flex flex-col"
              >
                <span className="font-semibold text-slate-900 dark:text-white">Emily Watson</span>
                <span className="text-amber-600 dark:text-amber-400 text-[11px]">Member Role (RBAC Demo)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
