import { LanguageSwitcher } from './language-switcher.jsx'
import { render, screen } from '@testing-library/react'
import i18nConfig from '~/i18n.js'

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    locale: i18nConfig.DEFAULT_LANGUAGE,
    locales: i18nConfig.SECONDARY_LANGUAGES,
  }),
}))

describe('testing the language switcher', () => {
  test('renders languages', () => {
    render(<LanguageSwitcher />)

    const languageSwitchers = screen.getAllByTestId('locale-link')

    expect(languageSwitchers.length).toEqual(
      i18nConfig.SECONDARY_LANGUAGES.length
    )
  })
})
