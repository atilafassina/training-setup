import { NextResponse } from 'next/server'
import { csp } from './lib/csp'
import { securityHeaders } from './lib/security-headers'

/**
 *
 * @param {import('next/server').NextRequest} _req
 * @returns
 */
export default async function middleware(_req) {
  const response = NextResponse.next()

  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  response.headers.set('Content-Security-Policy', csp)

  return response
}

export const config = {
  matcher: '/:path*',
}
