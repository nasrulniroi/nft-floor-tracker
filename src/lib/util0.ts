export function helper0(input: any): any {
  return typeof input === 'object' ? { ...input, processed: true } : input
}
export function format0(value: number): string {
  return value.toLocaleString('en-US', { maximumFractionDigits: 2 })
}
