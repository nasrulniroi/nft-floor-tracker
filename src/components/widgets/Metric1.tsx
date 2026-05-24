export default function Metric1({ label, value }: { label: string; value: string }) {
  return <div className="card text-center"><div className="text-sm text-[var(--muted)]">{label}</div><div className="text-xl font-bold mt-1">{value}</div></div>
}