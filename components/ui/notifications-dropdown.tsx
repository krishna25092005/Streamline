'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, CheckCircle2, Clock, AlertTriangle, MessageSquare, ArrowRight } from 'lucide-react';

interface NotificationItem {
  id: string;
  type: 'TASK_ASSIGNED' | 'SLA_WARNING' | 'COMMENT' | 'SYSTEM';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

const INITIAL_NOTIFICATIONS: NotificationItem[] = [
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
    title: 'SLA Warning: Past Due',
    message: 'Task "Fix OAuth Session Refresh Bug" is approaching SLA deadline.',
    timestamp: '1 hour ago',
    read: false,
  },
  {
    id: 'n3',
    type: 'COMMENT',
    title: 'New Task Comment',
    message: 'Jane Doe commented on your task checklist.',
    timestamp: '3 hours ago',
    read: true,
  },
];

export default function NotificationsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        title="Notifications"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-red-500 text-white text-[9px] font-extrabold flex items-center justify-center animate-pulse">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-blue-500" />
              <h4 className="text-xs font-bold text-slate-900 dark:text-white">Notifications</h4>
              {unreadCount > 0 && (
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold">
                  {unreadCount} new
                </span>
              )}
            </div>
            {unreadCount > 0 && (
              <button
                onClick={markAllRead}
                className="text-[10px] text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Mark all as read
              </button>
            )}
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800/60 max-h-72 overflow-y-auto">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`p-3.5 flex items-start gap-3 transition-colors ${
                  item.read ? 'bg-transparent' : 'bg-blue-50/50 dark:bg-blue-950/20'
                }`}
              >
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 shrink-0 mt-0.5">
                  {item.type === 'TASK_ASSIGNED' && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                  {item.type === 'SLA_WARNING' && <AlertTriangle className="w-4 h-4 text-amber-500" />}
                  {item.type === 'COMMENT' && <MessageSquare className="w-4 h-4 text-blue-500" />}
                  {item.type === 'SYSTEM' && <Clock className="w-4 h-4 text-purple-500" />}
                </div>

                <div className="flex-1 space-y-0.5">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</p>
                    <span className="text-[9px] text-slate-400">{item.timestamp}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 text-center">
            <Link
              href="/dashboard/notifications"
              onClick={() => setIsOpen(false)}
              className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center justify-center gap-1.5"
            >
              <span>View all notifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
