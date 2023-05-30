import useI18n from '~/lib/use-i18n.js'
import i18nConfig from '~/i18n.js'
import dictionary from '~/lib/dictionary.js'

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    locale: i18nConfig.DEFAULT_LANGUAGE,
    locales: i18nConfig.SECONDARY_LANGUAGES,
  }),
}))

describe('when browser matches default', () => {
  test('key => value', () => {
    const t = useI18n()

    expect(t`testCall`).toMatch(dictionary.en.testCall)
  })

  test('if key does not exist in dictionary, print the key name', () => {
    const unexistingKey = 'wat'
    const t = useI18n()

    expect(t(unexistingKey)).toMatch(unexistingKey)
    expect(t`wat`).toMatch(unexistingKey)
  })
})
