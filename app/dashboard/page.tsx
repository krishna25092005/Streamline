'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  AlertTriangle,
  Layers,
  Calendar,
  FolderKanban,
  Zap,
  Bot,
  Sparkles,
  ShieldAlert,
} from 'lucide-react';
import toast from 'react-hot-toast';
import {
  ModernAreaVelocityChart,
  ModernWorkloadBarChart,
  ModernStatusDonutChart,
} from '@/components/ui/modern-visualization-charts';
import {
  BklitAreaChartComponent,
  BklitRadarChartComponent,
  BklitComposedChartComponent,
  BklitFunnelChartComponent,
  BklitGaugeRingComponent,
  BklitHeatmapComponent,
  BklitProfitLossCandlestickComponent,
  BklitScatterChartComponent,
} from '@/components/ui/bklit-visualizations-catalog';
import { ShimmeringText } from '@/components/ui/shimmering-text';

interface AnalyticsData {
  totalTasks: number;
  todoCount: number;
  inProgressCount: number;
  doneCount: number;
  overdueCount: number;
  statusBreakdown: { name: string; value: number; color: string }[];
  priorityBreakdown: { name: string; count: number }[];
  workloadDistribution: {
    id: string;
    name: string;
    avatarUrl: string | null;
    todo: number;
    inProgress: number;
    done: number;
    total: number;
  }[];
  overdueTasks: {
    id: string;
    title: string;
    status: string;
    priority: string;
    dueDate: string;
    projectName: string;
    projectId: string;
    assignee?: { id: string; name: string; avatarUrl?: string };
  }[];
}

export default function DashboardPage() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(true);

  // AI Automation State
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [aiReport, setAiReport] = useState<string | null>(null);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs) return;

    const ws = JSON.parse(storedWs);

    try {
      const res = await fetch(`/api/workspaces/${ws.id}/analytics`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const resData = await res.json();
      if (resData.success) {
        setData(resData.data);
      } else {
        toast.error(resData.error?.message || 'Failed to load workspace analytics');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRunAiAnalysis = async () => {
    setAiAnalyzing(true);
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs) return;

    const ws = JSON.parse(storedWs);

    try {
      const res = await fetch('/api/ai/predict-risk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ workspaceId: ws.id }),
      });

      const resData = await res.json();
      if (resData.success) {
        setAiReport(resData.data.geminiRiskAnalysis);
        toast.success(`✨ AI SLA Audit completed!`);
      } else {
        toast.error(resData.error?.message || 'Failed to run AI SLA Audit');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error running AI SLA Audit');
    } finally {
      setAiAnalyzing(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-64" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-28 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800" />
          ))}
        </div>
        <div className="h-80 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800" />
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Page Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Workspace Overview</h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center gap-1">
              <Zap className="w-3 h-3 text-blue-500 fill-blue-500" /> Advanced Analytics & AI Automation
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Real-time multi-tenant analytics suite (<ShimmeringText text="Real-Time AI Data Engine" />)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleRunAiAnalysis}
            disabled={aiAnalyzing}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 text-xs font-bold transition-all"
          >
            <Bot className="w-4 h-4 text-purple-500 animate-pulse" />
            <span>{aiAnalyzing ? 'AI Analyzing...' : 'Run AI SLA Audit'}</span>
          </button>

          <Link
            href="/dashboard/projects"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
          >
            <FolderKanban className="w-4 h-4" />
            <span>View Kanban & Views</span>
          </Link>
        </div>
      </div>

      {/* AI Analysis Insight Banner */}
      {aiReport && (
        <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/30 text-xs text-purple-900 dark:text-purple-200 flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
          <div className="flex-1 font-medium leading-relaxed">{aiReport}</div>
          <button onClick={() => setAiReport(null)} className="text-purple-400 hover:text-purple-600">
            &times;
          </button>
        </div>
      )}

      {/* Top 4 Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Tasks */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Total Tasks</span>
            <Layers className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{data?.totalTasks || 0}</span>
            <span className="text-xs text-slate-500 dark:text-slate-400">across projects</span>
          </div>
        </div>

        {/* In Progress Tasks */}
        <div className="bg-indigo-50/60 dark:bg-indigo-950/20 p-5 rounded-2xl border border-indigo-200 dark:border-indigo-500/30 shadow-sm hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-all">
          <div className="flex items-center justify-between text-indigo-600 dark:text-indigo-400">
            <span className="text-xs font-semibold uppercase tracking-wider">In Progress</span>
            <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">{data?.inProgressCount || 0}</span>
            <span className="text-xs text-indigo-600 dark:text-indigo-300 font-semibold">ACTIVE SPRINT</span>
          </div>
        </div>

        {/* Done Tasks */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Completed</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">{data?.doneCount || 0}</span>
            <span className="text-xs text-emerald-600 dark:text-emerald-400/80 font-medium">DONE</span>
          </div>
        </div>

        {/* Overdue Tasks Badge */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-red-200 dark:border-red-500/30 bg-red-50/50 dark:bg-red-950/10 shadow-sm hover:border-red-300 dark:hover:border-red-500/50 transition-all">
          <div className="flex items-center justify-between text-red-500 dark:text-red-400">
            <span className="text-xs font-semibold uppercase tracking-wider">Overdue Tasks</span>
            <AlertTriangle className="w-5 h-5 text-red-500 dark:text-red-400 animate-pulse" />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-3xl font-extrabold text-red-600 dark:text-red-400">{data?.overdueCount || 0}</span>
            <span className="text-xs text-red-500 dark:text-red-300 font-medium">Requires Action</span>
          </div>
        </div>
      </div>

      {/* Primary Area Velocity Chart */}
      <ModernAreaVelocityChart />

      {/* Grid 1: Radar Chart & Composed Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <BklitRadarChartComponent />

        {/* Composed Chart */}
        <BklitComposedChartComponent />
      </div>

      {/* Grid 2: Donut Gauge Chart & Workload Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Donut Chart */}
        <ModernStatusDonutChart data={data?.statusBreakdown || []} />

        {/* Workload Bar Chart */}
        <ModernWorkloadBarChart data={data?.workloadDistribution || []} />
      </div>

      {/* Grid 3: SLA Gauge Ring & Pipeline Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SLA Gauge Ring Chart */}
        <BklitGaugeRingComponent />

        {/* Pipeline Funnel Chart */}
        <BklitFunnelChartComponent />
      </div>

      {/* Grid 4: Activity Heatmap & Capacity Variance Line */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Heatmap Chart */}
        <BklitHeatmapComponent />

        {/* Capacity / Profit-Loss Line */}
        <BklitProfitLossCandlestickComponent />
      </div>

      {/* Scatter Matrix Chart */}
      <BklitScatterChartComponent />

      {/* Overdue Tasks Section */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-red-200 dark:border-red-500/30 bg-red-50/30 dark:bg-red-950/10 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> Overdue Tasks ({data?.overdueCount || 0})
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Tasks with due date prior to today that are not yet completed</p>
          </div>
        </div>

        {data?.overdueTasks && data.overdueTasks.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                  <th className="py-3 px-4">Task Title</th>
                  <th className="py-3 px-4">Project</th>
                  <th className="py-3 px-4">Assignee</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800/60 text-slate-800 dark:text-slate-200">
                {data.overdueTasks.map((t) => (
                  <tr key={t.id} className="hover:bg-red-500/5 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">
                      <Link href={`/dashboard/projects/${t.projectId}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                        {t.title}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-slate-500 dark:text-slate-400">{t.projectName}</td>
                    <td className="py-3 px-4">
                      {t.assignee ? (
                        <div className="flex items-center gap-2">
                          {t.assignee.avatarUrl ? (
                            <img src={t.assignee.avatarUrl} alt="" className="w-5 h-5 rounded-full object-cover" />
                          ) : (
                            <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] text-slate-800 dark:text-white">
                              {t.assignee.name.charAt(0)}
                            </div>
                          )}
                          <span>{t.assignee.name}</span>
                        </div>
                      ) : (
                        <span className="text-slate-400 italic">Unassigned</span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          t.priority === 'URGENT'
                            ? 'bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/40'
                            : 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40'
                        }`}
                      >
                        {t.priority}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-red-600 dark:text-red-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(t.dueDate).toLocaleDateString()}
                    </td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-700 dark:text-blue-300 font-medium uppercase">
                        {t.status.replace('_', ' ')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8 text-center text-slate-500 dark:text-slate-400 text-xs">
            <CheckCircle2 className="w-8 h-8 text-emerald-500 dark:text-emerald-400 mx-auto mb-2" />
            <p className="font-semibold text-slate-900 dark:text-white">Great job! No overdue tasks in this workspace.</p>
          </div>
        )}
      </div>
    </div>
  );
}
