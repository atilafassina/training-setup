import { render, screen } from '@testing-library/react'
import RootPage from '~/pages/index'

jest.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    locale: 'en',
    locales: ['pt', 'es'],
  }),
}))

describe('Home Page with no external data', () => {
  beforeEach(() => {
    render(<RootPage preview={false} movieList={[]} />)
  })

  test('renders hero section', () => {
    const subtitle = screen.getByTestId('subtitle')

    expect(subtitle).toBeInTheDocument()
  })
})
