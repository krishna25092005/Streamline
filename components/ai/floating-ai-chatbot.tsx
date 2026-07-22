'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bot,
  Sparkles,
  X,
  Send,
  User,
  Zap,
  Minimize2,
  RefreshCw,
  MessageSquare,
} from 'lucide-react';
import toast from 'react-hot-toast';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export default function FloatingAiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: '👋 Hi! I am Streamline AI Assistant. How can I help you manage tasks, analyze sprints, or optimize team velocity today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    const token = localStorage.getItem('accessToken');

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          userQuery: query.trim(),
        }),
      });

      const data = await res.json();
      if (data.success) {
        const assistantMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.data.reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } else {
        toast.error(data.error?.message || 'AI Chatbot error');
      }
    } catch (err) {
      console.error(err);
      toast.error('Network error reaching AI service');
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    '🚀 How to optimize sprint velocity?',
    '📋 Suggest task acceptance criteria',
    '⚡ Audit project SLA risks',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      {/* Expandable Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="mb-4 w-80 sm:w-96 h-[520px] rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                {/* Animated Circular Bot Header Avatar */}
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 relative"
                >
                  <Bot className="w-5 h-5 text-white" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-purple-600 rounded-full" />
                </motion.div>
                <div>
                  <h3 className="text-xs font-bold flex items-center gap-1.5 leading-tight">
                    Streamline AI Assistant
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </h3>
                  <p className="text-[10px] text-blue-100 flex items-center gap-1 font-medium">
                    Online • Real-Time Task Assistant
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-white/20 transition-colors text-white"
                  title="Minimize"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50 dark:bg-slate-950/40 text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Animated Assistant Avatar */}
                  {msg.role === 'assistant' && (
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                      className="w-7 h-7 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-600 dark:text-purple-300 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        <Bot className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  )}

                  <div
                    className={`max-w-[80%] p-3 rounded-2xl space-y-1 ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-tr-xs shadow-md'
                        : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700/80 rounded-tl-xs shadow-xs'
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed font-sans">{msg.content}</p>
                    <span
                      className={`text-[9px] block text-right ${
                        msg.role === 'user' ? 'text-blue-100' : 'text-slate-400'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* User Avatar */}
                  {msg.role === 'user' && (
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-600 dark:text-blue-300 flex items-center justify-center shrink-0 mt-0.5"
                    >
                      <User className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-slate-400 text-xs p-2 italic">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-purple-500" />
                  <span>AI Assistant is generating response...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className="p-2.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-1.5 overflow-x-auto shrink-0 scrollbar-none">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendMessage(prompt)}
                  disabled={isLoading}
                  className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-purple-500/10 hover:text-purple-600 border border-slate-200 dark:border-slate-700 whitespace-nowrap transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask AI Assistant anything..."
                className="flex-1 py-2 px-3 rounded-xl text-xs border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="p-2 rounded-xl bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white shadow-md transition-all shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circular Animated Floating Trigger Button with Pulsing Aura Ring */}
      {!isOpen && (
        <motion.div className="relative">
          {/* Animated Pulsing Radial Glow Aura */}
          <motion.div
            animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 blur-md pointer-events-none"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-2xl shadow-purple-500/40 border border-white/30 relative z-10 cursor-pointer"
          >
            {/* Animated Bot Avatar Icon Floating Loop */}
            <motion.div
              animate={{ y: [0, -3, 0], rotate: [0, 6, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Bot className="w-7 h-7 text-white" />
            </motion.div>

            {/* Glowing AI Pill Badge */}
            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full text-[9px] font-black bg-amber-400 text-slate-950 border border-white shadow-md flex items-center gap-0.5 animate-bounce">
              <Sparkles className="w-2.5 h-2.5 fill-slate-950" /> AI
            </span>
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}
