'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, Lock, User, ArrowRight, CheckCircle2, XCircle, Sparkles } from 'lucide-react';
import toast from 'react-hot-toast';
import ThemeToggle from '@/components/landing/ThemeToggle';

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const inviteEmail = searchParams.get('email');
  const workspaceId = searchParams.get('workspaceId');
  const role = searchParams.get('role');

  useEffect(() => {
    if (inviteEmail) {
      setEmail(inviteEmail);
      const namePart = inviteEmail.split('@')[0].replace(/[\._]/g, ' ');
      setName(namePart.charAt(0).toUpperCase() + namePart.slice(1));
    }
  }, [inviteEmail]);

  const isMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const isPasswordValid = isMinLength && hasUppercase && hasNumber;

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error('Please fill in all fields');
      return;
    }
    if (!isPasswordValid) {
      toast.error('Please meet all password strength requirements');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, workspaceId, role }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        toast.error(data.error?.message || 'Registration failed');
        setLoading(false);
        return;
      }

      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(data.data.user));

      toast.success('Account created! Welcome to Streamline.');
      router.push('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 py-8 px-4 sm:px-10 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
      {workspaceId && (
        <div className="mb-6 p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 text-xs text-purple-900 dark:text-purple-200 space-y-1">
          <div className="font-bold flex items-center gap-1.5 text-purple-700 dark:text-purple-300">
            <Sparkles className="w-4 h-4 text-amber-500" /> Workspace Team Invitation
          </div>
          <p>
            You were invited to join a Streamline workspace as a <strong>{role || 'MEMBER'}</strong>. Set your password below to accept!
          </p>
        </div>
      )}

      <form className="space-y-5" onSubmit={handleSignup}>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
          <div className="mt-1 relative rounded-xl shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User className="h-5 w-5" />
            </div>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 block w-full rounded-xl py-2.5 text-sm border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Jane Doe"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
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
              placeholder="jane@company.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
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

          {/* Password strength checks */}
          <div className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              {isMinLength ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <XCircle className="w-3.5 h-3.5 text-slate-400" />}
              <span>At least 8 characters long</span>
            </div>
            <div className="flex items-center gap-1.5">
              {hasUppercase ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <XCircle className="w-3.5 h-3.5 text-slate-400" />}
              <span>Contains at least one uppercase letter (A-Z)</span>
            </div>
            <div className="flex items-center gap-1.5">
              {hasNumber ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" /> : <XCircle className="w-3.5 h-3.5 text-slate-400" />}
              <span>Contains at least one number (0-9)</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || !isPasswordValid}
          className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all disabled:opacity-50 cursor-pointer"
        >
          {loading ? 'Creating account...' : 'Start 14-day free trial'}
          {!loading && <ArrowRight className="w-4 h-4" />}
        </button>
      </form>
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      {/* Theme Toggle Button Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10">
        <Link href="/" className="flex items-center justify-center gap-2 mb-6 group">
          <img src="/Strreamline_Logo.png" alt="Streamline Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-slate-900 dark:text-white">Create your free workspace</h2>
        <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 transition-colors">
            Sign in here
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md z-10 px-4 sm:px-0">
        <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">Loading signup...</div>}>
          <SignupForm />
        </Suspense>
      </div>
    </div>
  );
}
