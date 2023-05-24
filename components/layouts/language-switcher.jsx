import Link from 'next/link'
import { useRouter } from 'next/router'

export const LanguageSwitcher = () => {
  const { asPath, locale, locales = [] } = useRouter()

  return (
    <ul>
      {locales.map((l) =>
        l !== locale ? (
          <li key={`language-switcher-${l}`}>
            <Link
              href={asPath}
              locale={l}
              className="text-lg font-mono text-neutral-600 hover:text-black self-start"
            >
              {l}
            </Link>
          </li>
        ) : null
      )}
    </ul>
  )
}
