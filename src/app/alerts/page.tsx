'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import AlertForm from '@/components/AlertForm';
import AlertList from '@/components/AlertList';

export default function AlertsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Price Alerts</h1>
          <AlertForm /><AlertList />
        </div>
      </main>
    </div>
  );
}
