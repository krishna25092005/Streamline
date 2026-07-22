'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Bot,
  Download,
  Printer,
  Sparkles,
  Calendar,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FileText,
  Shield,
  Layers,
} from 'lucide-react';
import toast from 'react-hot-toast';

interface TaskItem {
  id: string;
  title: string;
  status: string;
  priority: string;
  dueDate?: string;
  assignee?: { id: string; name: string; avatarUrl?: string };
}

interface ProjectDetails {
  id: string;
  name: string;
  description?: string;
}

export default function SprintReportPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [summary, setSummary] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [docId, setDocId] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setDocId(`STR-RPT-${Math.floor(100000 + Math.random() * 900000)}`);
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    fetchReportData();
  }, [projectId]);

  const fetchReportData = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      const projRes = await fetch(`/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const projData = await projRes.json();
      if (projData.success) {
        setProject(projData.data);
      }

      const tasksRes = await fetch(`/api/projects/${projectId}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const tasksData = await tasksRes.json();
      if (tasksData.success) {
        setTasks(tasksData.data);
      }

      // Fetch AI Executive Summary from Gemini API
      const aiRes = await fetch('/api/ai/summarize-sprint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ projectId }),
      });

      const aiData = await aiRes.json();
      if (aiData.success) {
        setSummary(aiData.data.summary);
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to load report data');
    } finally {
      setLoading(false);
    }
  };

  const handlePrintPdf = () => {
    window.print();
  };

  const total = tasks.length;
  const done = tasks.filter((t) => t.status === 'DONE').length;
  const inProgress = tasks.filter((t) => t.status === 'IN_PROGRESS').length;
  const urgent = tasks.filter((t) => t.priority === 'URGENT' && t.status !== 'DONE').length;
  const completionRate = total > 0 ? Math.round((done / total) * 100) : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8 flex flex-col items-center justify-center space-y-4">
        <Bot className="w-10 h-10 text-purple-600 animate-spin" />
        <p className="text-xs font-semibold text-slate-600 dark:text-slate-400">
          Generating Google Gemini Executive Sprint Report...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 p-4 sm:p-8 transition-colors duration-300">
      {/* Printable Control Bar (Hidden on print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between no-print">
        <Link
          href={`/dashboard/projects/${projectId}`}
          className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Project Kanban
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrintPdf}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/20 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Download Official PDF</span>
          </button>
        </div>
      </div>

      {/* Official Enterprise Document Page Container */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 print:shadow-none print:border-none print:p-0">
        {/* Document Header */}
        <div className="border-b-2 border-blue-600 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-2xl font-black text-blue-600 tracking-tight flex items-center gap-2">
              <Layers className="w-6 h-6" /> STREAMLINE ENTERPRISE
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              Official Executive Governance & Sprint Velocity Audit
            </p>
          </div>

          <div className="text-right text-xs text-slate-500 dark:text-slate-400 space-y-0.5 font-mono">
            <div>
              DOCUMENT ID: <strong className="text-slate-900 dark:text-white">{docId}</strong>
            </div>
            <div>
              GENERATED: <strong className="text-slate-900 dark:text-white">{currentDate}</strong>
            </div>
            <div>
              CLASSIFICATION: <strong className="text-purple-600 dark:text-purple-400">CONFIDENTIAL • INTERNAL USE ONLY</strong>
            </div>
          </div>
        </div>

        {/* Title & Badge */}
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 uppercase tracking-wider mb-3">
            <Sparkles className="w-3 h-3 text-amber-500" /> Executive Sprint Performance Report
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Project: {project?.name}
          </h1>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            {project?.description || 'Strategic development and execution sprint tracking.'}
          </p>
        </div>

        {/* Key Metrics Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-center space-y-1">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Completion Rate
            </span>
            <span className="text-2xl font-black text-blue-600 dark:text-blue-400">{completionRate}%</span>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-center space-y-1">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Total Tasks
            </span>
            <span className="text-2xl font-black text-slate-900 dark:text-white">{total}</span>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-center space-y-1">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              Completed
            </span>
            <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{done}</span>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 text-center space-y-1">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              In-Progress
            </span>
            <span className="text-2xl font-black text-indigo-600 dark:text-indigo-400">{inProgress}</span>
          </div>
        </div>

        {/* AI Analysis Section */}
        <div className="p-6 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/30 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-700 dark:text-purple-300 uppercase tracking-wider">
            <Bot className="w-4 h-4 text-purple-600" /> Google Gemini AI Executive Analysis & Recommendations
          </div>
          <div className="text-xs text-purple-900 dark:text-purple-200 whitespace-pre-line leading-relaxed font-medium">
            {summary || 'AI Sprint summary generation in progress...'}
          </div>
        </div>

        {/* Task Inventory Breakdown Table */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-500" /> Sprint Task Inventory ({tasks.length})
          </h3>

          <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Task Title</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Assignee</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
                {tasks.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">{t.title}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase">
                        {t.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                        {t.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4">{t.assignee?.name || 'Unassigned'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Sign-off */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div className="flex items-center gap-1.5 font-medium">
            <Shield className="w-4 h-4 text-emerald-500" />
            <span>Verified by Streamline AI Governance Engine</span>
          </div>
          <div>Page 1 of 1 • Approved for Project Stakeholder Review</div>
        </div>
      </div>
    </div>
  );
}
