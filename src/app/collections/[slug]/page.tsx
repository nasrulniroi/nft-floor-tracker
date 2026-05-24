'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import CollectionHeader from '@/components/CollectionHeader';
import FloorPriceChart from '@/components/FloorPriceChart';
import VolumeHistory from '@/components/VolumeHistory';
import RarityRanking from '@/components/RarityRanking';
import FloorHistory from '@/components/FloorHistory';
import Tabs from '@/components/Tabs';

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'floor-history', label: 'Floor History' },
    { id: 'volume', label: 'Volume' },
    { id: 'rarity', label: 'Rarity' },
  ];
  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-64' : 'ml-20'}`}>
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="p-6 space-y-6">
          <CollectionHeader slug={params.slug} />
          <Tabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
          {activeTab === 'overview' && <FloorPriceChart collection={params.slug} />}
          {activeTab === 'floor-history' && <FloorHistory collection={params.slug} />}
          {activeTab === 'volume' && <VolumeHistory collection={params.slug} />}
          {activeTab === 'rarity' && <RarityRanking collection={params.slug} />}
        </div>
      </main>
    </div>
  );
}
