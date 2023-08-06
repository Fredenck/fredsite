// 'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    return (
      // <nav className='flex flex-row justify-end pr-64 py-5 font-mono'>
      <nav className='flex flex-row justify-center py-5 font-mono'>
          <Link href="/" className="mx-4">Home</Link>
          <Link href="/projects" className="mx-4">Projects</Link>
          <Link href="/blog" className="mx-4">Blog</Link>
          <Link href="https://github.com/Fredenck" target="_blank" className="mx-4">GitHub</Link>
      </nav>
    )
}