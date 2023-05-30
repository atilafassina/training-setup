import { Movies } from '~/components/movies'
import { render, screen } from '@testing-library/react'

const MOCK_MOVIE = {
  _id: 'mock-movie',
  title: 'The Adventures of Nobody',
  slug: {
    current: 'adventures',
  },
  overview: 'Movie summary',
}

describe('testing the language switcher', () => {
  test('renders languages', () => {
    render(<Movies movies={[MOCK_MOVIE]} />)

    const movieList = screen.getByTestId('movie-list')

    expect(movieList).toBeInTheDocument()
  })
})
