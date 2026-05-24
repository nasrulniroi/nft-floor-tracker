'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import WhaleActivity from '@/components/WhaleActivity';
import WhaleTransaction from '@/components/WhaleTransaction';

export default function WhaleTrackerPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Whale Tracker</h1>
          <WhaleActivity expanded /><WhaleTransaction />
        </div>
      </main>
    </div>
  );
}
