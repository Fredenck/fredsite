import { Metadata } from 'next'
import Navbar, { Navigation } from './Navigation'
 
export const metadata: Metadata = {
  title: 'Homepage',
}

export default function Home() {
  return (
    // p-24, h-[...] because h-screen conflcits with navbar height and leads to whitespace at the bottom
    <main className="flex flex-row items-center justify-between p-36 h-[calc(100vh-64px)]">
      <div className="w-full font-mono basis-4/6">
        <h1 className="font-bold">Hi, it's Fred</h1>
        <br></br>
        <p className='text-sm'>
          I've always wanted to make a personal website because it seemed 
          cool: like a little space for me on the internet to call home. 
        </p>
      </div>
      
      <img src="/aloha.jpg" alt="My face" className="h-full rounded-lg" />
    </main>
  )
}
