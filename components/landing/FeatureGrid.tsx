'use client';

import { Shield, Layers, Users, BarChart3, MessageSquare, Zap, Clock, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { InfiniteMovingCards, FeatureCardItem } from '@/components/ui/infinite-moving-cards';

const row1Features: FeatureCardItem[] = [
  {
    icon: Shield,
    title: 'Multi-Tenant Data Isolation',
    description:
      'Keep organization data strictly separated. Every query verifies tenant identity with workspaceId enforcement across all database tables.',
    badge: 'Security First',
    color: 'from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30',
  },
  {
    icon: Users,
    title: 'Role-Based Permissions (RBAC)',
    description:
      'Assign Owner, Admin, or Member roles. Admins manage members & projects, while Members focus on assigned tasks.',
    badge: 'Team Control',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30',
  },
  {
    icon: Layers,
    title: 'Drag & Drop Kanban Boards',
    description:
      'Smooth, real-time board updates with priority tagging (Low, Medium, High, Urgent), due dates, and assignee avatars.',
    badge: 'Productivity',
    color: 'from-emerald-500/20 to-teal-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  },
  {
    icon: BarChart3,
    title: 'Workspace Analytics & Alerts',
    description:
      'Gain instant visibility into task distribution, member workload bar charts, and automatically flagged overdue items.',
    badge: 'Real-Time Insights',
    color: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30',
  },
];

const row2Features: FeatureCardItem[] = [
  {
    icon: MessageSquare,
    title: 'Threaded Comments & Activity Log',
    description:
      'Collaborate directly on tasks. Maintain an immutable audit timeline of task status shifts and priority updates.',
    badge: 'Collaboration',
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
  },
  {
    icon: Zap,
    title: 'Subscription Plans & Quotas',
    description:
      'Enforce tier limits dynamically. Free workspaces allow up to 3 projects, while Pro & Enterprise unlock unlimited scale.',
    badge: 'Monetization',
    color: 'from-rose-500/20 to-red-500/20 text-rose-600 dark:text-rose-400 border-rose-500/30',
  },
  {
    icon: Clock,
    title: 'Overdue Task Notifications',
    description:
      'Automatic warnings for past due items (dueDate < now and status != DONE) to keep your project sprints on schedule.',
    badge: 'Automation',
    color: 'from-indigo-500/20 to-blue-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
  },
  {
    icon: Lock,
    title: 'JWT Refresh Token Rotation',
    description:
      'Secure authentication with short-lived 15m access tokens and 7-day database-backed refresh token rotation.',
    badge: 'Authentication',
    color: 'from-teal-500/20 to-emerald-500/20 text-teal-600 dark:text-teal-400 border-teal-500/30',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 overflow-hidden relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Centered Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 px-4 flex flex-col items-center justify-center">
        <Badge variant="outline" className="mb-4 text-center">
          Built for Production SaaS Scale
        </Badge>
        <h2 className="font-bricolage text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 text-center">
          Everything You Need to Manage Team Execution
        </h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 text-center">
          Engineered with modern architecture to deliver speed, multi-tenant isolation, and intuitive team workflows.
        </p>
      </div>

      {/* Centered Infinite Moving Cards Rows with Equal Side Margins */}
      <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto px-4">
        {/* Row 1: Moving Left */}
        <InfiniteMovingCards items={row1Features} direction="left" speed="normal" />

        {/* Row 2: Moving Right */}
        <InfiniteMovingCards items={row2Features} direction="right" speed="normal" />
      </div>
    </section>
  );
}
