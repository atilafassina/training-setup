// @ts-check
import { useRouter } from 'next/router'
import { AlternateUrls } from '~/components/alternate-urls'
import '~/lib/globals.css'

/**
 *
 * @param {import('next/app').AppProps} appProps
 * @returns
 */
export default function App({ Component, pageProps }) {
  //@ts-ignore
  const getLayout = Component.getLayout ?? ((page) => page)
  const { asPath } = useRouter()
  return getLayout(
    <>
      <AlternateUrls pathname={asPath} />
      <Component {...pageProps} />
    </>,
    pageProps
  )
}
