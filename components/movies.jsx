import { toPlainText } from '@portabletext/react'
import Link from 'next/link'
import { SanityImage } from './sanity-image'
import { client } from '~/lib/sanity-client'
import { MovieListQuery } from '~/lib/queries'

export async function Movies() {
  const movies = await client.fetch(MovieListQuery)

  return (
    <ul className="grid md:grid-cols-2 gap-8 p-10">
      {movies.map((movie) => (
        <li
          key={movie._id}
          className="pt-4 border-neutral-200 border-2 bg-white group"
        >
          <SanityImage
            src={movie.poster}
            width={500}
            height={300}
            className="rounded-md mx-auto my-5 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110"
            alt={`poster for ${movie.title}`}
          />
          <div className="bg-neutral-200 py-6 px-16">
            <Link href={movie.slug.current}>
              {movie.title && <h2 className="text-3xl pb-5">{movie.title}</h2>}
            </Link>
            <span>{toPlainText(movie.overview).substring(0, 90)}...</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
