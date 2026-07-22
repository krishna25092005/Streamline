'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from '@hello-pangea/dnd';
import {
  FolderKanban,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  MessageSquare,
  History,
  CheckCircle2,
  AlertCircle,
  User,
  Shield,
  Trash2,
  Edit2,
  Send,
  X,
  ArrowLeft,
  ChevronRight,
  UserPlus,
  Sparkles,
  List,
  LayoutGrid,
  CalendarDays,
  CheckSquare,
  Bot,
  Zap,
  ShieldAlert,
  Download,
  FileText,
} from 'lucide-react';
import toast from 'react-hot-toast';

interface UserShort {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

interface TaskComment {
  id: string;
  content: string;
  createdAt: string;
  author: UserShort;
}

interface TaskActivity {
  id: string;
  action: string;
  previousState?: string;
  newState?: string;
  createdAt: string;
  user: UserShort;
}

interface SubTaskItem {
  id: string;
  taskId: string;
  title: string;
  completed: boolean;
}

interface TaskItem {
  id: string;
  title: string;
  description?: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  status: 'TODO' | 'IN_PROGRESS' | 'DONE';
  dueDate?: string;
  projectId: string;
  assignee?: UserShort | null;
  createdBy: UserShort;
  commentCount: number;
  activityCount: number;
  subTasks?: SubTaskItem[];
  createdAt: string;
  updatedAt: string;
}

interface ProjectDetails {
  id: string;
  name: string;
  description?: string;
  workspaceId: string;
  createdBy: UserShort;
  members: UserShort[];
  userWorkspaceRole: 'ADMIN' | 'MEMBER';
}

const COLUMNS: { id: 'TODO' | 'IN_PROGRESS' | 'DONE'; label: string; color: string }[] = [
  { id: 'TODO', label: 'To Do', color: 'border-slate-200 dark:border-slate-700/80 bg-slate-100/70 dark:bg-slate-900/50' },
  { id: 'IN_PROGRESS', label: 'In Progress', color: 'border-indigo-300 dark:border-indigo-500/40 bg-indigo-50/70 dark:bg-indigo-950/20 shadow-sm' },
  { id: 'DONE', label: 'Done', color: 'border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/10' },
];

export default function KanbanBoardPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id as string;

  const [project, setProject] = useState<ProjectDetails | null>(null);
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<string>('ALL');
  const [viewMode, setViewMode] = useState<'KANBAN' | 'TABLE' | 'CALENDAR'>('KANBAN');

  // AI & Subtasks Modals state
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskItem | null>(null);
  const [taskComments, setTaskComments] = useState<TaskComment[]>([]);
  const [taskActivities, setTaskActivities] = useState<TaskActivity[]>([]);
  const [taskSubTasks, setTaskSubTasks] = useState<SubTaskItem[]>([]);
  const [newSubTaskTitle, setNewSubTaskTitle] = useState('');
  const [newComment, setNewComment] = useState('');
  const [postingComment, setPostingComment] = useState(false);

  // AI Generator & Summary state
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiSprintSummary, setAiSprintSummary] = useState<string | null>(null);
  const [aiSprintStats, setAiSprintStats] = useState<any>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);

  // New task form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'>('MEDIUM');
  const [status, setStatus] = useState<'TODO' | 'IN_PROGRESS' | 'DONE'>('TODO');
  const [dueDate, setDueDate] = useState('');
  const [assigneeId, setAssigneeId] = useState('');
  const [creatingTask, setCreatingTask] = useState(false);

  // Current logged in user info
  const [currentUser, setCurrentUser] = useState<UserShort | null>(null);

  useEffect(() => {
    fetchProjectAndTasks();
    const userStr = localStorage.getItem('user');
    if (userStr) setCurrentUser(JSON.parse(userStr));
  }, [projectId]);

  const fetchProjectAndTasks = async () => {
    const token = localStorage.getItem('accessToken');
    try {
      const projRes = await fetch(`/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const projData = await projRes.json();
      if (projData.success) {
        setProject(projData.data);
      } else {
        toast.error(projData.error?.message || 'Failed to load project details');
      }

      const tasksRes = await fetch(`/api/projects/${projectId}/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const tasksData = await tasksRes.json();
      if (tasksData.success) {
        setTasks(tasksData.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectTask = async (task: TaskItem) => {
    setSelectedTask(task);
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/tasks/${task.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setTaskComments(data.data.comments || []);
        setTaskActivities(data.data.activityLogs || []);
      }

      // Fetch Subtasks
      const subRes = await fetch(`/api/tasks/${task.id}/subtasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const subData = await subRes.json();
      if (subData.success) {
        setTaskSubTasks(subData.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddSubTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSubTaskTitle || !selectedTask) return;

    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/tasks/${selectedTask.id}/subtasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title: newSubTaskTitle }),
      });

      const data = await res.json();
      if (data.success) {
        setTaskSubTasks([...taskSubTasks, data.data]);
        setNewSubTaskTitle('');
        toast.success('Sub-task added!');
        fetchProjectAndTasks();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleSubTask = async (subTaskId: string, currentCompleted: boolean) => {
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/subtasks/${subTaskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ completed: !currentCompleted }),
      });

      const data = await res.json();
      if (data.success) {
        setTaskSubTasks(taskSubTasks.map((s) => (s.id === subTaskId ? { ...s, completed: !currentCompleted } : s)));
        fetchProjectAndTasks();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteSubTask = async (subTaskId: string) => {
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/subtasks/${subTaskId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (data.success) {
        setTaskSubTasks(taskSubTasks.filter((s) => s.id !== subTaskId));
        toast.success('Sub-task removed');
        fetchProjectAndTasks();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // AI Task Generation Assistant
  const handleGenerateTaskWithAI = async () => {
    if (!aiPrompt) {
      toast.error('Enter a short task idea first!');
      return;
    }

    setAiGenerating(true);
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch('/api/ai/generate-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt: aiPrompt }),
      });

      const data = await res.json();
      if (data.success) {
        setTitle(data.data.title);
        setDescription(data.data.description);
        setPriority(data.data.priority);
        toast.success('✨ AI generated task breakdown & acceptance criteria!');
      } else {
        toast.error(data.error?.message || 'AI Generation failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('AI Service Error');
    } finally {
      setAiGenerating(false);
    }
  };

  // AI Sprint Executive Summary
  const handleGenerateSprintSummary = async () => {
    setLoadingSummary(true);
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch('/api/ai/summarize-sprint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ projectId }),
      });

      const data = await res.json();
      if (data.success) {
        setAiSprintSummary(data.data.summary);
        setAiSprintStats(data.data);
        toast.success('✨ AI Executive Sprint Report generated!');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingSummary(false);
    }
  };

  const handleDownloadOfficialPdf = () => {
    if (!aiSprintSummary || !project) return;

    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      toast.error('Please allow popups to download official PDF report!');
      return;
    }

    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const docId = `STR-RPT-${Math.floor(100000 + Math.random() * 900000)}`;

    const stats = aiSprintStats || {
      completionRate: tasks.length > 0 ? Math.round((tasks.filter((t) => t.status === 'DONE').length / tasks.length) * 100) : 0,
      total: tasks.length,
      done: tasks.filter((t) => t.status === 'DONE').length,
      inProgress: tasks.filter((t) => t.status === 'IN_PROGRESS').length,
      urgent: tasks.filter((t) => t.priority === 'URGENT' && t.status !== 'DONE').length,
    };

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Official Executive Sprint Report - ${project.name}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
          body {
            font-family: 'Inter', sans-serif;
            color: #0f172a;
            background-color: #ffffff;
            margin: 0;
            padding: 40px;
            line-height: 1.6;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .brand {
            font-size: 24px;
            font-weight: 800;
            color: #2563eb;
            letter-spacing: -0.5px;
          }
          .doc-meta {
            text-align: right;
            font-size: 11px;
            color: #64748b;
          }
          .doc-meta strong {
            color: #0f172a;
          }
          .badge {
            display: inline-block;
            padding: 4px 12px;
            background: #eff6ff;
            color: #2563eb;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            border: 1px solid #bfdbfe;
            margin-bottom: 15px;
          }
          h1 {
            font-size: 26px;
            font-weight: 800;
            margin: 0 0 10px 0;
            color: #0f172a;
          }
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
            margin: 30px 0;
          }
          .stat-card {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 16px;
            text-align: center;
          }
          .stat-card .value {
            font-size: 24px;
            font-weight: 800;
            color: #2563eb;
          }
          .stat-card .label {
            font-size: 11px;
            color: #64748b;
            font-weight: 600;
            text-transform: uppercase;
            margin-top: 4px;
          }
          .summary-box {
            background: #faf5ff;
            border: 1px solid #e9d5ff;
            border-radius: 16px;
            padding: 24px;
            margin-top: 20px;
          }
          .summary-box h3 {
            margin-top: 0;
            color: #7e22ce;
            font-size: 16px;
          }
          .summary-text {
            font-size: 13px;
            color: #334155;
            white-space: pre-line;
          }
          .footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            font-size: 11px;
            color: #94a3b8;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">STREAMLINE ENTERPRISE</div>
            <div style="font-size:12px; color:#64748b;">Official Executive Governance Document</div>
          </div>
          <div class="doc-meta">
            <div>DOCUMENT ID: <strong>${docId}</strong></div>
            <div>DATE: <strong>${currentDate}</strong></div>
            <div>CLASSIFICATION: <strong>CONFIDENTIAL • INTERNAL USE ONLY</strong></div>
          </div>
        </div>

        <div class="badge">AI Executive Sprint Performance Report</div>
        <h1>Project: ${project.name}</h1>

        <div class="stats-grid">
          <div class="stat-card">
            <div class="value">${stats.completionRate || 0}%</div>
            <div class="label">Completion Rate</div>
          </div>
          <div class="stat-card">
            <div class="value">${stats.total || 0}</div>
            <div class="label">Total Tasks</div>
          </div>
          <div class="stat-card">
            <div class="value">${stats.done || 0}</div>
            <div class="label">Tasks Completed</div>
          </div>
          <div class="stat-card">
            <div class="value">${stats.inProgress || 0}</div>
            <div class="label">Active In-Flight</div>
          </div>
        </div>

        <div class="summary-box">
          <h3>Google Gemini AI Executive Analysis & Recommendations</h3>
          <div class="summary-text">${aiSprintSummary}</div>
        </div>

        <div class="footer">
          <div>Report Generated Automatically by Streamline AI Governance Engine</div>
          <div>Page 1 of 1 • Approved for Stakeholder Distribution</div>
        </div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newStatus = destination.droppableId as 'TODO' | 'IN_PROGRESS' | 'DONE';

    const taskIndex = tasks.findIndex((t) => t.id === draggableId);
    if (taskIndex === -1) return;

    const targetTask = tasks[taskIndex];

    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = { ...targetTask, status: newStatus };
    setTasks(updatedTasks);

    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/tasks/${draggableId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        toast.error(data.error?.message || 'Permission denied: Cannot update task status');
        fetchProjectAndTasks();
      } else {
        toast.success(`Task moved to ${newStatus.replace('_', ' ')}`);
      }
    } catch (err) {
      console.error(err);
      fetchProjectAndTasks();
    }
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    setCreatingTask(true);
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/projects/${projectId}/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
          priority,
          status,
          dueDate: dueDate || null,
          assigneeId: assigneeId || null,
        }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Task created successfully!');
        setIsCreateTaskOpen(false);
        setTitle('');
        setDescription('');
        setDueDate('');
        setAssigneeId('');
        setAiPrompt('');
        fetchProjectAndTasks();
      } else {
        toast.error(data.error?.message || 'Failed to create task');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error creating task');
    } finally {
      setCreatingTask(false);
    }
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment || !selectedTask) return;

    setPostingComment(true);
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/tasks/${selectedTask.id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: newComment }),
      });

      const data = await res.json();
      if (data.success) {
        setTaskComments([...taskComments, data.data]);
        setNewComment('');
        toast.success('Comment added');
      } else {
        toast.error(data.error?.message || 'Failed to add comment');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setPostingComment(false);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm('Are you sure you want to delete this task?')) return;
    const token = localStorage.getItem('accessToken');

    try {
      const res = await fetch(`/api/tasks/${taskId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Task deleted');
        setSelectedTask(null);
        fetchProjectAndTasks();
      } else {
        toast.error(data.error?.message || 'Failed to delete task');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTasks = tasks.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (t.description && t.description.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPriority = priorityFilter === 'ALL' || t.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-64" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-96 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 flex flex-col h-[calc(100vh-6rem)]">
      {/* Top Header & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <Link href="/dashboard/projects" className="hover:text-blue-600 dark:hover:text-white flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-800 dark:text-slate-200 font-semibold">{project?.name}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
            {project?.name}
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400">{project?.description || 'Project Workspace'}</p>
        </div>

        <div className="flex items-center gap-2">
          {/* AI Sprint Executive Summary Button */}
          <button
            onClick={() => router.push(`/dashboard/projects/${projectId}/sprint-report`)}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 text-xs font-bold transition-all cursor-pointer"
          >
            <Bot className="w-4 h-4 text-purple-500 animate-pulse" />
            <span>AI Sprint Report</span>
          </button>

          {project?.userWorkspaceRole === 'ADMIN' ? (
            <button
              onClick={() => setIsCreateTaskOpen(true)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all shrink-0 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>New Task</span>
            </button>
          ) : (
            <span className="text-[11px] px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-500" /> Member Execution View
            </span>
          )}
        </div>
      </div>

      {/* Filter, Search, and Multi-View Switcher Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shrink-0 shadow-xs">
        {/* Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks..."
            className="w-full pl-9 pr-3 py-1.5 rounded-xl text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Priority Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter className="w-4 h-4 text-slate-500 dark:text-slate-400 shrink-0" />
          <span className="text-xs text-slate-600 dark:text-slate-400 font-medium">Priority:</span>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="rounded-xl py-1.5 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
          >
            <option value="ALL">All Priorities</option>
            <option value="LOW">Low</option>
            <option value="MEDIUM">Medium</option>
            <option value="HIGH">High</option>
            <option value="URGENT">Urgent</option>
          </select>
        </div>

        {/* View Mode Toggles (Kanban, Table List, Calendar) */}
        <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-full md:w-auto justify-center">
          <button
            onClick={() => setViewMode('KANBAN')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'KANBAN'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" /> Kanban
          </button>

          <button
            onClick={() => setViewMode('TABLE')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'TABLE'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <List className="w-3.5 h-3.5" /> Table List
          </button>

          <button
            onClick={() => setViewMode('CALENDAR')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
              viewMode === 'CALENDAR'
                ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <CalendarDays className="w-3.5 h-3.5" /> Schedule
          </button>
        </div>
      </div>

      {/* VIEW 1: KANBAN BOARD VIEW */}
      {viewMode === 'KANBAN' && (
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 min-h-0 overflow-y-auto pr-1">
            {COLUMNS.map((column) => {
              const columnTasks = filteredTasks.filter((t) => t.status === column.id);

              return (
                <div
                  key={column.id}
                  className={`flex flex-col rounded-2xl border ${column.color} p-4 h-full min-h-[450px]`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${
                          column.id === 'TODO'
                            ? 'bg-slate-400'
                            : column.id === 'IN_PROGRESS'
                            ? 'bg-indigo-500 animate-pulse'
                            : 'bg-emerald-500'
                        }`}
                      />
                      {column.label}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                        column.id === 'IN_PROGRESS'
                          ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300'
                      }`}
                    >
                      {columnTasks.length}
                    </span>
                  </div>

                  <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`flex-1 space-y-3 p-1 rounded-xl transition-colors ${
                          snapshot.isDraggingOver ? 'bg-blue-500/10 border border-blue-500/20' : ''
                        }`}
                      >
                        {columnTasks.map((task, index) => {
                          const isOverdue =
                            task.dueDate &&
                            new Date(task.dueDate) < new Date() &&
                            task.status !== 'DONE';

                          const subTaskTotal = task.subTasks?.length || 0;
                          const subTaskDone = task.subTasks?.filter((s) => s.completed).length || 0;

                          return (
                            <Draggable key={task.id} draggableId={task.id} index={index}>
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  onClick={() => handleSelectTask(task)}
                                  className={`bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/60 cursor-grab active:cursor-grabbing transition-all space-y-3 shadow-xs ${
                                    snapshot.isDragging ? 'shadow-2xl ring-2 ring-blue-500 rotate-1' : ''
                                  } ${isOverdue ? 'border-red-400 dark:border-red-500/40 bg-red-50/50 dark:bg-red-950/10' : ''}`}
                                >
                                  <div className="flex items-start justify-between gap-2">
                                    <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-2">{task.title}</h4>
                                    <span
                                      className={`text-[9px] px-2 py-0.5 rounded font-extrabold shrink-0 uppercase ${
                                        task.priority === 'URGENT'
                                          ? 'bg-red-500/20 text-red-600 dark:text-red-400 border border-red-500/40'
                                          : task.priority === 'HIGH'
                                          ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-500/40'
                                          : task.priority === 'MEDIUM'
                                          ? 'bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-500/40'
                                          : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-300'
                                      }`}
                                    >
                                      {task.priority}
                                    </span>
                                  </div>

                                  {task.description && (
                                    <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2">{task.description}</p>
                                  )}

                                  {/* Sub-tasks Progress Bar */}
                                  {subTaskTotal > 0 && (
                                    <div className="space-y-1 pt-1">
                                      <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                                        <span className="flex items-center gap-1">
                                          <CheckSquare className="w-3 h-3 text-blue-500" /> Subtasks
                                        </span>
                                        <span>{subTaskDone}/{subTaskTotal}</span>
                                      </div>
                                      <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                        <div
                                          className="bg-blue-600 h-full rounded-full transition-all"
                                          style={{ width: `${(subTaskDone / subTaskTotal) * 100}%` }}
                                        />
                                      </div>
                                    </div>
                                  )}

                                  <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                                    <div className="flex items-center gap-2">
                                      {task.dueDate && (
                                        <span
                                          className={`flex items-center gap-1 font-medium ${
                                            isOverdue ? 'text-red-600 dark:text-red-400 font-bold' : 'text-slate-500 dark:text-slate-400'
                                          }`}
                                        >
                                          <Calendar className="w-3 h-3" />
                                          {new Date(task.dueDate).toLocaleDateString()}
                                        </span>
                                      )}
                                    </div>

                                    <div className="flex items-center gap-2">
                                      {task.commentCount > 0 && (
                                        <span className="flex items-center gap-0.5">
                                          <MessageSquare className="w-3 h-3 text-slate-400" />
                                          {task.commentCount}
                                        </span>
                                      )}

                                      {task.assignee ? (
                                        <div title={`Assigned to ${task.assignee.name}`}>
                                          {task.assignee.avatarUrl ? (
                                            <img
                                              src={task.assignee.avatarUrl}
                                              alt=""
                                              className="w-5 h-5 rounded-full object-cover"
                                            />
                                          ) : (
                                            <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white flex items-center justify-center text-[9px] font-bold">
                                              {task.assignee.name.charAt(0)}
                                            </div>
                                          )}
                                        </div>
                                      ) : (
                                        <span className="text-[10px] text-slate-400 italic">Unassigned</span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      )}

      {/* VIEW 2: STRUCTURED TABLE LIST VIEW */}
      {viewMode === 'TABLE' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-x-auto flex-1 min-h-0">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-4">Task Title</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Priority</th>
                <th className="py-3.5 px-4">Assignee</th>
                <th className="py-3.5 px-4">Due Date</th>
                <th className="py-3.5 px-4">Subtasks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
              {filteredTasks.map((task) => (
                <tr
                  key={task.id}
                  onClick={() => handleSelectTask(task)}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
                >
                  <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">{task.title}</td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase">
                      {task.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                      {task.priority}
                    </span>
                  </td>
                  <td className="py-3 px-4">{task.assignee?.name || 'Unassigned'}</td>
                  <td className="py-3 px-4">{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No Due Date'}</td>
                  <td className="py-3 px-4">{task.subTasks?.filter((s) => s.completed).length || 0} / {task.subTasks?.length || 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* VIEW 3: CALENDAR SCHEDULE VIEW */}
      {viewMode === 'CALENDAR' && (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex-1 min-h-0 overflow-y-auto space-y-4">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-blue-500" /> Upcoming Scheduled Task Deadlines
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTasks
              .filter((t) => t.dueDate)
              .map((t) => (
                <div
                  key={t.id}
                  onClick={() => handleSelectTask(t)}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40 hover:border-blue-500 cursor-pointer space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(t.dueDate!).toLocaleDateString()}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                      {t.status}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white line-clamp-1">{t.title}</h4>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Create Task Modal with AI Assistant ("✨ Generate with AI") */}
      {isCreateTaskOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-500" /> Create New Task
              </h3>
              <button onClick={() => setIsCreateTaskOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* AI Generator Bar */}
            <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-500/30 space-y-2">
              <label className="block text-[11px] font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-500 fill-purple-500" /> AI Task Assistant (Auto Breakdown)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="e.g. Implement OAuth login integration"
                  className="flex-1 rounded-xl py-1.5 px-3 text-xs border border-purple-300 dark:border-purple-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
                <button
                  type="button"
                  onClick={handleGenerateTaskWithAI}
                  disabled={aiGenerating}
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md"
                >
                  {aiGenerating ? 'AI Building...' : '✨ Generate'}
                </button>
              </div>
            </div>

            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Title *</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="Task title..."
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Description & Acceptance Criteria</label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 resize-none font-mono"
                  placeholder="Task details and acceptance criteria..."
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Priority</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                    className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                    <option value="URGENT">Urgent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value as any)}
                    className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="TODO">To Do</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Assignee</label>
                  <select
                    value={assigneeId}
                    onChange={(e) => setAssigneeId(e.target.value)}
                    className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Unassigned</option>
                    {project?.members.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.name} ({m.email})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Due Date</label>
                  <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateTaskOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creatingTask}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20"
                >
                  {creatingTask ? 'Creating...' : 'Create Task'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Task Details Drawer Modal with Subtask Checklists, Threaded Comments & Activity Timeline */}
      {selectedTask && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-end z-50">
          <div className="bg-white dark:bg-slate-900 w-full max-w-xl h-full border-l border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2.5 py-0.5 rounded font-extrabold bg-blue-500/20 text-blue-700 dark:text-blue-300 uppercase">
                    {selectedTask.status.replace('_', ' ')}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {selectedTask.priority} Priority
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDeleteTask(selectedTask.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg"
                    title="Delete Task"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => setSelectedTask(null)} className="text-slate-400 hover:text-slate-700 dark:hover:text-white">
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedTask.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed whitespace-pre-line font-mono">
                  {selectedTask.description || 'No detailed description.'}
                </p>
              </div>

              {/* Sub-tasks Checklist System */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <CheckSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Sub-tasks Checklist ({taskSubTasks.filter((s) => s.completed).length}/{taskSubTasks.length})
                  </h4>
                </div>

                <div className="space-y-2">
                  {taskSubTasks.map((sub) => (
                    <div key={sub.id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs">
                      <label className="flex items-center gap-2.5 cursor-pointer flex-1">
                        <input
                          type="checkbox"
                          checked={sub.completed}
                          onChange={() => handleToggleSubTask(sub.id, sub.completed)}
                          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                        />
                        <span className={`font-medium ${sub.completed ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>
                          {sub.title}
                        </span>
                      </label>
                      <button onClick={() => handleDeleteSubTask(sub.id)} className="text-slate-400 hover:text-red-500">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleAddSubTask} className="flex gap-2">
                  <input
                    type="text"
                    value={newSubTaskTitle}
                    onChange={(e) => setNewSubTaskTitle(e.target.value)}
                    placeholder="Add sub-task item..."
                    className="flex-1 rounded-xl py-1.5 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  <button type="submit" className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold">
                    Add
                  </button>
                </form>
              </div>

              {/* Threaded Comments Section */}
              <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-600 dark:text-blue-400" /> Threaded Comments ({taskComments.length})
                </h4>

                <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                  {taskComments.map((c) => (
                    <div key={c.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1">
                      <div className="flex items-center justify-between text-slate-500 dark:text-slate-400">
                        <span className="font-semibold text-slate-900 dark:text-white">{c.author.name}</span>
                        <span className="text-[10px]">{new Date(c.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <p className="text-slate-700 dark:text-slate-200">{c.content}</p>
                    </div>
                  ))}
                  {taskComments.length === 0 && (
                    <p className="text-xs text-slate-400 italic">No comments yet.</p>
                  )}
                </div>

                <form onSubmit={handleAddComment} className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  />
                  <button
                    type="submit"
                    disabled={postingComment}
                    className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Activity Log History Timeline */}
              <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <History className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Activity History Timeline
                </h4>

                <div className="space-y-2 text-xs">
                  {taskActivities.map((act) => (
                    <div key={act.id} className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <div>
                        <span className="font-semibold text-slate-900 dark:text-slate-200">{act.user.name}</span>{' '}
                        <span className="lowercase">{act.action.replace('_', ' ')}</span>{' '}
                        {act.newState && (
                          <strong className="text-blue-600 dark:text-blue-300">({act.previousState || ''} → {act.newState})</strong>
                        )}
                        <p className="text-[10px] text-slate-400 dark:text-slate-500">{new Date(act.createdAt).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
