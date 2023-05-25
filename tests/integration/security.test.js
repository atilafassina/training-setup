import 'isomorphic-fetch'
import { csp } from '../../lib/csp'
import { securityHeaders } from '../../lib/security-headers'

describe('Check if Security Headers are defined', () => {
  const url =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : process.env.PREVIEW_URL

  test(`test if Content-Security-Policy is set on root`, async () => {
    const ping = await fetch(url)
    const cspHeader = ping.headers.get('Content-Security-Policy')

    expect(cspHeader).toMatch(csp)
  })

  Object.entries(securityHeaders).forEach(([headerName, headerConfigValue]) => {
    test(`test if ${headerName} is set on root`, async () => {
      const ping = await fetch(url)
      const responseHeaderValue = ping.headers.get(headerName)
      expect(responseHeaderValue).toMatch(headerConfigValue)
    })
  })
})
