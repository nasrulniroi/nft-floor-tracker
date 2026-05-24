export default function AlertList() {
  const alerts = [
    { collection: "Bored Ape Yacht Club", threshold: "12 ETH", direction: "below", status: "active" },
    { collection: "CryptoPunks", threshold: "30 ETH", direction: "above", status: "triggered" },
    { collection: "Azuki", threshold: "5 ETH", direction: "below", status: "active" },
  ]
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Active Alerts</h3>
      <div className="space-y-3">
        {alerts.map((a, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-[var(--surface2)] rounded-lg">
            <div>
              <div className="font-medium">{a.collection}</div>
              <div className="text-sm text-[var(--muted)]">{a.direction} {a.threshold}</div>
            </div>
            <span className={`badge ${a.status === 'active' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
              {a.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
