import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El Clima',
  description: 'El clima en España',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navigation/>
        </header>
        {children}
      </body>
    </html>
  )
}
