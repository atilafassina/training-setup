import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import { client } from '~/lib/sanity-client'
import { Movie } from '~/components/movie'
import { MovieDetailsQuery, MovieParamsQuery } from '~/lib/queries'
import { DefaultLayout } from '~/components/layouts/default'
import { PreviewBanner } from '~/components/layouts/preview-banner'

const PreviewMovie = lazy(() => import('~/components/movie'))

export default function Entry({ preview, movie, queryParams }) {
  return (
    <>
      {preview ? (
        <PreviewSuspense fallback="Loading...">
          <PreviewMovie query={MovieDetailsQuery} queryParams={queryParams} />
        </PreviewSuspense>
      ) : (
        <Movie movie={movie} />
      )}
    </>
  )
}

Entry.getLayout = function getLayout(page, { preview }) {
  return (
    <PreviewBanner preview={preview}>
      <DefaultLayout>{page}</DefaultLayout>
    </PreviewBanner>
  )
}

export const getStaticPaths = async () => {
  const paths = await client.fetch(MovieParamsQuery)

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params, preview = false }) => {
  const queryParams = { slug: params?.slug ?? '' }

  if (preview) {
    return { props: { preview, queryParams } }
  }

  const movie = await client.fetch(MovieDetailsQuery, queryParams)

  return {
    props: {
      preview,
      movie,
      queryParams,
    },
  }
}
