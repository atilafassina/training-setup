import Head from 'next/head'
import { SanityImage } from './sanity-image'
import { usePreview } from '~/lib/sanity-preview'

export default function PreviewMovie({ query, queryParams }) {
  const data = usePreview(null, query, queryParams)

  return <Movie movie={data} />
}

function MovieInfo({ movie }) {
  return (
    <div>
      <header className="grid place-items-center">
        <SanityImage
          className=" rounded-br-2xl rounded-tl-2xl"
          src={movie.poster}
          width={600}
          height={300}
          alt={movie.title}
        />
        <h1 className="text-6xl font-serif text-center py-8 ">{movie.title}</h1>
      </header>
      <article className="max-w-prose w-full mx-auto prose">
        overview movie title
      </article>
    </div>
  )
}

export function Movie({ movie }) {
  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <MovieInfo movie={movie} />
    </>
  )
}
