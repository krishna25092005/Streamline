import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from '@/components/landing/ThemeProvider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Streamline | SaaS Multi-Tenant Team Task Management',
  description: 'Production-grade SaaS task management application with real-time kanban, multi-workspace isolation, and role-based permissions.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/Strreamline_Logo.png', type: 'image/png' },
    ],
    shortcut: '/Strreamline_Logo.png',
    apple: '/Strreamline_Logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} dark`}>
      <body className="font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-300">
        <ThemeProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1e293b',
                color: '#f8fafc',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
