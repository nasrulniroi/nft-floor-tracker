"use client"
export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Configuration</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-[var(--muted)]">RPC Endpoint</label>
            <input type="text" className="w-full mt-1 bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-4 py-2 text-[var(--fg)]" placeholder="https://..." />
          </div>
          <div>
            <label className="text-sm text-[var(--muted)]">Refresh Interval</label>
            <select className="w-full mt-1 bg-[var(--surface2)] border border-[var(--border)] rounded-lg px-4 py-2 text-[var(--fg)]">
              <option>30 seconds</option>
              <option>1 minute</option>
              <option>5 minutes</option>
            </select>
          </div>
          <button className="btn">Save Settings</button>
        </div>
      </div>
    </div>
  )
}
