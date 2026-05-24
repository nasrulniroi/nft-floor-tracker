import { formatETH, formatNumber } from '@/lib/utils'
describe('utils', () => {
  test('formatETH', () => expect(formatETH(1.234)).toBe('1.23 ETH'))
  test('formatNumber', () => expect(formatNumber(1234567)).toBe('1,234,567'))
})
