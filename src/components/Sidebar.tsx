export default function Sidebar() {
  const sections = [
    { label: "Dashboard", href: "/", icon: "📊" },
    { label: "Collections", href: "/collections", icon: "🖼" },
    { label: "Analytics", href: "/analytics", icon: "📈" },
    { label: "Whales", href: "/whales", icon: "🐋" },
    { label: "Alerts", href: "/alerts", icon: "🔔" },
    { label: "Settings", href: "/settings", icon: "⚙" },
  ]
  return (
    <aside className="w-64 bg-[var(--surface)] border-r border-[var(--border)] min-h-screen p-4">
      <nav className="space-y-2">
        {sections.map((s, i) => (
          <a key={i} href={s.href} className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-[var(--muted)] hover:text-white hover:bg-[var(--surface2)] transition-colors">
            <span>{s.icon}</span>
            <span>{s.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}
