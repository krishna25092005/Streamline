'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  CheckSquare,
  Search,
  Filter,
  Calendar,
  FolderKanban,
  CheckCircle2,
  Clock,
  AlertCircle,
  Tag,
  ArrowRight,
  Shield,
} from 'lucide-react';
import toast from 'react-hot-toast';

interface MyTaskItem {
  id: string;
  title: string;
  description?: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  dueDate?: string;
  projectId: string;
  projectName: string;
  subTasks?: { id: string; title: string; completed: boolean }[];
  commentCount: number;
}

export default function MyTasksPage() {
  const [tasks, setTasks] = useState<MyTaskItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'TODO' | 'IN_PROGRESS' | 'DONE'>('ALL');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');

  useEffect(() => {
    fetchMyTasks();
  }, []);

  const fetchMyTasks = async () => {
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs || !token) return;

    const ws = JSON.parse(storedWs);
    setLoading(true);

    try {
      // 1. Fetch all projects in workspace
      const projRes = await fetch(`/api/workspaces/${ws.id}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const projData = await projRes.json();

      if (!projData.success) {
        toast.error('Failed to load tasks');
        return;
      }

      const allAssignedTasks: MyTaskItem[] = [];

      // 2. Fetch tasks for each project
      for (const proj of projData.data) {
        const tasksRes = await fetch(`/api/projects/${proj.id}/tasks`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const tasksData = await tasksRes.json();

        if (tasksData.success) {
          tasksData.data.forEach((t: any) => {
            allAssignedTasks.push({
              id: t.id,
              title: t.title,
              description: t.description,
              priority: t.priority,
              status: t.status,
              dueDate: t.dueDate,
              projectId: proj.id,
              projectName: proj.name,
              subTasks: t.subTasks || [],
              commentCount: t.commentCount || 0,
            });
          });
        }
      }

      setTasks(allAssignedTasks);
    } catch (err) {
      console.error(err);
      toast.error('Failed to load my tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (taskId: string, newStatus: 'TODO' | 'IN_PROGRESS' | 'DONE') => {
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(`Task status updated to ${newStatus.replace('_', ' ')}!`);
        setTasks((prev) =>
          prev.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
        );
      } else {
        toast.error(data.error?.message || 'Failed to update status');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to update task');
    }
  };

  const filteredTasks = tasks.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.description && t.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      t.projectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || t.status === statusFilter;
    const matchesPriority = priorityFilter === 'ALL' || t.priority === priorityFilter;

    return matchesSearch && matchesStatus && matchesPriority;
  });

  const todoCount = tasks.filter((t) => t.status === 'TODO').length;
  const inProgressCount = tasks.filter((t) => t.status === 'IN_PROGRESS').length;
  const doneCount = tasks.filter((t) => t.status === 'DONE').length;

  if (loading) {
    return (
      <div className="p-8 text-slate-500 dark:text-slate-400 text-xs animate-pulse">
        Loading assigned tasks across workspace...
      </div>
    );
  }

  return (
    <div className="max-w-6xl space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <CheckSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" /> My Assigned Tasks
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Centralized execution view of all tasks assigned to you across workspace projects
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border border-slate-200 dark:border-slate-700">
            Total: <strong>{tasks.length} Tasks</strong>
          </span>
        </div>
      </div>

      {/* Filter and Status Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl w-full md:w-auto">
          <button
            onClick={() => setStatusFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'ALL'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            All ({tasks.length})
          </button>

          <button
            onClick={() => setStatusFilter('TODO')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'TODO'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            To Do ({todoCount})
          </button>

          <button
            onClick={() => setStatusFilter('IN_PROGRESS')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'IN_PROGRESS'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            In Progress ({inProgressCount})
          </button>

          <button
            onClick={() => setStatusFilter('DONE')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              statusFilter === 'DONE'
                ? 'bg-white dark:bg-slate-900 text-emerald-600 dark:text-emerald-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Done ({doneCount})
          </button>
        </div>

        {/* Search & Priority Filter */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search my tasks..."
              className="pl-9 w-full rounded-xl py-1.5 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="rounded-xl py-1.5 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <option value="ALL">All Priorities</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
            <option value="URGENT">Urgent</option>
          </select>
        </div>
      </div>

      {/* Task Cards Grid */}
      {filteredTasks.length === 0 ? (
        <div className="bg-white dark:bg-slate-900 p-12 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
          <h3 className="text-base font-bold text-slate-900 dark:text-white">No tasks found</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            You currently have no assigned tasks matching the selected status or filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTasks.map((t) => {
            const completedSub = t.subTasks?.filter((s) => s.completed).length || 0;
            const totalSub = t.subTasks?.length || 0;

            return (
              <div
                key={t.id}
                className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/dashboard/projects/${t.projectId}`}
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors flex items-center gap-1.5"
                    >
                      <FolderKanban className="w-3 h-3" />
                      <span>{t.projectName}</span>
                    </Link>

                    <span
                      className={`text-[9px] px-2 py-0.5 rounded font-extrabold uppercase ${
                        t.priority === 'URGENT'
                          ? 'bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/30'
                          : t.priority === 'HIGH'
                          ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {t.priority}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {t.title}
                  </h3>

                  {t.description && (
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {t.description}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    {t.dueDate && (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-500" />
                        {new Date(t.dueDate).toLocaleDateString()}
                      </span>
                    )}

                    {totalSub > 0 && (
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        Checklist: {completedSub}/{totalSub}
                      </span>
                    )}
                  </div>

                  {/* Status Switcher Selector */}
                  <select
                    value={t.status}
                    onChange={(e) => handleStatusChange(t.id, e.target.value as any)}
                    className="rounded-lg py-1 px-2.5 text-[11px] font-bold border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="TODO">To Do</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
