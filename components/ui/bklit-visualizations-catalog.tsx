'use client';

import React, { useState } from 'react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ComposedChart,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  FunnelChart,
  Funnel,
  LabelList,
} from 'recharts';
import { motion } from 'framer-motion';
import { ShimmeringText } from '@/components/ui/shimmering-text';
import {
  TrendingUp,
  Activity,
  PieChart as PieIcon,
  BarChart3,
  Calendar,
  Grid,
  Compass,
  Gauge,
  Flame,
  GitCommit,
  DollarSign,
  Zap,
} from 'lucide-react';

// Custom Modern Tooltip Component
const CustomBklitTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl text-xs space-y-1.5 z-50">
        <p className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-blue-500" />
          {label || 'Metrics Details'}
        </p>
        <div className="space-y-1 pt-1 border-t border-slate-200 dark:border-slate-800">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center justify-between gap-4 text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || entry.fill }} />
                {entry.name || entry.dataKey}:
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

// 1. AREA CHART (Sprint Throughput)
export function BklitAreaChartComponent() {
  const data = [
    { day: 'Mon', completed: 18, backlog: 40 },
    { day: 'Tue', completed: 28, backlog: 34 },
    { day: 'Wed', completed: 42, backlog: 26 },
    { day: 'Thu', completed: 58, backlog: 20 },
    { day: 'Fri', completed: 74, backlog: 12 },
    { day: 'Sat', completed: 88, backlog: 8 },
    { day: 'Sun', completed: 96, backlog: 4 },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">Area Chart</span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-500" /> Sprint Throughput Velocity
          </h3>
        </div>
        <ShimmeringText text="Live Throughput" className="text-xs" />
      </div>
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="bklitAreaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
            <XAxis dataKey="day" stroke="#64748b" fontSize={11} axisLine={false} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomBklitTooltip />} />
            <Area type="monotone" dataKey="completed" name="Completed" stroke="#3b82f6" strokeWidth={2.5} fill="url(#bklitAreaGrad)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 2. RADAR CHART (Team Execution Dimensions)
export function BklitRadarChartComponent() {
  const data = [
    { subject: 'Velocity', A: 92, fullMark: 100 },
    { subject: 'Quality', A: 88, fullMark: 100 },
    { subject: 'SLA Health', A: 96, fullMark: 100 },
    { subject: 'Collaboration', A: 84, fullMark: 100 },
    { subject: 'Accuracy', A: 90, fullMark: 100 },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-purple-500 tracking-wider">Radar Chart</span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Compass className="w-4 h-4 text-purple-500" /> Team Skill & Execution Index
          </h3>
        </div>
      </div>
      <div className="h-60 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data} outerRadius="75%">
            <PolarGrid stroke="#334155" opacity={0.25} />
            <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={11} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#64748b" fontSize={9} />
            <Radar name="Team Benchmark" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
            <Tooltip content={<CustomBklitTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 3. COMPOSED CHART (Planned vs Actual Output)
export function BklitComposedChartComponent() {
  const data = [
    { sprint: 'Sprint 1', planned: 20, actual: 18, efficiency: 90 },
    { sprint: 'Sprint 2', planned: 30, actual: 32, efficiency: 106 },
    { sprint: 'Sprint 3', planned: 40, actual: 38, efficiency: 95 },
    { sprint: 'Sprint 4', planned: 50, actual: 54, efficiency: 108 },
    { sprint: 'Sprint 5', planned: 60, actual: 65, efficiency: 108 },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-wider">Composed Chart</span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-500" /> Planned vs Actual Velocity
          </h3>
        </div>
      </div>
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
            <XAxis dataKey="sprint" stroke="#64748b" fontSize={11} axisLine={false} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomBklitTooltip />} />
            <Bar dataKey="planned" name="Planned Points" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={20} />
            <Bar dataKey="actual" name="Actual Points" fill="#10b981" radius={[4, 4, 0, 0]} barSize={20} />
            <Line type="monotone" dataKey="efficiency" name="Efficiency %" stroke="#f59e0b" strokeWidth={2.5} dot={{ r: 4 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 4. FUNNEL CHART (Pipeline Progression)
export function BklitFunnelChartComponent() {
  const data = [
    { value: 120, name: 'Backlog Tasks', fill: '#64748b' },
    { value: 90, name: 'Sprint Planned', fill: '#3b82f6' },
    { value: 65, name: 'In Progress', fill: '#8b5cf6' },
    { value: 45, name: 'Code Review/QA', fill: '#f59e0b' },
    { value: 38, name: 'Completed & Live', fill: '#10b981' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-amber-500 tracking-wider">Funnel Chart</span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FilterIcon className="w-4 h-4 text-amber-500" /> Task Conversion Funnel
          </h3>
        </div>
      </div>
      <div className="h-60 w-full flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip content={<CustomBklitTooltip />} />
            <Funnel dataKey="value" data={data} isAnimationActive>
              <LabelList position="right" fill="#94a3b8" stroke="none" dataKey="name" fontSize={11} />
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Helper icon
function FilterIcon(props: any) {
  return <Zap {...props} />;
}

// 5. GAUGE & RING CHART (SLA Compliance Gauge)
export function BklitGaugeRingComponent() {
  const percentage = 94;
  const ringData = [
    { name: 'SLA Met', value: percentage, color: '#10b981' },
    { name: 'Breached', value: 100 - percentage, color: '#e2e8f0' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm relative">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-emerald-500 tracking-wider">Gauge / Ring Chart</span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Gauge className="w-4 h-4 text-emerald-500" /> SLA Target Compliance Rate
          </h3>
        </div>
      </div>
      <div className="h-60 w-full relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={ringData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={92}
              startAngle={180}
              endAngle={0}
              dataKey="value"
            >
              <Cell fill="#10b981" />
              <Cell fill="#334155" opacity={0.3} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-2 text-center">
          <span className="text-3xl font-black text-slate-900 dark:text-white">{percentage}%</span>
          <p className="text-[10px] font-bold text-emerald-500 uppercase">On-Time Completion</p>
        </div>
      </div>
    </div>
  );
}

// 6. HEATMAP CHART (Team Activity Heatmap)
export function BklitHeatmapComponent() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const hours = ['9AM', '12PM', '3PM', '6PM'];

  const getHeatColor = (val: number) => {
    if (val > 80) return 'bg-blue-600 text-white';
    if (val > 50) return 'bg-blue-500/60 text-white';
    if (val > 25) return 'bg-blue-500/30 text-blue-900 dark:text-blue-200';
    return 'bg-slate-100 dark:bg-slate-800 text-slate-400';
  };

  const matrix = [
    [20, 65, 85, 40],
    [35, 90, 75, 50],
    [45, 80, 95, 60],
    [30, 70, 80, 40],
    [15, 55, 60, 30],
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-blue-500 tracking-wider">Heatmap Chart</span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Flame className="w-4 h-4 text-blue-500" /> Member Task Activity Heatmap
          </h3>
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <div className="grid grid-cols-5 gap-2 text-center text-xs font-semibold text-slate-400 pb-1">
          {hours.map((h) => (
            <span key={h}>{h}</span>
          ))}
          <span>Peak</span>
        </div>

        {days.map((day, dIdx) => (
          <div key={day} className="flex items-center gap-2">
            <span className="w-8 text-xs font-medium text-slate-500 dark:text-slate-400">{day}</span>
            <div className="grid grid-cols-4 gap-2 flex-1">
              {matrix[dIdx].map((val, hIdx) => (
                <div
                  key={hIdx}
                  className={`h-9 rounded-lg ${getHeatColor(val)} flex items-center justify-center text-xs font-bold transition-transform hover:scale-105 cursor-pointer`}
                  title={`${val} actions logged`}
                >
                  {val}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 7. LIVE LINE & PROFIT/LOSS CHART (Sprint Capacity & Burn-down)
export function BklitProfitLossCandlestickComponent() {
  const data = [
    { sprint: 'S-1', budget: 100, spent: 90, variance: +10 },
    { sprint: 'S-2', budget: 120, spent: 125, variance: -5 },
    { sprint: 'S-3', budget: 110, spent: 98, variance: +12 },
    { sprint: 'S-4', budget: 130, spent: 115, variance: +15 },
    { sprint: 'S-5', budget: 140, spent: 142, variance: -2 },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-indigo-500 tracking-wider">Profit / Loss Variance Line</span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-indigo-500" /> Story Points Variance & Forecast
          </h3>
        </div>
      </div>
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.15} />
            <XAxis dataKey="sprint" stroke="#64748b" fontSize={11} axisLine={false} tickLine={false} />
            <YAxis stroke="#64748b" fontSize={11} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomBklitTooltip />} />
            <Line type="stepAfter" dataKey="budget" name="Planned Capacity" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" />
            <Line type="monotone" dataKey="spent" name="Executed Points" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 5 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 8. SCATTER CHART (Task Estimation vs Actual Complexity Matrix)
export function BklitScatterChartComponent() {
  const data = [
    { estimatedHours: 2, actualHours: 2.5, task: 'Fix Navbar Hover' },
    { estimatedHours: 4, actualHours: 3.8, task: 'Add Theme Toggle' },
    { estimatedHours: 8, actualHours: 12, task: 'JWT Refresh Rotation' },
    { estimatedHours: 6, actualHours: 5.5, task: 'Prisma Seeder' },
    { estimatedHours: 12, actualHours: 14, task: 'Kanban Drag-and-Drop' },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] uppercase font-bold text-cyan-500 tracking-wider">Scatter Chart</span>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Grid className="w-4 h-4 text-cyan-500" /> Estimation vs Actual Complexity
          </h3>
        </div>
      </div>
      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.15} />
            <XAxis type="number" dataKey="estimatedHours" name="Est. Hours" stroke="#64748b" fontSize={11} />
            <YAxis type="number" dataKey="actualHours" name="Actual Hours" stroke="#64748b" fontSize={11} />
            <Tooltip content={<CustomBklitTooltip />} />
            <Scatter name="Tasks" data={data} fill="#06b6d4" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
