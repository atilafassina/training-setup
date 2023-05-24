import Head from 'next/head'
import i18n from '../i18n'
export const AlternateUrls = ({ pathname = '' }) => {
  return (
    <Head>
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`}
        key="x-default-hreflang"
      />
      <link
        rel="alternate"
        hrefLang={i18n.DEFAULT_LANGUAGE}
        href={`${process.env.NEXT_PUBLIC_SITE_URL}${pathname}`}
        key="default-language-hreflang"
      />

      {i18n.SECONDARY_LANGUAGES.map((lang) => (
        <link
          rel="alternate"
          hrefLang={lang}
          href={`${process.env.NEXT_PUBLIC_SITE_URL}/${lang}${pathname}`}
          key={`${lang}-hreflang`}
        />
      ))}
    </Head>
  )
}
