export function formatETH(n: number) { return `${n.toFixed(2)} ETH` }
export function formatNumber(n: number) { return new Intl.NumberFormat('en-US').format(n) }
