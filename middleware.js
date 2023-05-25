import { NextResponse } from 'next/server'
import { csp } from './lib/csp'
import { securityHeaders } from './lib/security-headers'

export const config = {
  matcher: '/:path*',
}

/**
 *
 * @param {import('next/server').NextRequest} _req
 */
export default async function middleware(_req) {
  const response = NextResponse.next()

  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  response.headers.set('Content-Security-Policy-Report-Only', csp)

  return response
}
