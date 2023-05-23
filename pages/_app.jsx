// @ts-check
import '~/lib/globals.css'

/**
 *
 * @param {import('next/app').AppProps} appProps
 * @returns
 */
export default function App({ Component, pageProps }) {
  //@ts-ignore
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />, pageProps)
}
