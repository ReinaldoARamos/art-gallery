import './globals.css'
// import type { Metadata } from 'next'
import { Lato } from 'next/font/google'
import Header from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import Providers from './Providers'

const lato = Lato({ subsets: ['latin'], weight: '400' })

// const queryClient = new QueryClient()
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />

        <Providers>{children}</Providers>

        <Footer />
      </body>
    </html>
  )
}
