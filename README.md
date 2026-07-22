# 🚀 Streamline — Multi-Tenant SaaS Team Task & Workflow Platform

[![Deploy on Railway](https://img.shields.io/badge/Deploy-Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)](https://streamline-teams.up.railway.app/)
[![Next.js 14](https://img.shields.io/badge/Next.js-14_App_Router-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Prisma ORM](https://img.shields.io/badge/Prisma-5.22.0-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Google Gemini AI](https://img.shields.io/badge/Google_Gemini-1.5_Flash-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
[![Razorpay](https://img.shields.io/badge/Razorpay-Payment_Gateway-02042B?style=for-the-badge&logo=razorpay&logoColor=3395FF)](https://razorpay.com/)

Streamline is a production-grade, full-stack **Multi-Tenant SaaS Task Management Platform** built with **Next.js 14**, **Prisma ORM**, **Google Gemini 1.5 Flash AI**, and **Razorpay Payment Gateway**. Designed for modern teams, Streamline combines Trello-style interactive Kanban boards, Asana-style execution views, real-time AI automation, and advanced workspace analytics.

🌐 **Live Demo Application**: [https://streamline-teams.up.railway.app/](https://streamline-teams.up.railway.app/)

---

## ✨ Key Features & Capabilities

### 🔒 1. Multi-Tenant SaaS Architecture & Security
- **Strict Data Isolation**: Multi-tenant workspace data isolation enforced at the Prisma query layer across Workspaces, Projects, Tasks, Comments, and Activity Logs.
- **Authentication Flow**: Dual-token JWT authentication (15-min Access Tokens + 7-day DB-persisted Refresh Tokens with rotation) and `bcryptjs` password hashing.
- **Role-Based Access Control (RBAC)**:
  - **Admin / Owner**: Full CRUD access over projects, tasks, member roles, workspace settings, and plan upgrades.
  - **Member**: Access to assigned projects and execution view; task creation blocked at API layer (`403 Forbidden`).

---

### 📌 2. Interactive Kanban & Multi-View Project Boards
- **Drag-and-Drop Kanban Board**: Smooth status transitions between `To Do`, `In Progress`, and `Done` using `@hello-pangea/dnd`.
- **Vibrant Indigo "IN PROGRESS" Column**: High-contrast, modern SaaS Indigo color scheme with pulsing SLA risk indicators.
- **Multi-View Board Switcher**:
  - 📌 **Kanban Drag-and-Drop Board**
  - 📋 **Structured Table / List View**
  - 📅 **Calendar Schedule View**
- **Sub-tasks Checklist**: Interactive sub-task checklists per task with real-time completion progress meters (`3/5 sub-tasks completed`).
- **Threaded Comments & Activity Logs**: Real-time task discussion threads and automated timeline history logging.

---

### 🤖 3. Real-Time Google Gemini 1.5 Flash AI Assistant
- **Floating AI Assistant Chatbot**: Interactive glassmorphism assistant chatbot embedded across all dashboard screens with pre-built prompt chips ("🚀 Optimize sprint velocity", "📋 Generate task acceptance criteria", "⚡ Audit SLA risks").
- **AI Task Breakdown Generator**: Auto-expands simple prompts into structured descriptions, acceptance criteria, and sub-task checklists.
- **AI Risk & SLA Predictor**: Real-time AI diagnostics flagging high-risk tasks approaching SLA breach.
- **AI Executive Sprint Summarizer**: One-click executive summary reports for project managers.

---

### 📊 4. Workspace Analytics & Bklit Visualizations Catalog
Integrated custom **Bklit Visualization Suite** (`recharts`):
- 📈 **Area Chart**: Sprint Execution Velocity & Throughput.
- 🎯 **Radar Chart**: Team Skill & Execution Index across 5 dimensions.
- 📊 **Composed Chart**: Planned vs Actual Points with Efficiency overlay.
- ⏱️ **Gauge / Ring Chart**: SLA Compliance Target Rate.
- ⏳ **Funnel Chart**: Task Conversion Funnel.
- 🔥 **Heatmap Chart**: Member Task Activity Heatmap by Day & Hour.

---

### 💳 5. Production Razorpay Payment Gateway Integration
- Interactive subscription upgrades for **PRO** (₹2,499/mo) and **ENTERPRISE** (₹7,999/mo) workspace plans.
- Server HMAC-SHA256 signature verification (`POST /api/payments/verify`) and automated database plan upgrades.

---

### 🧭 6. Modern Sidebar Navigation & Productivity Workflows
- ⌘K **Global Command Palette**: `⌘K` / `Ctrl+K` keyboard shortcut for instant search across projects and team members.
- 🔔 **Notifications Inbox**: Bell icon with unread count badge and category inbox page (`/dashboard/notifications`).
- 📋 **My Tasks Page**: Centralized cross-project execution view of all assigned tasks (`/dashboard/my-tasks`).
- 👥 **Team Directory**: Member roster with role badges, workload counts, and Admin invitation triggers (`/dashboard/team`).
- 💳 **Billing & Plan Management**: Active plan usage meters and upgrade portal (`/dashboard/billing`).
- ⭐ **Pinned Favorites & Collapsible Sidebar**: Star project pinning and `w-64` <-> `w-20` collapsible drawer.
- 🌓 **App-Wide Light/Dark Theme**: Universal `<ThemeProvider>` theme persistence across 100% of application routes.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | Next.js 14 (App Router), React 18, Tailwind CSS, Lucide React, Framer Motion, Recharts, React Hot Toast |
| **Backend API** | Next.js Route Handlers (Edge & Node.js runtime) |
| **Database & ORM** | Prisma ORM, SQLite (local) / PostgreSQL (production) |
| **Authentication** | JWT (jsonwebtoken), bcryptjs, Custom RBAC Middleware |
| **AI Integration** | Real-Time Google Gemini 1.5 Flash API (`@google/generative-ai`) |
| **Payments** | Razorpay Standard Checkout SDK & Webhooks |
| **Deployment** | Railway (Nixpacks Builder + Continuous Deployment) |

---

## 💻 Local Development & Setup

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Step 1: Clone Repository & Install Dependencies
```bash
git clone https://github.com/krishna25092005/Streamline.git
cd Streamline
npm install
```

### Step 2: Configure Environment Variables
Create `.env` and `.env.local` files in the root directory:
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="streamline_jwt_super_secret_access_key_2026_safe"
JWT_REFRESH_SECRET="streamline_jwt_super_secret_refresh_key_2026_safe"
GEMINI_API_KEY="AQ.Ab8RN6JSM-EwfEYqXTpwZtLjHFatzs277z4o5XFADJrMvglG1Q"
RAZORPAY_KEY_ID="rzp_test_TGgxLLNb4O1mL6"
RAZORPAY_KEY_SECRET="5Q0NJzdEpHyr9Iu0rwve1PRv"
NEXT_PUBLIC_RAZORPAY_KEY_ID="rzp_test_TGgxLLNb4O1mL6"
```

### Step 3: Run Database Migrations & Seed Sample Data
```bash
npm run db:push
npm run db:seed
```

### Step 4: Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Railway Deployment Guide

This repository includes pre-configured deployment manifests:
- **[railway.json](file:///d:/Streamline/railway.json)**: Nixpacks build instructions (`npx prisma generate && npx prisma db push && npm run build`).
- **[nixpacks.json](file:///d:/Streamline/nixpacks.json)**: Deployment build phase configuration.
- **[Procfile](file:///d:/Streamline/Procfile)**: Railway Web process runner (`web: npx prisma db push && npm start`).

### Quick Deploy to Railway:
1. Fork / Push this repository to GitHub.
2. Connect the repository in [Railway Dashboard](https://railway.app).
3. Add environment variables under **Service Settings -> Variables**.
4. Generate a public domain under **Settings -> Networking**.

Live App: [https://streamline-teams.up.railway.app/](https://streamline-teams.up.railway.app/)

---

## 📄 License & Credits

Built with ❤️ by **Antigravity AI / DeepMind Team**.  
Copyright © 2026 Streamline SaaS. All rights reserved.
