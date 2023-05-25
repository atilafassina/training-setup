import { useRouter } from 'next/router'
import dictionary from './dictionary'

function isValidLang(lang = '') {
  return lang in dictionary
}

function isValidKey(dict, key) {
  const formattedKey = String(key)
  return formattedKey in dict
}

export default function useI18n() {
  const routerLocale = useRouter().locale
  const locale = isValidLang(routerLocale) ? routerLocale : 'en'
  const terms = dictionary[locale]

  return (key) => (isValidKey(terms, key) ? terms[key] : key)
}
