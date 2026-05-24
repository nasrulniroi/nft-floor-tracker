"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-3xl font-bold">Analytics</h1><p className="text-[var(--muted)] mt-1">Collection performance analytics</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Top Gainer" value="+45.2%" icon="📈" /><StatsCard label="Top Loser" value="-12.3%" icon="📉" /><StatsCard label="Avg Floor" value="3.4 ETH" icon="📊" /><StatsCard label="Total Sales" value="8,234" icon="💰" />
      </div>
      <Chart data={chartData} labels={labels} label="Volume Trend" />
      <DataTable columns={JSON.stringify(['Metric', 'Value', 'Change', 'Period'])} data={JSON.stringify([["Floor Price","12.5 ETH","+5.2%","24h"],["Volume","892 ETH","+12.3%","24h"],["Sales Count","156","+8.1%","24h"],["Unique Buyers","89","-3.2%","24h"]])} />
    </div>
  )
}