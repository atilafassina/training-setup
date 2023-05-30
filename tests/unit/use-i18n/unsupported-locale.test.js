import useI18n from '~/lib/use-i18n.js'
import dictionary from '~/lib/dictionary.js'

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    locale: 'fallback-test-lang',
    locales: ['nl'],
  }),
}))

describe('when browser has unsupported language', () => {
  test('default takes over', () => {
    // browser has English as default
    const t = useI18n()

    // useRouter default is `fallback-test-lang`
    expect(t`testCall`).toMatch(dictionary['fallback-test-lang'].testCall)
  })
})
