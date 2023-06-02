import { client } from '../../lib/sanity-client'
import Movie from '../../components/movie'
import { MovieDetailsQuery, MovieParamsQuery } from '../../lib/queries'

export default function Entry({ params }) {
  return <Movie slug={params.slug} />
}

export const generateStaticParams = async () => {
  const paths = await client.fetch(MovieParamsQuery)

  return paths.map(({ params }) => ({
    slug: params.slug,
  }))
}

export async function generateMetadata({ params }) {
  const movie = await client.fetch(MovieDetailsQuery, params)

  return {
    title: movie.title,
  }
}
