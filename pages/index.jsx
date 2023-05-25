// @ts-check
// @ts-ignore
import heroSrc from '~/public/hero.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Movies } from '~/components/movies'
import { DefaultLayout } from '~/components/layouts/default'
import { MovieListQuery } from '~/lib/queries'
import { client } from '~/lib/sanity-client'
import { PreviewBanner } from '~/components/layouts/preview-banner'
import { lazy } from 'react'
import { PreviewSuspense } from 'next-sanity/preview'
import useI18n from '~/lib/i18n'

const PreviewMovies = lazy(() => import('../components/preview-movies'))

/**
 *
 * @param {import('next').InferGetServerSidePropsType<typeof getStaticProps>} param0
 * @returns {import('react').ReactElement}
 */
export default function Home({ preview, movieList }) {
  // PreviewSuspense shows while movieList is being fetched
  // The fetch happens inside PreviewMovies
  const t = useI18n()
  return (
    <article>
      <section className="relative max-h-[52rem] overflow-hidden">
        <div className="absolute h-full w-full z-10 text-white flex items-center">
          <div className="w-full ml-12">
            <h1 className="text-6xl font-serif">{t`hero`}</h1>
            <p className="font-bold text-2xl py-4" data-testid="subtitle">
              This is the hero section.
            </p>
            <ul className="mt-5 flex gap-20">
              <li>
                <button
                  type="button"
                  className="text-3xl rounded-lg border-2 border-red-900 hover:border-red-600 border-solid py-2 px-4"
                >
                  Call to action
                </button>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-3xl block rounded-lg border-2 border-neutral-400 hover:border-neutral-200 border-solid py-2 px-4 "
                >
                  About us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="my-12 mx-auto bg-black">
          <Image
            src={heroSrc}
            alt="alt image"
            className="opacity-60 w-full"
            priority
          />
        </div>
      </section>
      <section className="mb-10">
        <h2 className="text-5xl font-serif pt-10 pl-10">Dynamic Content</h2>
        <p className="py-5 px-10 text-lg text-neutral-700">
          This content is coming from Sanity.{' '}
          {process.env.NODE_ENV !== 'production' && !preview && (
            <Link
              href="/api/preview"
              className="font-bold hover:underline decoration-double text-red-700"
            >
              Check preview mode.
            </Link>
          )}
        </p>
        {preview ? (
          <PreviewSuspense fallback="loading...">
            <PreviewMovies query={MovieListQuery} />
          </PreviewSuspense>
        ) : (
          <Movies movies={movieList} />
        )}
      </section>
      <section className="bg-black text-white grid place-items-center gap-16 py-10 mb-10">
        <h2 className="text-4xl font-serif">Don’t worry, be happy.</h2>
        <button
          type="button"
          className="bg-white text-black py-2 px-4 rounded-md text-3xl hover:bg-black hover:text-white hover:ring-2 hover:ring-white transition-colors"
        >
          Reserve a ticket
        </button>
        <p className="text-2xl">
          Make sure to come along. We have the best pieces.
        </p>
      </section>
    </article>
  )
}

/**
 *
 * @param {import('react').ReactElement} page
 * @param {Record<'preview', boolean>} param1
 * @returns
 */
Home.getLayout = function getLayout(page, { preview }) {
  return (
    <PreviewBanner preview={preview}>
      <DefaultLayout>{page}</DefaultLayout>
    </PreviewBanner>
  )
}

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return {
      props: { preview },
    }
  }

  const movieList = await client.fetch(MovieListQuery)

  return { props: { preview: false, movieList } }
}
