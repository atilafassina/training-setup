import PortableText from './portable-text'
import { SanityImage } from './sanity-image'
import { MovieDetailsQuery } from '~/lib/queries'
import { client } from '~/lib/sanity-client'

export default async function Movie({ slug }) {
  const movie = await client.fetch(MovieDetailsQuery, { slug })
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
        <PortableText portableText={movie.overview} />
      </article>
    </div>
  )
}
