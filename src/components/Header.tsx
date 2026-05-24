export default function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[var(--primary)] flex items-center justify-center font-bold text-sm">N</div>
          <span className="font-semibold text-lg">NFT Floor Tracker</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="/" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Dashboard</a>
          <a href="/collections" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Collections</a>
          <a href="/analytics" className="text-sm text-[var(--muted)] hover:text-white transition-colors">Analytics</a>
        </nav>
      </div>
    </header>
  )
}
