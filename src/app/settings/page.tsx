'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="p-6 space-y-6 max-w-2xl">
          <h1 className="text-2xl font-bold">Settings</h1>
          <div className="card space-y-4">
            <h2 className="text-lg font-semibold">Appearance</h2>
            <div className="flex items-center justify-between">
              <span className="text-dark-300">Theme</span>
              <select className="input"><option>Dark</option><option>Light</option></select>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
