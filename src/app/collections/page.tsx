"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)

export default function Collections() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-3xl font-bold">Collections</h1><p className="text-[var(--muted)] mt-1">Browse and track NFT collections</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Total Collections" value="500+" icon="🖼" /><StatsCard label="Tracked" value="47" icon="👁" /><StatsCard label="Alerts Set" value="23" icon="🔔" /><StatsCard label="Favorites" value="12" icon="⭐" />
      </div>
      <Chart data={chartData} labels={labels} label="Collection Floor Prices" />
      <DataTable columns={JSON.stringify(['Collection', 'Floor', '24h Change', 'Volume', 'Listed'])} data={JSON.stringify([["BAYC","12.5 ETH","+3.2%","892 ETH","5.2%"],["Punks","28.3 ETH","-1.1%","1,203 ETH","3.1%"],["Azuki","4.2 ETH","+8.5%","456 ETH","8.3%"],["Doodles","1.8 ETH","+2.1%","234 ETH","12.5%"],["Moonbirds","1.2 ETH","-4.3%","187 ETH","15.2%"]])} />
    </div>
  )
}