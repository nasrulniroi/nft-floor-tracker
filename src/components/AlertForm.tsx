"use client"
export default function AlertForm() {
  return (
    <div className="card">
      <h3 className="text-lg font-semibold mb-4">Create Alert</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm text-[var(--muted)]">Collection</label>
          <input type="text" className="w-full mt-1 bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-4 py-2" placeholder="e.g. Bored Ape Yacht Club" />
        </div>
        <div>
          <label className="text-sm text-[var(--muted)]">Floor Price Threshold (ETH)</label>
          <input type="number" className="w-full mt-1 bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-4 py-2" placeholder="10.0" />
        </div>
        <button className="btn">Create Alert</button>
      </div>
    </div>
  )
}
