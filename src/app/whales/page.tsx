"use client"
import StatsCard from '@/components/StatsCard'
import Chart from '@/components/Chart'
import DataTable from '@/components/DataTable'

const labels = Array.from({length: 30}, (_, i) => `Day ${i+1}`)
const chartData = Array.from({length: 30}, () => Math.random() * 1000 + 500)

export default function Whale Tracker() {
  return (
    <div className="space-y-8">
      <div><h1 className="text-3xl font-bold">Whale Tracker</h1><p className="text-[var(--muted)] mt-1">Monitor large NFT transactions</p></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard label="Whale Wallets" value="156" icon="🐋" /><StatsCard label="Large Buys 24h" value="23" icon="🟢" /><StatsCard label="Large Sells 24h" value="8" icon="🔴" /><StatsCard label="Total Volume" value="2,340 ETH" icon="💰" />
      </div>
      <Chart data={chartData} labels={labels} label="Whale Activity" />
      <DataTable columns={JSON.stringify(['Wallet', 'Action', 'Collection', 'Price', 'Time'])} data={JSON.stringify([["0x1234...abcd","Buy","BAYC","13.2 ETH","2h ago"],["0x5678...efgh","Sell","Punks","29.1 ETH","3h ago"],["0x9abc...ijkl","Buy","Azuki","4.5 ETH","5h ago"],["0xdef0...mnop","Buy","Doodles","1.9 ETH","6h ago"]])} />
    </div>
  )
}