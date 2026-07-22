'use client';

import { useState, useEffect } from 'react';
import { Building2, Users, Shield, Zap, Mail, Trash2, CheckCircle2, AlertTriangle, Plus, X } from 'lucide-react';
import toast from 'react-hot-toast';
import { processRazorpayCheckout } from '@/lib/razorpay-client';

interface Member {
  id: string;
  userId: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: 'ADMIN' | 'MEMBER';
  joinedAt: string;
}

interface WorkspaceInfo {
  id: string;
  name: string;
  slug: string;
  plan: 'FREE' | 'PRO' | 'ENTERPRISE';
  userRole: 'ADMIN' | 'MEMBER';
  owner: { id: string; name: string; email: string };
  members: Member[];
  projects: any[];
}

export default function WorkspaceSettingsPage() {
  const [workspace, setWorkspace] = useState<WorkspaceInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [wsName, setWsName] = useState('');
  const [updatingName, setUpdatingName] = useState(false);

  // Add Member Modal State
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'ADMIN' | 'MEMBER'>('MEMBER');
  const [inviting, setInviting] = useState(false);

  useEffect(() => {
    fetchWorkspaceSettings();
  }, []);

  const fetchWorkspaceSettings = async () => {
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs) return;

    const ws = JSON.parse(storedWs);

    try {
      const res = await fetch(`/api/workspaces/${ws.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setWorkspace(data.data);
        setWsName(data.data.name);
      } else {
        toast.error(data.error?.message || 'Failed to load settings');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateName = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!wsName || !workspace) return;

    setUpdatingName(true);
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/workspaces/${workspace.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: wsName }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Workspace name updated!');
        fetchWorkspaceSettings();
      } else {
        toast.error(data.error?.message || 'Failed to update name');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingName(false);
    }
  };

  const handleUpgradePlan = (newPlan: 'PRO' | 'ENTERPRISE') => {
    if (!workspace) return;
    processRazorpayCheckout({
      plan: newPlan,
      workspaceId: workspace.id,
      userEmail: workspace.owner?.email,
      userName: workspace.owner?.name,
      onSuccess: () => {
        fetchWorkspaceSettings();
      },
    });
  };

  const handleInviteMember = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteEmail || !workspace) return;

    setInviting(true);
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch(`/api/workspaces/${workspace.id}/members`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email: inviteEmail, role: inviteRole }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(`Member ${inviteEmail} added to workspace!`);
        if (data.data?.inviteLink) {
          try {
            await navigator.clipboard.writeText(data.data.inviteLink);
            toast.success('📋 Shareable invite link copied to clipboard!', { duration: 6000 });
          } catch (e) {
            console.warn('Clipboard write error:', e);
          }
        }
        setIsInviteModalOpen(false);
        setInviteEmail('');
        fetchWorkspaceSettings();
      } else {
        toast.error(data.error?.message || 'Failed to add member');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setInviting(false);
    }
  };

  const handleRemoveMember = async (userId: string) => {
    if (!workspace || !confirm('Remove member from workspace?')) return;
    const token = localStorage.getItem('accessToken');

    try {
      const res = await fetch(`/api/workspaces/${workspace.id}/members?userId=${userId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Member removed');
        fetchWorkspaceSettings();
      } else {
        toast.error(data.error?.message || 'Failed to remove member');
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div className="p-8 text-slate-500 dark:text-slate-400 text-xs">Loading settings...</div>;
  }

  const isAdmin = workspace?.userRole === 'ADMIN';
  const projectCount = workspace?.projects.length || 0;
  const maxProjects = workspace?.plan === 'FREE' ? 3 : workspace?.plan === 'PRO' ? 15 : 999;

  return (
    <div className="max-w-4xl space-y-8 pb-12">
      <div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Workspace Settings</h2>
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Manage team members, roles, subscription plan, and general options</p>
      </div>

      {/* General Settings Section */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" /> General Configuration
        </h3>

        <form onSubmit={handleUpdateName} className="space-y-4 max-w-md">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Workspace Name</label>
            <input
              type="text"
              disabled={!isAdmin}
              value={wsName}
              onChange={(e) => setWsName(e.target.value)}
              className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
            />
          </div>

          {isAdmin && (
            <button
              type="submit"
              disabled={updatingName}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20"
            >
              {updatingName ? 'Saving...' : 'Save Workspace Name'}
            </button>
          )}
        </form>
      </div>

      {/* Subscription Plan & Limits Section */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" /> Subscription Plan & Project Limits
          </h3>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/40 uppercase font-extrabold">
            Active: {workspace?.plan} PLAN
          </span>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
          <div className="flex justify-between text-xs text-slate-700 dark:text-slate-300 font-medium">
            <span>Project Usage ({workspace?.plan} Plan)</span>
            <span>
              {projectCount} / {maxProjects === 999 ? 'Unlimited' : `${maxProjects} Projects`}
            </span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className={`h-full ${projectCount >= maxProjects ? 'bg-red-500' : 'bg-blue-600'}`}
              style={{ width: `${Math.min((projectCount / maxProjects) * 100, 100)}%` }}
            />
          </div>
          {workspace?.plan === 'FREE' && (
            <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
              Free Plan is limited to max 3 projects. Upgrade to PRO to create up to 15 projects!
            </p>
          )}
        </div>

        {isAdmin && workspace?.plan === 'FREE' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/40 dark:to-slate-900 border border-blue-200 dark:border-blue-500/30 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">PRO Plan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">$15 / month • 15 Projects + Advanced Analytics</p>
              </div>
              <button
                onClick={() => handleUpgradePlan('PRO')}
                className="mt-4 w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20"
              >
                Upgrade to PRO
              </button>
            </div>

            <div className="p-4 rounded-xl bg-gradient-to-b from-purple-50 to-white dark:from-purple-950/40 dark:to-slate-900 border border-purple-200 dark:border-purple-500/30 flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Enterprise Plan</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">$49 / month • Unlimited Projects + Priority 24/7 SLA</p>
              </div>
              <button
                onClick={() => handleUpgradePlan('ENTERPRISE')}
                className="mt-4 w-full py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-500/20"
              >
                Upgrade to Enterprise
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Workspace Members Section */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" /> Team Members ({workspace?.members.length})
          </h3>
          {isAdmin && (
            <button
              onClick={() => setIsInviteModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-500/20"
            >
              <Plus className="w-4 h-4" /> Add Member
            </button>
          )}
        </div>

        <div className="divide-y divide-slate-200 dark:divide-slate-800">
          {workspace?.members.map((m: any) => {
            const memberName = m.user?.name || m.name || 'Member';
            const memberEmail = m.user?.email || m.email || '';
            const memberAvatar = m.user?.avatarUrl || m.avatarUrl;
            return (
              <div key={m.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {memberAvatar ? (
                    <img src={memberAvatar} alt="" className="w-8 h-8 rounded-full object-cover" />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white flex items-center justify-center font-bold text-xs">
                      {memberName.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-semibold text-slate-900 dark:text-white">{memberName}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{memberEmail}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`text-[10px] px-2.5 py-0.5 rounded font-semibold ${
                      m.role === 'ADMIN' ? 'bg-blue-500/20 text-blue-600 dark:text-blue-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {m.role}
                  </span>

                  {isAdmin && workspace.owner.id !== m.userId && (
                    <button
                      onClick={() => handleRemoveMember(m.userId)}
                      className="p-1 text-slate-400 hover:text-red-500"
                      title="Remove member"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add Member Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Add Workspace Member</h3>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleInviteMember} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="colleague@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Role</label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value as any)}
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="MEMBER">Member (Standard access)</option>
                  <option value="ADMIN">Admin (Full CRUD & Member management)</option>
                </select>
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsInviteModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={inviting}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20"
                >
                  {inviting ? 'Adding...' : 'Add Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
