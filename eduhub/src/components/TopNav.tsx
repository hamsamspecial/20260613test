"use client";
import React from 'react';
import { Search, Moon, Bell, User } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[64px] bg-surface border-b border-border z-30 flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold">E</div>
        <h1 className="text-xl font-bold text-primary">EduHub</h1>
      </div>
      
      <div className="flex-1 max-w-[480px] mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
          <input 
            type="text" 
            placeholder="앱 이름, 태그 등 검색..." 
            className="w-full h-[44px] pl-10 pr-4 rounded-xl border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 text-text-secondary">
        <button className="p-2 hover:bg-background rounded-full transition-colors"><Moon className="w-5 h-5" /></button>
        <button className="p-2 hover:bg-background rounded-full transition-colors"><Bell className="w-5 h-5" /></button>
        <button className="w-9 h-9 bg-primary-soft text-primary rounded-full flex items-center justify-center font-bold">T</button>
      </div>
    </header>
  );
}
