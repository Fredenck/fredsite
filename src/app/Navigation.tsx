'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
 
export function Navigation({ navLinks }:{navLinks:any}) {
  const pathname = usePathname()
 
  return (
    <>
      {navLinks.map((link:any) => {
        const isActive = pathname.startsWith(link.href)
 
        return (
          <Link
            className={isActive ? 'text-blue' : 'text-black'}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        )
      })}
    </>
  )
}

export default function Navbar() {
    return (
        // {Navigation({})}
        <ul className='flex flex-row items-center mx-auto p-5'>
            <Link href="/" className="mr-5">Home</Link>
            <Link href="/blog" className="mr-5">Blog</Link>
        </ul>
    )
}