import { client } from '~/lib/sanity-client'
import { Movie } from '~/components/rsc-movie'
import { MovieDetailsQuery, MovieParamsQuery } from '~/lib/queries'

export default async function Entry({ params }) {
  return <Movie slug={params.slug} />
}

export async function generateMetadata({ params }) {
  const movie = await client.fetch(MovieDetailsQuery, params)

  return {
    title: movie.title,
  }
}

export async function generateStaticParams() {
  const paths = await client.fetch(MovieParamsQuery)

  return paths.map(({ params }) => ({
    slug: params.slug,
  }))
}
