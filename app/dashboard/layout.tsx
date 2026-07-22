'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Layers,
  LayoutDashboard,
  FolderKanban,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Plus,
  Shield,
  Menu,
  X,
  Building2,
  BarChart3,
  Search,
  CheckSquare,
  Users,
  CreditCard,
  Star,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from 'lucide-react';
import toast from 'react-hot-toast';
import ThemeToggle from '@/components/landing/ThemeToggle';
import FloatingAiChatbot from '@/components/ai/floating-ai-chatbot';
import CommandPalette from '@/components/ui/command-palette';
import NotificationsDropdown from '@/components/ui/notifications-dropdown';
import HelpFeedbackModal from '@/components/ui/help-feedback-modal';

interface WorkspaceItem {
  id: string;
  name: string;
  slug: string;
  plan: string;
  role: string;
}

interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

interface PinnedProject {
  id: string;
  name: string;
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<UserProfile | null>(null);
  const [workspaces, setWorkspaces] = useState<WorkspaceItem[]>([]);
  const [currentWorkspace, setCurrentWorkspace] = useState<WorkspaceItem | null>(null);
  const [isWorkspaceDropdownOpen, setIsWorkspaceDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCreateWsModalOpen, setIsCreateWsModalOpen] = useState(false);
  const [newWsName, setNewWsName] = useState('');
  const [newWsSlug, setNewWsSlug] = useState('');
  const [creatingWs, setCreatingWs] = useState(false);

  // New Sidebar Feature States
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isCmdPaletteOpen, setIsCmdPaletteOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [pinnedProjects, setPinnedProjects] = useState<PinnedProject[]>([]);

  useEffect(() => {
    fetchUserDataAndWorkspaces();

    // Read stored sidebar collapsed state
    const storedCollapsed = localStorage.getItem('sidebarCollapsed');
    if (storedCollapsed) {
      setIsCollapsed(storedCollapsed === 'true');
    }

    // Read pinned projects
    const storedPins = localStorage.getItem('pinnedProjects');
    if (storedPins) {
      try {
        setPinnedProjects(JSON.parse(storedPins));
      } catch (e) {
        console.warn(e);
      }
    }

    // Command palette custom event listener
    const handleOpenCmd = () => setIsCmdPaletteOpen(true);
    window.addEventListener('open-command-palette', handleOpenCmd);
    return () => window.removeEventListener('open-command-palette', handleOpenCmd);
  }, []);

  const toggleSidebarCollapse = () => {
    const nextState = !isCollapsed;
    setIsCollapsed(nextState);
    localStorage.setItem('sidebarCollapsed', String(nextState));
  };

  const fetchUserDataAndWorkspaces = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const res = await fetch('/api/workspaces', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
        return;
      }

      setWorkspaces(data.data);

      const storedWs = localStorage.getItem('currentWorkspace');
      let active: WorkspaceItem | null = null;

      if (storedWs) {
        const parsed = JSON.parse(storedWs);
        active = data.data.find((w: WorkspaceItem) => w.id === parsed.id) || data.data[0];
      } else if (data.data.length > 0) {
        active = data.data[0];
      }

      if (active) {
        setCurrentWorkspace(active);
        localStorage.setItem('currentWorkspace', JSON.stringify(active));
      }

      const profileRes = await fetch('/api/users/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const profileData = await profileRes.json();
      if (profileData.success) {
        setUser(profileData.data);
        localStorage.setItem('user', JSON.stringify(profileData.data));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSwitchWorkspace = (ws: WorkspaceItem) => {
    setCurrentWorkspace(ws);
    localStorage.setItem('currentWorkspace', JSON.stringify(ws));
    setIsWorkspaceDropdownOpen(false);
    toast.success(`Switched to workspace "${ws.name}"`);
    window.location.reload();
  };

  const handleCreateWorkspace = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWsName || !newWsSlug) return;

    setCreatingWs(true);
    const token = localStorage.getItem('accessToken');
    try {
      const res = await fetch('/api/workspaces', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newWsName, slug: newWsSlug }),
      });

      const data = await res.json();
      if (data.success) {
        toast.success(`Workspace "${newWsName}" created!`);
        setIsCreateWsModalOpen(false);
        setNewWsName('');
        setNewWsSlug('');
        fetchUserDataAndWorkspaces();
      } else {
        toast.error(data.error?.message || 'Failed to create workspace');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to create workspace');
    } finally {
      setCreatingWs(false);
    }
  };

  const handleLogout = async () => {
    const token = localStorage.getItem('accessToken');
    await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    }).catch(() => {});

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    localStorage.removeItem('currentWorkspace');

    toast.success('Logged out successfully');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col md:flex-row transition-colors duration-300">
      {/* Mobile Top Nav Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 z-30">
        <Link href="/" className="flex items-center gap-2">
          <img src="/Strreamline_Logo.png" alt="Streamline Logo" className="h-8 w-auto object-contain" />
        </Link>
        <div className="flex items-center gap-2">
          <NotificationsDropdown />
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Sidebar navigation */}
      <aside
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:block ${
          isCollapsed ? 'md:w-20' : 'md:w-64'
        } bg-white dark:bg-slate-900/90 border-r border-slate-200 dark:border-slate-800/80 flex flex-col justify-between z-20 shrink-0 transition-all duration-300 relative`}
      >
        <div className="p-4 space-y-5">
          {/* Logo Brand Header & Collapse Switch */}
          <div className="hidden md:flex items-center justify-between px-1 py-1">
            {!isCollapsed && (
              <Link href="/">
                <img src="/Strreamline_Logo.png" alt="Streamline Logo" className="h-12 md:h-14 max-w-[170px] w-auto object-contain transition-transform hover:scale-105" />
              </Link>
            )}
            <button
              onClick={toggleSidebarCollapse}
              className={`p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors ${
                isCollapsed ? 'mx-auto' : ''
              }`}
              title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
          </div>

          {/* 1. Global Search / Command Palette Button */}
          <button
            onClick={() => setIsCmdPaletteOpen(true)}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center p-2.5' : 'justify-between px-3 py-2'
            } rounded-xl bg-slate-100/80 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:border-blue-500/50 transition-all`}
            title="Global Search (⌘K)"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-blue-500 shrink-0" />
              {!isCollapsed && <span className="text-xs">Search...</span>}
            </div>
            {!isCollapsed && (
              <kbd className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono font-bold">
                ⌘K
              </kbd>
            )}
          </button>

          {/* Multi-Tenant Workspace Selector */}
          <div className="relative">
            {!isCollapsed && (
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1 px-1">
                Active Workspace
              </label>
            )}
            <button
              onClick={() => setIsWorkspaceDropdownOpen(!isWorkspaceDropdownOpen)}
              className={`w-full flex items-center ${
                isCollapsed ? 'justify-center p-2.5' : 'justify-between p-2.5'
              } rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-left hover:border-blue-500/50 transition-all`}
              title={currentWorkspace?.name}
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className="w-7 h-7 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 font-bold text-xs">
                  {currentWorkspace?.name.charAt(0) || 'W'}
                </div>
                {!isCollapsed && (
                  <div className="truncate">
                    <p className="text-xs font-semibold text-slate-900 dark:text-white truncate">
                      {currentWorkspace?.name || 'Loading...'}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 capitalize">
                      {currentWorkspace?.role || 'Member'} • {currentWorkspace?.plan || 'Free'}
                    </p>
                  </div>
                )}
              </div>
              {!isCollapsed && <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
            </button>

            {/* Workspace dropdown menu */}
            {isWorkspaceDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl p-2 z-50 space-y-1">
                <p className="text-[10px] font-semibold text-slate-400 px-2 py-1 uppercase">Switch Tenant</p>
                {workspaces.map((ws) => (
                  <button
                    key={ws.id}
                    onClick={() => handleSwitchWorkspace(ws)}
                    className={`w-full flex items-center justify-between p-2 rounded-lg text-xs text-left transition-colors ${
                      ws.id === currentWorkspace?.id
                        ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="truncate">
                      <p className="truncate font-medium">{ws.name}</p>
                      <span className="text-[10px] text-slate-400 capitalize">{ws.plan} Plan</span>
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => {
                    setIsWorkspaceDropdownOpen(false);
                    setIsCreateWsModalOpen(true);
                  }}
                  className="w-full flex items-center justify-center gap-1.5 p-2 mt-1 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 text-xs text-blue-600 dark:text-blue-400 hover:bg-blue-500/10 transition-colors font-medium"
                >
                  <Plus className="w-3.5 h-3.5" /> Create Workspace
                </button>
              </div>
            )}
          </div>

          {/* 6. Favorites / Pinned Projects Section */}
          {pinnedProjects.length > 0 && !isCollapsed && (
            <div className="space-y-1.5 pt-1">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1 flex items-center gap-1">
                <Star className="w-3 h-3 text-amber-500 fill-amber-500" /> Pinned Projects
              </label>
              <div className="space-y-1">
                {pinnedProjects.map((p) => (
                  <Link
                    key={p.id}
                    href={`/dashboard/projects/${p.id}`}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 truncate"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="truncate">{p.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="space-y-1">
            <Link
              href="/dashboard"
              title="Workspace Dashboard"
              className={`flex items-center ${
                isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2.5'
              } rounded-xl text-xs font-semibold transition-all ${
                pathname === '/dashboard'
                  ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 shrink-0" />
              {!isCollapsed && <span>Dashboard</span>}
            </Link>

            {/* 3. My Tasks */}
            <Link
              href="/dashboard/my-tasks"
              title="My Tasks"
              className={`flex items-center ${
                isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2.5'
              } rounded-xl text-xs font-semibold transition-all ${
                pathname === '/dashboard/my-tasks'
                  ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <CheckSquare className="w-4 h-4 shrink-0" />
              {!isCollapsed && <span>My Tasks</span>}
            </Link>

            <Link
              href="/dashboard/projects"
              title="Projects & Kanban"
              className={`flex items-center ${
                isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2.5'
              } rounded-xl text-xs font-semibold transition-all ${
                pathname.startsWith('/dashboard/projects')
                  ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <FolderKanban className="w-4 h-4 shrink-0" />
              {!isCollapsed && <span>Projects & Kanban</span>}
            </Link>

            {/* 4. Team / Members */}
            <Link
              href="/dashboard/team"
              title="Team Directory"
              className={`flex items-center ${
                isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2.5'
              } rounded-xl text-xs font-semibold transition-all ${
                pathname === '/dashboard/team'
                  ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <Users className="w-4 h-4 shrink-0" />
              {!isCollapsed && <span>Team Directory</span>}
            </Link>

            <Link
              href="/dashboard/analytics"
              title="Analytics & Metrics"
              className={`flex items-center ${
                isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2.5'
              } rounded-xl text-xs font-semibold transition-all ${
                pathname === '/dashboard/analytics'
                  ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <BarChart3 className="w-4 h-4 shrink-0" />
              {!isCollapsed && <span>Analytics</span>}
            </Link>

            {/* 5. Billing & Plan */}
            <Link
              href="/dashboard/billing"
              title="Billing & Subscription"
              className={`flex items-center ${
                isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2.5'
              } rounded-xl text-xs font-semibold transition-all ${
                pathname === '/dashboard/billing'
                  ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <CreditCard className="w-4 h-4 shrink-0" />
              {!isCollapsed && <span>Billing & Plan</span>}
            </Link>

            <Link
              href="/dashboard/settings"
              title="Workspace Settings"
              className={`flex items-center ${
                isCollapsed ? 'justify-center p-2.5' : 'gap-3 px-3 py-2.5'
              } rounded-xl text-xs font-semibold transition-all ${
                pathname === '/dashboard/settings'
                  ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <Settings className="w-4 h-4 shrink-0" />
              {!isCollapsed && <span>Settings</span>}
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer with Theme Toggle, Help & User Profile */}
        <div className="p-3 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
          {/* 9. Help & Docs / Feedback Button */}
          <button
            onClick={() => setIsHelpOpen(true)}
            className={`w-full flex items-center ${
              isCollapsed ? 'justify-center p-2' : 'justify-between px-3 py-2'
            } rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors`}
            title="Help, Docs & Feedback"
          >
            <div className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-blue-500 shrink-0" />
              {!isCollapsed && <span>Help & Feedback</span>}
            </div>
          </button>

          {/* 8. Dark Mode Toggle & User profile footer item */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-100 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2.5 truncate">
              {user?.avatarUrl ? (
                <img src={user.avatarUrl} alt={user.name} className="w-7 h-7 rounded-full object-cover shrink-0 border border-slate-300 dark:border-slate-700" />
              ) : (
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {user?.name?.charAt(0) || 'U'}
                </div>
              )}
              {!isCollapsed && (
                <div className="truncate text-xs">
                  <p className="font-semibold text-slate-900 dark:text-white truncate">{user?.name || 'User'}</p>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1">
              {!isCollapsed && <ThemeToggle />}
              <button
                onClick={handleLogout}
                title="Logout"
                className="p-1 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Modals */}
      <CommandPalette isOpen={isCmdPaletteOpen} onClose={() => setIsCmdPaletteOpen(false)} />
      <HelpFeedbackModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />

      {/* Create Workspace Modal */}
      {isCreateWsModalOpen && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-slate-900 w-full max-w-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Create New Workspace
              </h3>
              <button onClick={() => setIsCreateWsModalOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateWorkspace} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Workspace Name</label>
                <input
                  type="text"
                  required
                  value={newWsName}
                  onChange={(e) => {
                    setNewWsName(e.target.value);
                    setNewWsSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '-'));
                  }}
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="e.g. Marketing Team"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">URL Slug</label>
                <input
                  type="text"
                  required
                  value={newWsSlug}
                  onChange={(e) => setNewWsSlug(e.target.value.toLowerCase().replace(/[^a-z0-9]/g, '-'))}
                  className="w-full rounded-xl py-2 px-3 text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="marketing-team"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCreateWsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creatingWs}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20"
                >
                  {creatingWs ? 'Creating...' : 'Create Workspace'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        {/* Top bar header */}
        <header className="h-16 border-b border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/40 px-6 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3">
            <h1 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              {currentWorkspace ? (
                <span className="flex items-center gap-2">
                  <span className="text-slate-900 dark:text-white font-bold">{currentWorkspace.name}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/30 uppercase tracking-wider font-semibold">
                    {currentWorkspace.plan} PLAN
                  </span>
                </span>
              ) : (
                'Workspace Dashboard'
              )}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            {/* 2. Notifications Dropdown in Header */}
            <NotificationsDropdown />
            <ThemeToggle />
            <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
              <Shield className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
              <span>Role: <strong className="text-slate-900 dark:text-white capitalize">{currentWorkspace?.role || 'Member'}</strong></span>
            </div>
          </div>
        </header>

        {/* Dynamic page content */}
        <div className="flex-1 p-6 overflow-y-auto">{children}</div>
      </main>

      {/* Floating AI Chatbot Assistant (Powered by Real-Time Google Gemini 1.5 Flash) */}
      <FloatingAiChatbot />
    </div>
  );
}
