import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'a/styles/globals.css'
import SessionProvider from 'a/common/auth/SessionProvider'
import { getServerSession } from 'next-auth'
import { ThemeProvider } from 'a/common/theme/themeProvider'
import { cn } from 'a/common/utils'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime web site demo',
  description: 'Your favorite anime, all in one place.',
}

export default async function RootLayout({
  children,
}: React.PropsWithChildren) {
  const session = await getServerSession();
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={cn(' antialiased', inter.className)}>
          <ThemeProvider>
            <SessionProvider session={session}>
                    {children}
            </SessionProvider>
          </ThemeProvider>
        </body>
      </html>
  )
}
