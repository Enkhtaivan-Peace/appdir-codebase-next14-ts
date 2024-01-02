import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'a/styles/globals.css'
import Hero from 'a/components/layout/Hero'
import Footer from 'a/components/layout/footer/Footer'
import Header from 'a/components/layout/header/Header'
import SessionProvider from 'a/common/auth/SessionProvider'
import { getServerSession } from 'next-auth'
import ClientHeader from 'a/components/layout/header/ClientHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime web site demo',
  description: 'Your favorite anime, all in one place.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
      <html lang="en">
        <body className={inter.className}>
          <SessionProvider session={session}>
            <ClientHeader>
                <Header />
            </ClientHeader>
              <Hero />
                  {children}
              <Footer />
          </SessionProvider>
        </body>
      </html>
  )
}
