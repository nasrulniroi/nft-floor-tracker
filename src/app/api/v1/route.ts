import { NextResponse } from 'next/server'
export async function GET() {
  return NextResponse.json({ version: '1', status: 'ok', data: [] })
}
export async function POST(req: Request) {
  const body = await req.json()
  return NextResponse.json({ received: body })
}
