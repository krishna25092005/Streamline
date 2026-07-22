'use client';

import { useState } from 'react';
import { HelpCircle, BookOpen, MessageSquare, Key, X, Send, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function HelpFeedbackModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<'DOCS' | 'SHORTCUTS' | 'FEEDBACK'>('DOCS');
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(5);
  const [sending, setSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText.trim()) return;

    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success('Thank you for your feedback! Our team has received your note.');
      setFeedbackText('');
      onClose();
    }, 600);
  };

  return (
    <div
      className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">Help, Docs & Feedback</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/50 p-1">
          <button
            onClick={() => setActiveTab('DOCS')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'DOCS'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Documentation FAQ
          </button>

          <button
            onClick={() => setActiveTab('SHORTCUTS')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'SHORTCUTS'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Key className="w-3.5 h-3.5" /> Shortcuts
          </button>

          <button
            onClick={() => setActiveTab('FEEDBACK')}
            className={`flex-1 py-2 text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 transition-all ${
              activeTab === 'FEEDBACK'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" /> Feedback
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-96 overflow-y-auto">
          {activeTab === 'DOCS' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">🚀 Real-Time Google Gemini AI Assistant</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Click the floating AI Assistant button in the bottom right corner or click <strong>AI Sprint Report</strong> to generate executive summaries powered by Google Gemini 1.5 Flash.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">📌 Pinned Projects & Multi-View Board</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Pin your favorite projects to the sidebar for quick 1-click access. Toggle between Kanban Drag-and-Drop, Table List, and Calendar Schedule views.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">💳 Razorpay Subscription Upgrades</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  Upgrade your Workspace to PRO or Enterprise anytime under <strong>Billing & Plan</strong> to unlock unlimited projects and advanced Bklit charts.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'SHORTCUTS' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Open Command Palette</span>
                <kbd className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-[11px]">⌘K / Ctrl+K</kbd>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Close Modal / Drawer</span>
                <kbd className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-mono text-[11px]">Esc</kbd>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-semibold text-slate-900 dark:text-white">Toggle Light/Dark Theme</span>
                <span className="text-slate-500">Theme Switcher in Sidebar Footer</span>
              </div>
            </div>
          )}

          {activeTab === 'FEEDBACK' && (
            <form onSubmit={handleSubmitFeedback} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">How would you rate Streamline?</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        rating >= star ? 'bg-amber-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}
                    >
                      ★ {star}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Feedback or Feature Suggestion</label>
                <textarea
                  rows={4}
                  required
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Tell us what you love or how we can improve..."
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center justify-center gap-2"
              >
                {sending ? 'Submitting...' : 'Submit Feedback'}
                {!sending && <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
