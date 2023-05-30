import Head from 'next/head'
import Link from 'next/link'
import { SanityImage } from './sanity-image'

export function Movies({ movies = [] }) {
  return (
    <>
      <Head>
        <title>{`${movies?.length} Movies`}</title>
      </Head>
      <ul data-testid="movie-list" className="grid md:grid-cols-2 gap-8 p-10">
        {movies.length >= 1 &&
          movies.map((movie) => (
            <li
              key={movie._id}
              className="pt-4 border-neutral-200 border-2 bg-white group"
            >
              {movie.poster && (
                <SanityImage
                  src={movie.poster}
                  width={500}
                  height={300}
                  className="rounded-md mx-auto my-5 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110"
                  alt={`poster for ${movie.title}`}
                />
              )}
              <div className="bg-neutral-200 py-6 px-16">
                <Link href={movie.slug.current}>
                  {movie.title && (
                    <h2 className="text-3xl pb-5">{movie.title}</h2>
                  )}
                </Link>
                <span>{'movie title overview'.substring(0, 90)}...</span>
              </div>
            </li>
          ))}
      </ul>
    </>
  )
}
