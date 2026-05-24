export function helper3(input: any): any {
  return typeof input === 'object' ? { ...input, processed: true } : input
}
export function format3(value: number): string {
  return value.toLocaleString('en-US', { maximumFractionDigits: 2 })
}
