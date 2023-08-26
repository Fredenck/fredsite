// 'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Popout from '../public/arrow-up-right.svg'

export const Navbar = () => {
    return (
      // <nav className='flex flex-row justify-end pr-64 py-5 font-mono'>
      <nav className='flex flex-row justify-center py-5 font-mono'>
          <Link href='/' className='mx-4'>Home</Link>
          <Link href='/projects' className='mx-4'>Projects</Link>
          <Link href='/blog' className='mx-4'>Blog</Link>
          <Link href='https://github.com/Fredenck' target='_blank' className='mx-4'>
            GitHub
            <Image src={Popout} alt='popout' className='inline -translate-y-1.5 w-3 h-3'/>
            {/* <span className='material-symbols-outlined'>open_in_new</span> */}
          </Link>
          <Link href={'https://medal.tv/u/nutsz'} className='mx-4'>
            Medal
            {/* <sup></sup> */}
            <Image src={Popout} alt='popout' className='inline -translate-y-1.5 w-3 h-3'/>
          </Link>
      </nav>
    )
}