'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import StatsBar from '@/components/StatsBar';
import FloorPriceChart from '@/components/FloorPriceChart';
import VolumeChart from '@/components/VolumeChart';
import MarketOverview from '@/components/MarketOverview';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <StatsBar />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <FloorPriceChart /><VolumeChart />
          </div>
          <MarketOverview />
        </div>
      </main>
    </div>
  );
}
