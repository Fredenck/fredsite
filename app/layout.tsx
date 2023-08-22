import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fredsite',
  description: 'Frederick\'s website',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className='bg-slate-50'>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}

export default RootLayout