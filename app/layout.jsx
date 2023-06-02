import Link from 'next/link'
import MetLogo from '~/components/met-logo'
import '~/lib/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="bg-white min-h-screen grid grid-rows-[auto_1fr_auto] overflow-x-hidden">
          <header className="flex justify-between items-center mt-5 px-16">
            <Link href="/">
              <MetLogo />
            </Link>
          </header>
          {children}
          <footer className="mt-5 py-3 grid place-items-center">
            <small>
              © Copyright, Copyleft, Copycenter. All the copies reserved.
            </small>
          </footer>
        </main>
      </body>
    </html>
  )
}
