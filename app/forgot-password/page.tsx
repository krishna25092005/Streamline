'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Layers, Mail, ArrowLeft, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentToken, setSentToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Password reset token dispatched!');
        if (data.mockResetToken) {
          setSentToken(data.mockResetToken);
        }
      } else {
        toast.error(data.error?.message || 'Failed to process request');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white">
            <Layers className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-white">Streamline</span>
        </Link>
        <h2 className="text-center text-3xl font-extrabold text-white">Reset your password</h2>
        <p className="mt-2 text-center text-sm text-slate-400">
          Enter your account email to receive a password reset token
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="glass-panel py-8 px-4 sm:px-10 rounded-2xl border border-slate-800 shadow-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-300">Email address</label>
              <div className="mt-1 relative rounded-xl shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <Mail className="h-5 w-5" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-input pl-10 block w-full rounded-xl py-2.5 text-sm"
                  placeholder="alex@acme.com"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 shadow-lg shadow-brand-500/25 transition-all"
            >
              {loading ? 'Sending link...' : 'Send reset link'}
              <Send className="w-4 h-4" />
            </button>

            {sentToken && (
              <div className="p-4 rounded-xl bg-brand-950/60 border border-brand-500/30 text-xs text-brand-200 space-y-2">
                <p className="font-semibold text-white">📧 Demo Password Reset Link Dispatched!</p>
                <p>Since SMTP is simulated locally, click below to test the reset page:</p>
                <Link
                  href={`/reset-password?token=${sentToken}`}
                  className="inline-block px-3 py-1.5 rounded-lg bg-brand-500 text-white font-medium hover:bg-brand-400"
                >
                  Proceed to Reset Password Page →
                </Link>
              </div>
            )}

            <div className="text-center pt-2">
              <Link href="/login" className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="w-3.5 h-3.5" /> Back to sign in
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
