'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, FolderKanban, CheckSquare, Users, X, ArrowRight } from 'lucide-react';

interface CommandItem {
  id: string;
  type: 'project' | 'task' | 'member';
  title: string;
  subtitle: string;
  url: string;
}

export default function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [items, setItems] = useState<CommandItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open palette
          window.dispatchEvent(new CustomEvent('open-command-palette'));
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      fetchSearchData();
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const fetchSearchData = async () => {
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs || !token) return;

    const ws = JSON.parse(storedWs);
    setLoading(true);

    try {
      // 1. Fetch Workspace Projects
      const projRes = await fetch(`/api/workspaces/${ws.id}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const projData = await projRes.json();

      // 2. Fetch Workspace Members
      const memRes = await fetch(`/api/workspaces/${ws.id}/members`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const memData = await memRes.json();

      const searchItems: CommandItem[] = [];

      if (projData.success) {
        projData.data.forEach((p: any) => {
          searchItems.push({
            id: `proj-${p.id}`,
            type: 'project',
            title: p.name,
            subtitle: `Project • ${p.taskCount || 0} Tasks`,
            url: `/dashboard/projects/${p.id}`,
          });
        });
      }

      if (memData.success) {
        memData.data.forEach((m: any) => {
          searchItems.push({
            id: `mem-${m.id}`,
            type: 'member',
            title: m.name,
            subtitle: `Team Member • ${m.email} (${m.role})`,
            url: `/dashboard/team`,
          });
        });
      }

      setItems(searchItems);
    } catch (err) {
      console.error('Command Palette Search Error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (url: string) => {
    onClose();
    router.push(url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter' && filteredItems[selectedIndex]) {
      e.preventDefault();
      handleSelect(filteredItems[selectedIndex].url);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-slate-900 w-full max-w-xl rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col transition-all animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Header */}
        <div className="relative border-b border-slate-200 dark:border-slate-800 p-4 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type to search projects, tasks, or team members... (Esc to exit)"
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100 dark:divide-slate-800/50">
          {loading ? (
            <div className="p-6 text-center text-xs text-slate-400">Loading search index...</div>
          ) : filteredItems.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-400">No matching projects or members found.</div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item.url)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                      : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {item.type === 'project' && <FolderKanban className="w-4 h-4 text-blue-500" />}
                      {item.type === 'task' && <CheckSquare className="w-4 h-4 text-emerald-500" />}
                      {item.type === 'member' && <Users className="w-4 h-4 text-purple-500" />}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">{item.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="bg-slate-50 dark:bg-slate-950/60 px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">↑↓</kbd> Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">↵</kbd> Select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono">esc</kbd> Close
            </span>
          </div>
          <span className="font-semibold text-blue-600 dark:text-blue-400">Streamline ⌘K</span>
        </div>
      </div>
    </div>
  );
}
