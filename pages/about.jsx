import { DefaultLayout } from '~/components/layouts/default'

export default function About() {
  return (
    <DefaultLayout>
      <article className="prose">
        <h1>Hello world</h1>
        <p>This is a completely static page</p>
      </article>
    </DefaultLayout>
  )
}
