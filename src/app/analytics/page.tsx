"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

export default function Analytics() {
  const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
  const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatsCard label="Period" value="30 Days" icon="📅" />
        <StatsCard label="Avg Daily Volume" value="$4.1M" change={3.1} icon="📊" />
        <StatsCard label="Peak Volume" value="$18.2M" icon="🔝" />
      </div>
      <Chart data={chartData} labels={labels} label="30-Day Volume Trend" />
      <DataTable columns={["Metric", "Value", "Change", "Period"]} data={[
        ["Floor Price", "12.5 ETH", "+5.2%", "24h"],
        ["Volume", "892 ETH", "+12.3%", "24h"],
        ["Sales Count", "156", "+8.1%", "24h"],
        ["Unique Buyers", "89", "-3.2%", "24h"],
      ]} />
    </div>
  )
}
