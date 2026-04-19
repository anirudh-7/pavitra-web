import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  _req: NextRequest,
  { params }: { params: { schemeCode: string } }
) {
  const { schemeCode } = params
  if (!schemeCode || !/^\d+$/.test(schemeCode)) {
    return NextResponse.json({ error: 'Invalid scheme code' }, { status: 400 })
  }

  try {
    const res = await fetch(`https://api.mfapi.in/mf/${schemeCode}`, {
      next: { revalidate: 3600 }, // 1 hr cache
    })
    if (!res.ok) throw new Error('MFAPI error')
    const data = await res.json()
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch scheme data' }, { status: 500 })
  }
}
