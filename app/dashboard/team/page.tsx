'use client';

import { useState, useEffect } from 'react';
import { Users, Shield, Plus, Trash2, Mail, CheckCircle2, UserCheck, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface MemberItem {
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
  userRole: 'ADMIN' | 'MEMBER';
  owner: { id: string; name: string; email: string };
  members: MemberItem[];
}

export default function TeamPage() {
  const [workspace, setWorkspace] = useState<WorkspaceInfo | null>(null);
  const [loading, setLoading] = useState(true);

  // Invite Modal State
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'ADMIN' | 'MEMBER'>('MEMBER');
  const [inviting, setInviting] = useState(false);

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    const token = localStorage.getItem('accessToken');
    const storedWs = localStorage.getItem('currentWorkspace');
    if (!storedWs || !token) return;

    const ws = JSON.parse(storedWs);

    try {
      const res = await fetch(`/api/workspaces/${ws.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setWorkspace(data.data);
      } else {
        toast.error(data.error?.message || 'Failed to load team members');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
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
            console.warn(e);
          }
        }
        setIsInviteModalOpen(false);
        setInviteEmail('');
        fetchTeamMembers();
      } else {
        toast.error(data.error?.message || 'Failed to add member');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to invite member');
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
        fetchTeamMembers();
      } else {
        toast.error(data.error?.message || 'Failed to remove member');
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div className="p-8 text-slate-500 dark:text-slate-400 text-xs animate-pulse">Loading team roster...</div>;
  }

  const isAdmin = workspace?.userRole === 'ADMIN';

  return (
    <div className="max-w-5xl space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2.5">
            <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" /> Team & Workspace Members
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Manage workspace roles, permissions, and team member accounts for {workspace?.name}
          </p>
        </div>

        {isAdmin ? (
          <button
            onClick={() => setIsInviteModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/20 transition-all cursor-pointer shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Invite Team Member</span>
          </button>
        ) : (
          <span className="text-[11px] px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-blue-500" /> Member Directory (Read-Only)
          </span>
        )}
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workspace?.members.map((m: any) => {
          const memberName = m.user?.name || m.name || 'Member';
          const memberEmail = m.user?.email || m.email || '';
          const memberAvatar = m.user?.avatarUrl || m.avatarUrl;
          const isOwner = workspace.owner.id === (m.userId || m.user?.id);

          return (
            <div
              key={m.id}
              className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5 truncate">
                {memberAvatar ? (
                  <img src={memberAvatar} alt={memberName} className="w-10 h-10 rounded-full object-cover shrink-0 border border-slate-300 dark:border-slate-700" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-md">
                    {memberName.charAt(0)}
                  </div>
                )}

                <div className="truncate">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{memberName}</p>
                    {isOwner && (
                      <span className="text-[9px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-700 dark:text-amber-300 font-extrabold uppercase">
                        Owner
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">{memberEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span
                  className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase ${
                    m.role === 'ADMIN'
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  {m.role}
                </span>

                {isAdmin && !isOwner && (
                  <button
                    onClick={() => handleRemoveMember(m.userId || m.user?.id)}
                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-colors"
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

      {/* Add Member Modal */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-500" /> Invite Team Member
              </h3>
              <button onClick={() => setIsInviteModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleInviteMember} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                  placeholder="teammate@company.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Role</label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value as any)}
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500"
                >
                  <option value="MEMBER">Member (Task execution mode)</option>
                  <option value="ADMIN">Admin (Full project & member management)</option>
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
                  {inviting ? 'Inviting...' : 'Invite Member'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
