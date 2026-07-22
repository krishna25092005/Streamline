'use client';

import React from 'react';
import { ShimmeringText } from '@/components/ui/shimmering-text';
import { BarChart3, Sparkles } from 'lucide-react';
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
import {
  ModernWorkloadBarChart,
  ModernStatusDonutChart,
} from '@/components/ui/modern-visualization-charts';

export default function AnalyticsPage() {
  const dummyWorkload = [
    { name: 'Alex', todo: 3, inProgress: 4, done: 8 },
    { name: 'Sarah', todo: 2, inProgress: 6, done: 10 },
    { name: 'Michael', todo: 5, inProgress: 3, done: 7 },
    { name: 'Elena', todo: 1, inProgress: 5, done: 12 },
  ];

  const dummyStatus = [
    { name: 'To Do', value: 11, color: '#94a3b8' },
    { name: 'In Progress', value: 18, color: '#3b82f6' },
    { name: 'Completed', value: 37, color: '#10b981' },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Advanced Performance Analytics & Visualizations
            </h2>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-purple-500 fill-purple-500" /> Interactive Suite
            </span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Comprehensive metric visualizations (<ShimmeringText text="Real-Time Data Engine" />)
          </p>
        </div>
      </div>

      {/* Grid of Bklit Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 1. Area Chart */}
        <BklitAreaChartComponent />

        {/* 2. Radar Chart */}
        <BklitRadarChartComponent />

        {/* 3. Composed Chart */}
        <BklitComposedChartComponent />

        {/* 4. Gauge & Ring Chart */}
        <BklitGaugeRingComponent />

        {/* 5. Funnel Chart */}
        <BklitFunnelChartComponent />

        {/* 6. Heatmap Chart */}
        <BklitHeatmapComponent />

        {/* 7. Bar Chart */}
        <ModernWorkloadBarChart data={dummyWorkload} />

        {/* 8. Ring / Donut Chart */}
        <ModernStatusDonutChart data={dummyStatus} />

        {/* 9. Profit / Loss Variance Line */}
        <BklitProfitLossCandlestickComponent />

        {/* 10. Scatter Chart */}
        <BklitScatterChartComponent />
      </div>
    </div>
  );
}
