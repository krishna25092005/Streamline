'use client';

import { useState } from 'react';
import { Bell, CheckCircle2, Clock, AlertTriangle, MessageSquare, CheckCheck, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface FullNotificationItem {
  id: string;
  type: 'TASK_ASSIGNED' | 'SLA_WARNING' | 'COMMENT' | 'SYSTEM';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const INITIAL_NOTIFICATIONS: FullNotificationItem[] = [
  {
    id: 'n1',
    type: 'TASK_ASSIGNED',
    title: 'New Task Assigned',
    message: 'You have been assigned to "Implement Payment Gateway Integration".',
    timestamp: '10 mins ago',
    read: false,
  },
  {
    id: 'n2',
    type: 'SLA_WARNING',
    title: 'SLA Warning: Approaching Deadline',
    message: 'Task "Fix OAuth Session Refresh Bug" is approaching SLA deadline within 24 hours.',
    timestamp: '1 hour ago',
    read: false,
  },
  {
    id: 'n3',
    type: 'COMMENT',
    title: 'New Comment on Task',
    message: 'Jane Doe commented on your task checklist item "Configure Webhook Handlers".',
    timestamp: '3 hours ago',
    read: true,
  },
  {
    id: 'n4',
    type: 'SYSTEM',
    title: 'Razorpay Payment Gateway Active',
    message: 'Razorpay Integration successfully initialized for workspace subscription upgrades.',
    timestamp: 'Yesterday',
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<FullNotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [activeTab, setActiveTab] = useState<'ALL' | 'UNREAD' | 'TASKS' | 'ALERTS'>('ALL');

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    toast.success('All notifications marked as read!');
  };

  const clearNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  const filtered = notifications.filter((n) => {
    if (activeTab === 'UNREAD') return !n.read;
    if (activeTab === 'TASKS') return n.type === 'TASK_ASSIGNED';
    if (activeTab === 'ALERTS') return n.type === 'SLA_WARNING';
    return true;
  });

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="max-w-4xl space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400" /> Notifications Inbox
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Stay updated on task reassignments, SLA warnings, and team comments
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 text-xs font-bold transition-all shrink-0 cursor-pointer"
          >
            <CheckCheck className="w-4 h-4" />
            <span>Mark all as read</span>
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl w-full sm:w-auto">
        <button
          onClick={() => setActiveTab('ALL')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'ALL'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          All ({notifications.length})
        </button>

        <button
          onClick={() => setActiveTab('UNREAD')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'UNREAD'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          Unread ({unreadCount})
        </button>

        <button
          onClick={() => setActiveTab('TASKS')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'TASKS'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          Tasks
        </button>

        <button
          onClick={() => setActiveTab('ALERTS')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'ALERTS'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          SLA Alerts
        </button>
      </div>

      {/* Notifications List */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800/80 overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-12 text-center text-xs text-slate-400">
            No notifications in this category.
          </div>
        ) : (
          filtered.map((item) => (
            <div
              key={item.id}
              className={`p-5 flex items-start justify-between gap-4 transition-colors ${
                item.read ? 'bg-transparent' : 'bg-blue-50/50 dark:bg-blue-950/20'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0 mt-0.5">
                  {item.type === 'TASK_ASSIGNED' && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                  {item.type === 'SLA_WARNING' && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                  {item.type === 'COMMENT' && <MessageSquare className="w-5 h-5 text-blue-500" />}
                  {item.type === 'SYSTEM' && <Clock className="w-5 h-5 text-purple-500" />}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    {!item.read && (
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                    {item.message}
                  </p>
                  <span className="text-[10px] text-slate-400 block pt-1">{item.timestamp}</span>
                </div>
              </div>

              <button
                onClick={() => clearNotification(item.id)}
                className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                title="Dismiss"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
