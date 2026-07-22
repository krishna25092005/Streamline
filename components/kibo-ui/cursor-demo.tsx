'use client';

import React from 'react';
import {
  Cursor,
  CursorBody,
  CursorMessage,
  CursorName,
  CursorPointer,
} from '@/components/kibo-ui/cursor';

const KiboCursorDemo = () => (
  <div className="relative w-full h-64 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-6 backdrop-blur-sm shadow-xs">
    <div className="text-center text-xs text-slate-400 font-medium py-2 uppercase tracking-widest">
      Multiplayer Team Cursors (Compound Pattern)
    </div>

    {/* Example 1: Dark / Black Cursor (#000000) as requested */}
    <Cursor color="#000000" className="absolute top-10 left-12 sm:left-24">
      <CursorPointer />
      <CursorBody>
        <CursorName>Hayden</CursorName>
        <CursorMessage>That looks great!</CursorMessage>
      </CursorBody>
    </Cursor>

    {/* Example 2: Rose Red Cursor (#f43f5e) */}
    <Cursor color="#f43f5e" className="absolute top-24 right-12 sm:right-32">
      <CursorPointer />
      <CursorBody>
        <CursorName>Lee Rob</CursorName>
        <CursorMessage>One more thing...</CursorMessage>
      </CursorBody>
    </Cursor>

    {/* Example 3: Sky Blue Cursor (#0ea5e9) */}
    <Cursor color="#0ea5e9" className="absolute bottom-8 left-20 sm:left-48">
      <CursorPointer />
      <CursorBody>
        <CursorName>Shadcn</CursorName>
        <CursorMessage>Another new component?!!</CursorMessage>
      </CursorBody>
    </Cursor>
  </div>
);

export default KiboCursorDemo;
