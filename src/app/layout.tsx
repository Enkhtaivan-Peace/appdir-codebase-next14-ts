import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'a/styles/globals.css'
import SessionProvider from 'a/common/auth/SessionProvider'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime web site demo',
  description: 'Your favorite anime, all in one place.',
}

export default async function RootLayout({
  children,
}: JsxChildren) {
  const session = await getServerSession();
  return (
      <html lang="en">
        <body className={inter.className}>
          <SessionProvider session={session}>
                  {children}
          </SessionProvider>
        </body>
      </html>
  )
}
