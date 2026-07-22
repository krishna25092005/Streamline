# Streamline | Production-Grade Multi-Tenant SaaS Team Task Management

Streamline is a full-stack multi-tenant SaaS task management web application built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Prisma ORM**. Inspired by modern tools like Trello and Asana, Streamline provides strict workspace data isolation, JWT authentication with access/refresh token rotation, role-based access control (RBAC), an interactive drag-and-drop Kanban board, workspace analytics dashboard with Recharts, and subscription plan limits.

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.x or higher (Tested on v24.x)
- **NPM**: v9.x or higher

### 1. Clone & Install Dependencies
```bash
npm install
```

### 2. Environment Configuration
Create a `.env` file in the root directory (or copy from `.env.example`):
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="streamline_jwt_super_secret_access_key_2026_safe"
JWT_REFRESH_SECRET="streamline_jwt_super_secret_refresh_key_2026_safe"
PORT=3000
```

### 3. Database Migration & Seeding
Streamline uses Prisma ORM configured with **SQLite** by default for zero-config out-of-the-box local running.

```bash
# Push schema to SQLite database
npx prisma db push

# Seed realistic demo data (Workspaces, Users, Projects, Tasks, Comments, Logs)
npm run db:seed
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 👥 Demo Logins & Pre-seeded Accounts

Password for all pre-seeded accounts: **`Password123!`**

| User Name | Email | Role | Default Workspace |
| :--- | :--- | :--- | :--- |
| **Alex Morgan** | `alex@acme.com` | Workspace Owner / Admin | **Acme Corp** (Pro Plan) |
| **Sarah Chen** | `sarah@techstart.io` | Workspace Owner / Admin | **TechStart AI** (Free Plan) |
| **David Kim** | `david@designstudio.com` | Workspace Owner / Admin | **DesignStudio** (Enterprise Plan) |
| **Emily Watson** | `emily@acme.com` | Workspace Member | **Acme Corp** (Member Role) |

> 💡 **Testing Tip**: The Login page includes 1-click Quick Demo Login buttons to instantly authenticate as any user!

---

## 🏗️ Architecture & Multi-Tenant SaaS Isolation

```
├── app/
│   ├── api/                     # REST API Endpoints
│   │   ├── auth/                # Signup, Login, Refresh, Logout, Password Reset
│   │   ├── workspaces/          # Workspace CRUD, Member management & Analytics
│   │   ├── projects/            # Project CRUD & Member assignments
│   │   ├── tasks/               # Task Kanban CRUD, Comments & Activity logs
│   │   └── users/               # Profile management
│   ├── dashboard/               # Authenticated SaaS App
│   │   ├── projects/            # Interactive Drag-and-Drop Kanban Board
│   │   ├── settings/            # Workspace configuration & Plan upgrades
│   │   ├── profile/             # User settings
│   │   └── page.tsx             # Analytics Dashboard (Charts & Overdue items)
│   ├── login/                   # Authentication Pages
│   ├── signup/
│   └── page.tsx                 # Public SaaS Landing Page
├── lib/
│   ├── auth.ts                  # JWT token sign/verify & bcrypt helpers
│   ├── rbac.ts                  # Multi-tenant tenant verification & RBAC checks
│   ├── validations.ts           # Zod schema validation
│   └── prisma.ts                # Prisma client singleton
└── prisma/
    ├── schema.prisma            # Relational database schema
    └── seed.ts                  # Seed script
```

### Multi-Tenant Data Isolation Strategy
- **Workspace Scope**: Every query for `Project`, `Task`, `WorkspaceMember`, `TaskComment`, and `TaskActivityLog` checks `workspaceId` and verifies that `req.user` belongs to that workspace.
- **Role-Based Access Control (RBAC)**:
  - **Admin**: Full CRUD on projects, tasks, workspace members, role promotion/demotion, and task reassignment.
  - **Member**: Can view assigned projects and task boards; can update status/details only on tasks assigned to them or created by them (enforced strictly at the API layer in `/api/tasks/[id]/route.ts`).

---

## 📊 Database ERD Schema Diagram

```
┌──────────────┐       1:N       ┌───────────────────┐
│     User     ├─────────────────┤  WorkspaceMember  │
└──────┬───────┘                 └─────────┬─────────┘
       │ 1:N                               │ N:1
       ▼                                   ▼
┌──────────────┐       1:N       ┌───────────────────┐
│  Workspace   ├─────────────────┤      Project      │
└──────┬───────┘                 └─────────┬─────────┘
       │                                   │ 1:N
       │ 1:N                               ▼
       │                         ┌───────────────────┐
       └────────────────────────►│       Task        │
                                 └─────────┬─────────┘
                                           │ 1:N
                                           ├───► TaskComment
                                           └───► TaskActivityLog
```

---

## 🚢 Deployment Instructions

### Option 1: Vercel + Railway / Render PostgreSQL (Recommended)
1. **Database Setup (Railway or Render)**:
   - Create a PostgreSQL database instance on Railway.app or Render.com.
   - Copy the connection URI: `postgresql://user:pass@host:5432/dbname`.
2. **Update Prisma Schema**:
   - Change `provider = "sqlite"` to `provider = "postgresql"` in `prisma/schema.prisma`.
   - Run `npx prisma migrate dev --name init`.
3. **Frontend & API Deployment (Vercel)**:
   - Connect your GitHub repository to Vercel.
   - Add environment variables in Vercel project settings:
     - `DATABASE_URL`
     - `JWT_SECRET`
     - `JWT_REFRESH_SECRET`
   - Build Command: `npx prisma generate && next build`.

### Option 2: Single Next.js Full-Stack Server Deployment
- Deploy the repository to Render, Railway, or Docker instance running `npm run build` followed by `npm start`.

---

## 📦 Deliverables

1. Full Working Codebase in `d:\Streamline`
2. Postman Collection: `streamline_postman_collection.json`
3. Environment Template: `.env.example`
4. Seeding script: `prisma/seed.ts`
