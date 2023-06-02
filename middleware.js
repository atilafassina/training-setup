import { NextResponse } from 'next/server'
import { csp } from './lib/csp'
import { securityHeaders } from './lib/security-headers'

export const config = {
  matcher: '/:path*',
}

/**
 *
 * @param {typeof NextResponse} response
 */
const securityMiddleware = (response) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  response.headers.set('Content-Security-Policy-Report-Only', csp)
}

/**
 *
 * @param {import('next/server').NextRequest} _req
 */
export default async function middleware(_req) {
  const response = securityMiddleware(NextResponse.next())

  return response
}
