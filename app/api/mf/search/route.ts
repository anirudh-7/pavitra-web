import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')
  if (!q || q.trim().length < 2) {
    return NextResponse.json({ error: 'Query too short' }, { status: 400 })
  }

  try {
    const res = await fetch(
      `https://api.mfapi.in/mf/search?q=${encodeURIComponent(q.trim())}`,
      { next: { revalidate: 300 } }
    )
    if (!res.ok) throw new Error('MFAPI error')
    const data = await res.json()
    return NextResponse.json(data, {
      headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60' },
    })
  } catch {
    return NextResponse.json({ error: 'Failed to fetch fund list' }, { status: 500 })
  }
}
