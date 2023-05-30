// @ts-check
import { useRouter } from 'next/router'
import dictionary from './dictionary'
import i18nConfig from '~/i18n.js'

/**
 *
 * @param {string} lang
 * @returns {boolean}
 */
function isValidLang(lang = '') {
  return lang in dictionary
}

/**
 *
 * @param {{ [key: string ]: { [key: string]: string }}} dict
 * @param {string} key
 * @returns {boolean}
 */
function isValidKey(dict, key) {
  const formattedKey = String(key)
  return formattedKey in dict
}

export default function useI18n() {
  const routerLocale = useRouter().locale
  const locale = isValidLang(routerLocale)
    ? routerLocale
    : i18nConfig.DEFAULT_LANGUAGE
  const terms = dictionary[locale]

  /**
   * @param {string | TemplateStringsArray} key
   * @returns {string}
   */
  return (key) => {
    key = String(key)
    const translation = isValidKey(terms, key) ? terms[key] : key
    return Array.isArray(translation) ? translation[0] : translation
  }
}
