import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clean existing data
  await prisma.taskActivityLog.deleteMany();
  await prisma.taskComment.deleteMany();
  await prisma.task.deleteMany();
  await prisma.projectMember.deleteMany();
  await prisma.project.deleteMany();
  await prisma.workspaceMember.deleteMany();
  await prisma.workspace.deleteMany();
  await prisma.passwordResetToken.deleteMany();
  await prisma.refreshToken.deleteMany();
  await prisma.user.deleteMany();

  console.log('🧹 Cleaned existing database records.');

  // Create Users
  const passwordHash = await bcrypt.hash('Password123!', 10);

  const alex = await prisma.user.create({
    data: {
      name: 'Alex Morgan',
      email: 'alex@acme.com',
      passwordHash,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    },
  });

  const sarah = await prisma.user.create({
    data: {
      name: 'Sarah Chen',
      email: 'sarah@techstart.io',
      passwordHash,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    },
  });

  const david = await prisma.user.create({
    data: {
      name: 'David Kim',
      email: 'david@designstudio.com',
      passwordHash,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    },
  });

  const emily = await prisma.user.create({
    data: {
      name: 'Emily Watson',
      email: 'emily@acme.com',
      passwordHash,
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
    },
  });

  console.log('👤 Created 4 demo users (Password: Password123!).');

  // Create Workspaces
  const acmeWorkspace = await prisma.workspace.create({
    data: {
      name: 'Acme Corp',
      slug: 'acme-corp',
      plan: 'PRO',
      ownerId: alex.id,
      members: {
        create: [
          { userId: alex.id, role: 'ADMIN' },
          { userId: sarah.id, role: 'MEMBER' },
          { userId: emily.id, role: 'MEMBER' },
          { userId: david.id, role: 'MEMBER' },
        ],
      },
    },
  });

  const techstartWorkspace = await prisma.workspace.create({
    data: {
      name: 'TechStart AI',
      slug: 'techstart-ai',
      plan: 'FREE',
      ownerId: sarah.id,
      members: {
        create: [
          { userId: sarah.id, role: 'ADMIN' },
          { userId: alex.id, role: 'ADMIN' },
          { userId: emily.id, role: 'MEMBER' },
        ],
      },
    },
  });

  const designWorkspace = await prisma.workspace.create({
    data: {
      name: 'DesignStudio',
      slug: 'design-studio',
      plan: 'ENTERPRISE',
      ownerId: david.id,
      members: {
        create: [
          { userId: david.id, role: 'ADMIN' },
          { userId: alex.id, role: 'MEMBER' },
        ],
      },
    },
  });

  console.log('🏢 Created 3 multi-tenant Workspaces.');

  // Create Projects in Acme Corp
  const mobileProject = await prisma.project.create({
    data: {
      name: 'Mobile App Redesign',
      description: 'Complete UI/UX overhaul of iOS and Android mobile apps for Q3 launch.',
      workspaceId: acmeWorkspace.id,
      createdById: alex.id,
      members: {
        create: [
          { userId: alex.id },
          { userId: sarah.id },
          { userId: emily.id },
        ],
      },
    },
  });

  const paymentProject = await prisma.project.create({
    data: {
      name: 'Payment Gateway Integration',
      description: 'Implement multi-currency Stripe & PayPal checkout with subscription auto-billing.',
      workspaceId: acmeWorkspace.id,
      createdById: alex.id,
      members: {
        create: [
          { userId: alex.id },
          { userId: emily.id },
        ],
      },
    },
  });

  const cloudProject = await prisma.project.create({
    data: {
      name: 'Cloud Infrastructure Migration',
      description: 'Migrate legacy bare-metal server nodes to Kubernetes AWS EKS clusters.',
      workspaceId: acmeWorkspace.id,
      createdById: alex.id,
      members: {
        create: [
          { userId: alex.id },
          { userId: sarah.id },
          { userId: david.id },
        ],
      },
    },
  });

  // Create Projects in TechStart AI
  const aiProject = await prisma.project.create({
    data: {
      name: 'LLM Support Assistant',
      description: 'Train custom LLM agent on product documentation to automate customer ticket routing.',
      workspaceId: techstartWorkspace.id,
      createdById: sarah.id,
      members: {
        create: [
          { userId: sarah.id },
          { userId: alex.id },
        ],
      },
    },
  });

  console.log('📁 Created 4 Projects across workspaces.');

  // Dates helpers
  const pastDate1 = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000); // 5 days ago (OVERDUE)
  const pastDate2 = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000); // 2 days ago (OVERDUE)
  const futureDate1 = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // in 3 days
  const futureDate2 = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000); // in 10 days

  // Create Tasks for Mobile App Redesign
  const task1 = await prisma.task.create({
    data: {
      title: 'Design Dark Mode Wireframes',
      description: 'Create high-fidelity Figma components for dark mode navigation and dashboard cards.',
      priority: 'HIGH',
      status: 'DONE',
      dueDate: pastDate1,
      projectId: mobileProject.id,
      workspaceId: acmeWorkspace.id,
      assigneeId: sarah.id,
      createdById: alex.id,
    },
  });

  const task2 = await prisma.task.create({
    data: {
      title: 'Implement Push Notification Engine',
      description: 'Integrate Firebase Cloud Messaging (FCM) for real-time task assignment alerts.',
      priority: 'URGENT',
      status: 'IN_PROGRESS',
      dueDate: pastDate2, // OVERDUE & IN_PROGRESS
      projectId: mobileProject.id,
      workspaceId: acmeWorkspace.id,
      assigneeId: emily.id,
      createdById: alex.id,
    },
  });

  const task3 = await prisma.task.create({
    data: {
      title: 'Biometric Authentication (FaceID/TouchID)',
      description: 'Add native biometric unlock for mobile app security settings.',
      priority: 'MEDIUM',
      status: 'TODO',
      dueDate: futureDate1,
      projectId: mobileProject.id,
      workspaceId: acmeWorkspace.id,
      assigneeId: sarah.id,
      createdById: alex.id,
    },
  });

  const task4 = await prisma.task.create({
    data: {
      title: 'App Store Submission Assets',
      description: 'Generate 6.5-inch screenshot previews and feature graphic banners.',
      priority: 'LOW',
      status: 'TODO',
      dueDate: futureDate2,
      projectId: mobileProject.id,
      workspaceId: acmeWorkspace.id,
      assigneeId: alex.id,
      createdById: alex.id,
    },
  });

  // Tasks for Payment Gateway
  const task5 = await prisma.task.create({
    data: {
      title: 'Audit PCI-DSS Security Compliance',
      description: 'Review webhook signing secrets and token storage encryption algorithms.',
      priority: 'URGENT',
      status: 'IN_PROGRESS',
      dueDate: pastDate1, // OVERDUE
      projectId: paymentProject.id,
      workspaceId: acmeWorkspace.id,
      assigneeId: emily.id,
      createdById: alex.id,
    },
  });

  const task6 = await prisma.task.create({
    data: {
      title: 'Setup Stripe Webhook Handlers',
      description: 'Listen for invoice.payment_succeeded and customer.subscription.deleted events.',
      priority: 'HIGH',
      status: 'DONE',
      dueDate: pastDate2,
      projectId: paymentProject.id,
      workspaceId: acmeWorkspace.id,
      assigneeId: alex.id,
      createdById: alex.id,
    },
  });

  const task7 = await prisma.task.create({
    data: {
      title: 'Add Currency Converter Widget',
      description: 'Fetch real-time forex exchange rates to display pricing in EUR, GBP, and JPY.',
      priority: 'MEDIUM',
      status: 'TODO',
      dueDate: futureDate1,
      projectId: paymentProject.id,
      workspaceId: acmeWorkspace.id,
      assigneeId: emily.id,
      createdById: alex.id,
    },
  });

  // Tasks for TechStart AI Project
  const task8 = await prisma.task.create({
    data: {
      title: 'Dataset Preparation & Anonymization',
      description: 'Strip PII from historical ticket logs before feeding into model training pipeline.',
      priority: 'HIGH',
      status: 'IN_PROGRESS',
      dueDate: futureDate1,
      projectId: aiProject.id,
      workspaceId: techstartWorkspace.id,
      assigneeId: sarah.id,
      createdById: sarah.id,
    },
  });

  console.log('✅ Created 8 realistic Tasks with priorities, assignees, and due dates.');

  // Create Comments
  await prisma.taskComment.createMany({
    data: [
      {
        taskId: task2.id,
        authorId: alex.id,
        content: 'Hey Emily, remember to check iOS APNS payload size limits (max 4KB)!',
      },
      {
        taskId: task2.id,
        authorId: emily.id,
        content: 'Thanks Alex! Added payload compression middleware to keep it under 2KB.',
      },
      {
        taskId: task5.id,
        authorId: emily.id,
        content: 'Updated RSA 4096-bit key pair rotation script. Security team greenlit the changes.',
      },
    ],
  });

  // Create Activity Logs
  await prisma.taskActivityLog.createMany({
    data: [
      {
        taskId: task1.id,
        userId: sarah.id,
        action: 'STATUS_CHANGE',
        previousState: 'IN_PROGRESS',
        newState: 'DONE',
      },
      {
        taskId: task2.id,
        userId: alex.id,
        action: 'REASSIGNED',
        previousState: 'Unassigned',
        newState: 'Emily Watson',
      },
      {
        taskId: task5.id,
        userId: alex.id,
        action: 'PRIORITY_CHANGE',
        previousState: 'HIGH',
        newState: 'URGENT',
      },
    ],
  });

  console.log('💬 Created task comments and activity logs.');
  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
