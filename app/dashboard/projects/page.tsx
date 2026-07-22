'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FolderKanban, Plus, Users, Calendar, ArrowRight, Building2, AlertCircle, Star } from 'lucide-react';
import toast from 'react-hot-toast';

interface Project {
  id: string;
  name: string;
  description: string;
  createdBy: { id: string; name: string; avatarUrl?: string };
  members: { id: string; name: string; email: string; avatarUrl?: string }[];
  taskCount: number;
  createdAt: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [creating, setCreating] = useState(false);
  const [userRole, setUserRole] = useState<'ADMIN' | 'MEMBER'>('MEMBER');
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);

  useEffect(() => {
    fetchProjects();
    const storedPins = localStorage.getItem('pinnedProjects');
    if (storedPins) {
      try {
        const pins = JSON.parse(storedPins);
        setPinnedIds(pins.map((p: any) => p.id));
      } catch (e) {
        console.warn(e);
      }
    }
  }, []);

  const togglePinProject = (e: React.MouseEvent, p: { id: string; name: string }) => {
    e.preventDefault();
    e.stopPropagation();
    const storedPins = localStorage.getItem('pinnedProjects');
    let pins: { id: string; name: string }[] = storedPins ? JSON.parse(storedPins) : [];

    const isPinned = pins.some((item) => item.id === p.id);
    if (isPinned) {
      pins = pins.filter((item) => item.id !== p.id);
      toast.success(`Unpinned "${p.name}" from sidebar`);
    } else {
      pins.push({ id: p.id, name: p.name });
      toast.success(`Pinned "${p.name}" to sidebar!`);
    }

    localStorage.setItem('pinnedProjects', JSON.stringify(pins));
    setPinnedIds(pins.map((item) => item.id));
    window.location.reload();
  };

  const fetchProjects = async () => {
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs) return;

    const ws = JSON.parse(storedWs);
    setUserRole(ws.role);

    try {
      const res = await fetch(`/api/workspaces/${ws.id}/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setProjects(data.data);
      } else {
        toast.error(data.error?.message || 'Failed to fetch projects');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;

    setCreating(true);
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs) return;

    const ws = JSON.parse(storedWs);

    try {
      const res = await fetch(`/api/workspaces/${ws.id}/projects`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, description }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(`Project "${name}" created!`);
        setIsModalOpen(false);
        setName('');
        setDescription('');
        fetchProjects();
      } else {
        toast.error(data.error?.message || 'Failed to create project');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error creating project');
    } finally {
      setCreating(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-8 bg-slate-200 dark:bg-slate-800 rounded-xl w-48" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Workspace Projects</h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Select a project to access its interactive Kanban board</p>
        </div>

        {userRole === 'ADMIN' ? (
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Project</span>
          </button>
        ) : (
          <div className="text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 px-3 py-1.5 rounded-xl flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4" />
            <span>Only Workspace Admins can create projects</span>
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/dashboard/projects/${project.id}`}
            className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 hover:shadow-xl shadow-xs transition-all flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <FolderKanban className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => togglePinProject(e, project)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-amber-500/10 transition-colors"
                    title={pinnedIds.includes(project.id) ? 'Unpin project' : 'Pin to sidebar'}
                  >
                    <Star
                      className={`w-4 h-4 ${
                        pinnedIds.includes(project.id) ? 'text-amber-500 fill-amber-500' : ''
                      }`}
                    />
                  </button>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {project.taskCount} Tasks
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1">
                  {project.description || 'No description provided.'}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              {/* Member avatars */}
              <div className="flex -space-x-2 overflow-hidden">
                {project.members.slice(0, 4).map((m: any) => {
                  const mName = m.user?.name || m.name || 'Member';
                  const mAvatar = m.user?.avatarUrl || m.avatarUrl;
                  return (
                    <div key={m.id} title={mName}>
                      {mAvatar ? (
                        <img src={mAvatar} alt={mName} className="w-7 h-7 rounded-full object-cover border-2 border-white dark:border-slate-900" />
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-slate-900">
                          {mName.charAt(0)}
                        </div>
                      )}
                    </div>
                  );
                })}
                {project.members.length > 4 && (
                  <div className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-slate-900">
                    +{project.members.length - 4}
                  </div>
                )}
              </div>

              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Kanban <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Create Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Create New Project</h3>
            <form onSubmit={handleCreateProject} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Project Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl py-2.5 px-3.5 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g. Mobile App Redesign"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-xl py-2.5 px-3.5 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="What is the goal of this project?"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20"
                >
                  {creating ? 'Creating...' : 'Create Project'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
