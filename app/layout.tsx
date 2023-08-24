import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from './Navigation'
import { Analytics } from '@vercel/analytics/react';

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
    <html lang="en" className={inter.className}>
      <meta name="google-site-verification" content="aLgGbe1NSIRALGjDoUqY5ZQLutGaTlmPZ-48x3YSp2o" />
      <body className='bg-slate-50'>
        <Navbar/>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout