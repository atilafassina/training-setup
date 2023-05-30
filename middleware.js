import { NextResponse } from 'next/server'
import { csp } from './lib/csp'
import { securityHeaders } from './lib/security-headers'

export const config = {
  matcher: ['/:path*'],
}

/**
 *
 * @param {typeof NextResponse} res
 * @returns
 */
const securityMiddleware = (response) => {
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  response.headers.set('Content-Security-Policy-Report-Only', csp)

  return response
}

/**
 *
 * @param {import('next/server').NextRequest} req
 */
export default async function middleware(req) {
  const response = securityMiddleware(NextResponse.next())
  return response
}
