"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-3xl font-bold">Dashboard</h1><p className="text-[var(--muted)] mt-1">Real-time NFT floor price monitoring</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Collections Tracked" value="500+" icon="🖼" /><StatsCard label="Total Volume 24h" value="12,450 ETH" icon="📊" /><StatsCard label="Floor Alerts" value="23" icon="🔔" /><StatsCard label="Whale Moves" value="8" icon="🐋" />
      </div>
      <Chart data={chartData} labels={labels} label="Floor Price Trend" />
      <DataTable columns={JSON.stringify(['Collection', 'Floor', 'Volume 24h', 'Owners', 'Items'])} data={JSON.stringify([["Bored Ape YC","12.5 ETH","892 ETH","6,432","10,000"],["CryptoPunks","28.3 ETH","1,203 ETH","3,521","10,000"],["Azuki","4.2 ETH","456 ETH","5,891","10,000"],["Doodles","1.8 ETH","234 ETH","4,523","10,000"],["Clone X","2.1 ETH","312 ETH","7,123","19,423"]])} />
    </div>
  )
}