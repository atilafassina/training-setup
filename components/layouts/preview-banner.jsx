import Link from 'next/link'

export function PreviewBanner({ children, preview }) {
  return (
    <>
      {preview ? (
        <p className="px-5 py-2 bg-neutral-300 text-neutral-500 text-center w-full mb-6">
          You are now in preview mode.{' '}
          <Link href="/api/exit-preview" className="font-bold underline">
            Exit preview.
          </Link>
        </p>
      ) : null}
      {children}
    </>
  )
}
