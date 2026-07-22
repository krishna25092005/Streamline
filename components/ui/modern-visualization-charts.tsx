'use client';

import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';
import { motion } from 'framer-motion';
import { ShimmeringText } from '@/components/ui/shimmering-text';
import { TrendingUp, Activity, PieChart as PieIcon, BarChart3, Calendar } from 'lucide-react';

// Custom Tooltip Component
const CustomChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl text-xs space-y-1.5 z-50">
        <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-blue-500" />
          {label}
        </p>
        <div className="space-y-1 pt-1 border-t border-slate-200 dark:border-slate-800">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center justify-between gap-4 text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
                {entry.name}:
              </span>
              <span className="font-bold text-slate-900 dark:text-white">{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// 1. Bklit-Inspired Modern Area Velocity Chart
export function ModernAreaVelocityChart({
  data = [
    { date: 'Mon', completed: 14, inProgress: 8, created: 22 },
    { date: 'Tue', completed: 22, inProgress: 12, created: 28 },
    { date: 'Wed', completed: 35, inProgress: 15, created: 32 },
    { date: 'Thu', completed: 42, inProgress: 18, created: 39 },
    { date: 'Fri', completed: 58, inProgress: 24, created: 45 },
    { date: 'Sat', completed: 65, inProgress: 19, created: 48 },
    { date: 'Sun', completed: 78, inProgress: 14, created: 52 },
  ],
}: {
  data?: any[];
}) {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d'>('7d');

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden group"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-500 animate-pulse" />
            <h3 className="text-sm font-extrabold text-slate-900 dark:text-white tracking-tight">
              Sprint Execution & Velocity Trend
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Real-time throughput analysis (<ShimmeringText text="Live Performance Sync" />)
          </p>
        </div>

        {/* Time range selector */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60 self-start sm:self-auto">
          {(['7d', '30d', '90d'] as const).map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                timeRange === range
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {range.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorInProgress" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="colorCreated" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.35} />
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
            <XAxis dataKey="date" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip content={<CustomChartTooltip />} />
            <Area
              type="monotone"
              dataKey="completed"
              name="Completed Tasks"
              stroke="#10b981"
              strokeWidth={2.5}
              fillOpacity={1}
              fill="url(#colorCompleted)"
            />
            <Area
              type="monotone"
              dataKey="inProgress"
              name="In Progress"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorInProgress)"
            />
            <Area
              type="monotone"
              dataKey="created"
              name="Total Backlog"
              stroke="#a855f7"
              strokeWidth={1.5}
              strokeDasharray="4 4"
              fillOpacity={1}
              fill="url(#colorCreated)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Completed
          </span>
          <span className="flex items-center gap-1.5 font-medium text-blue-600 dark:text-blue-400">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> In Progress
          </span>
          <span className="flex items-center gap-1.5 font-medium text-purple-600 dark:text-purple-400">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Backlog
          </span>
        </div>
        <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5 text-emerald-500" /> +24% Velocity
        </span>
      </div>
    </motion.div>
  );
}

// 2. Bklit-Inspired Modern Workload Bar Chart
export function ModernWorkloadBarChart({ data = [] }: { data: any[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Team Workload Distribution
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Active tasks assigned per member</p>
        </div>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
            <XAxis dataKey="name" stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={11} tickLine={false} axisLine={false} allowDecimals={false} />
            <Tooltip content={<CustomChartTooltip />} />
            <Bar dataKey="todo" name="To Do" fill="#94a3b8" radius={[6, 6, 0, 0]} barSize={16} />
            <Bar dataKey="inProgress" name="In Progress" fill="#3b82f6" radius={[6, 6, 0, 0]} barSize={16} />
            <Bar dataKey="done" name="Done" fill="#10b981" radius={[6, 6, 0, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-around text-xs text-slate-600 dark:text-slate-400">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2.5 h-2.5 rounded-sm bg-slate-400" /> To Do
        </span>
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2.5 h-2.5 rounded-sm bg-blue-500" /> In Progress
        </span>
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Completed
        </span>
      </div>
    </motion.div>
  );
}

// 3. Bklit-Inspired Donut Gauge Status Breakdown Chart
export function ModernStatusDonutChart({ data = [] }: { data: any[] }) {
  const totalTasks = data.reduce((acc, curr) => acc + (curr.value || 0), 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <PieIcon className="w-4 h-4 text-emerald-500" /> Task Status Distribution
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-time status breakdown</p>
        </div>
      </div>

      <div className="h-64 w-full relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
              ))}
            </Pie>
            <Tooltip content={<CustomChartTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Central Overlay Indicator */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">{totalTasks}</span>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Total Tasks</span>
        </div>
      </div>

      {/* Legend list */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-2 text-center text-xs">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="font-bold text-slate-900 dark:text-white">{item.value}</span>
            </div>
            <span className="text-[10px] text-slate-500 dark:text-slate-400">{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
