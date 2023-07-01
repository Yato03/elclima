import './globals.css'
import { Inter } from 'next/font/google'
import { Navigation } from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El Clima',
  description: 'El clima en España',
  charset: 'utf-8'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <Navigation/>
        </header>
        {children}
      </body>
    </html>
  )
}
