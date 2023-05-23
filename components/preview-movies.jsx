import { Movies } from './movies'
import { usePreview } from './sanity-preview'

export default function PreviewMovies({ query }) {
  const data = usePreview(null, query)

  return <Movies movies={data} />
}
