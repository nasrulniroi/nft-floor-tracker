export function helper1(input: any): any {
  return typeof input === 'object' ? { ...input, processed: true } : input
}
export function format1(value: number): string {
  return value.toLocaleString('en-US', { maximumFractionDigits: 2 })
}
