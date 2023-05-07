// @ts-check
// @ts-ignore
import heroSrc from '~/public/hero.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { Movies } from '~/components/movies'
import { DefaultLayout } from '~/components/layouts/default'

/**
 *
 * @param {import('next').InferGetServerSidePropsType<typeof getStaticProps>} param0
 * @returns {import('react').ReactElement}
 */
export default function Home({ preview, movieList }) {
  // PreviewSuspense shows while movieList is being fetched
  // The fetch happens inside PreviewMovies
  return (
    <DefaultLayout>
      <article>
        <section className="relative max-h-[52rem] overflow-hidden">
          <div className="absolute h-full w-full z-10 text-white flex items-center">
            <div className="w-full ml-12">
              <h2 className="text-6xl font-serif">This is the Hero section</h2>
              <p className="font-bold text-2xl py-4">
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
            This content is coming from Sanity.
          </p>
          <Movies movies={movieList} />
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
    </DefaultLayout>
  )
}

export const getStaticProps = async () => {
  return { props: { preview: false, movieList: [] } }
}
