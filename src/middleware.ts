import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// Block Austria, prefer Germany
const BLOCKED_COUNTRY = 'CN'

export function middleware(req: NextRequest) {
  const country = req.geo.country || 'US'

  if (country === BLOCKED_COUNTRY) {
    req.nextUrl.pathname = '/blocked'
    return NextResponse.rewrite(req.nextUrl)
  }
  return NextResponse.next()
}