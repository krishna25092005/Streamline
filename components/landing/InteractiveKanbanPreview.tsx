'use client';

import { useState } from 'react';
import { Sparkles, CheckCircle2, Clock, Plus, GripVertical, User, ShieldAlert } from 'lucide-react';

interface TaskCard {
  id: string;
  title: string;
  category: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  assignee: string;
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
}

const initialTasks: TaskCard[] = [
  {
    id: 't-1',
    title: 'Implement Multi-Tenant JWT Isolation',
    category: 'Security',
    priority: 'HIGH',
    assignee: 'Alex (Owner)',
    status: 'IN_PROGRESS',
  },
  {
    id: 't-2',
    title: 'Setup RBAC Middleware for Workspace Members',
    category: 'Backend',
    priority: 'URGENT',
    assignee: 'Sarah (Admin)',
    status: 'TODO',
  },
  {
    id: 't-3',
    title: 'Design Dark Glassmorphic Dashboard Layout',
    category: 'UI/UX',
    priority: 'MEDIUM',
    assignee: 'Elena (Member)',
    status: 'IN_PROGRESS',
  },
  {
    id: 't-4',
    title: 'Configure Prisma PostgreSQL Migrations',
    category: 'Database',
    priority: 'HIGH',
    assignee: 'David (Dev)',
    status: 'DONE',
  },
  {
    id: 't-5',
    title: 'Workspace Analytics Workload Bar Charts',
    category: 'Analytics',
    priority: 'MEDIUM',
    assignee: 'Alex (Owner)',
    status: 'TODO',
  },
];

export default function InteractiveKanbanPreview() {
  const [tasks, setTasks] = useState<TaskCard[]>(initialTasks);

  const moveTask = (id: string, newStatus: 'TODO' | 'IN_PROGRESS' | 'DONE') => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'URGENT':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'HIGH':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'MEDIUM':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  const columns = [
    { key: 'TODO', label: 'To Do', color: 'border-slate-700 bg-slate-900/40' },
    { key: 'IN_PROGRESS', label: 'In Progress', color: 'border-blue-500/40 bg-blue-950/20' },
    { key: 'DONE', label: 'Done', color: 'border-emerald-500/40 bg-emerald-950/20' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 md:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-2xl shadow-2xl shadow-black/80">
      {/* Interactive Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Workspace Demo
            </span>
            <span className="text-xs text-slate-400 font-mono">Workspace: Acme Corp</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Real-Time Team Kanban Board
          </h3>
        </div>

        <div className="text-xs text-slate-400 bg-slate-800/60 border border-slate-700/60 px-3 py-2 rounded-xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Click arrows on any task to test live movement</span>
        </div>
      </div>

      {/* Kanban Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col) => {
          const colTasks = tasks.filter((t) => t.status === col.key);
          return (
            <div
              key={col.key}
              className={`rounded-2xl p-4 border ${col.color} flex flex-col min-h-[380px] transition-colors`}
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800/80">
                <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  {col.label}
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono">
                    {colTasks.length}
                  </span>
                </span>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                {colTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all shadow-lg group relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                        {task.category}
                      </span>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getPriorityStyle(
                          task.priority
                        )}`}
                      >
                        {task.priority}
                      </span>
                    </div>

                    <h4 className="text-sm font-medium text-slate-100 mb-3 line-clamp-2">
                      {task.title}
                    </h4>

                    <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                      <div className="flex items-center gap-1.5 text-slate-300 font-medium text-[11px]">
                        <User className="w-3.5 h-3.5 text-blue-400" />
                        {task.assignee}
                      </div>

                      {/* Movement Controls */}
                      <div className="flex items-center gap-1">
                        {col.key !== 'TODO' && (
                          <button
                            onClick={() =>
                              moveTask(
                                task.id,
                                col.key === 'DONE' ? 'IN_PROGRESS' : 'TODO'
                              )
                            }
                            className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:bg-slate-700 text-[10px]"
                            title="Move left"
                          >
                            ←
                          </button>
                        )}
                        {col.key !== 'DONE' && (
                          <button
                            onClick={() =>
                              moveTask(
                                task.id,
                                col.key === 'TODO' ? 'IN_PROGRESS' : 'DONE'
                              )
                            }
                            className="px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 hover:bg-blue-600/50 text-[10px] font-bold"
                            title="Move right"
                          >
                            →
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
