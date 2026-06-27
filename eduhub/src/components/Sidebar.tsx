"use client";
import React from 'react';
import { Home, Sparkles, Bot, BookOpen, Palette, ClipboardCheck, Gamepad2, Video, Users, Accessibility, Heart, Clock, Settings } from 'lucide-react';

const MENU_ITEMS = [
  { icon: Home, label: "Home" },
  { icon: Sparkles, label: "추천" },
  { icon: Bot, label: "AI" },
  { icon: BookOpen, label: "과목" },
  { icon: Palette, label: "만들기" },
  { icon: ClipboardCheck, label: "평가" },
  { icon: Gamepad2, label: "게임" },
  { icon: Video, label: "영상" },
  { icon: Users, label: "협업" },
  { icon: Accessibility, label: "특수교육" },
];

const BOTTOM_ITEMS = [
  { icon: Heart, label: "즐겨찾기" },
  { icon: Clock, label: "최근 사용" },
  { icon: Settings, label: "설정" },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-[64px] left-0 bottom-0 w-[240px] bg-surface border-r border-border z-20 flex flex-col py-4 overflow-y-auto">
      <nav className="flex-1 px-3 space-y-1">
        {MENU_ITEMS.map((item, i) => (
          <button 
            key={i} 
            className={`w-full flex items-center gap-3 h-[44px] px-3 rounded-lg transition-colors ${i === 0 ? 'bg-primary-soft text-primary font-semibold border-l-4 border-primary' : 'text-text-secondary hover:bg-background'}`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="mt-8 px-3 space-y-1 border-t border-border pt-4">
        {BOTTOM_ITEMS.map((item, i) => (
          <button 
            key={i} 
            className="w-full flex items-center gap-3 h-[44px] px-3 rounded-lg text-text-secondary hover:bg-background transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
