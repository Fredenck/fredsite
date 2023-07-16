import { Metadata } from 'next'
import Navbar, { Navigation } from './Navigation'
 
export const metadata: Metadata = {
  title: 'Homepage',
}

export default function Home() {
  return (
    // p-24, h-[...] because h-screen conflcits with navbar height and leads to whitespace at the bottom
    <main className="flex flex-row justify-center h-[calc(100vh-64px)] p-24">
      <div className="w-full font-mono basis-4/6 pl-12">
        <h1 className="text-lg font-bold">Hi, it's Fred</h1>
        <br></br>
        <br></br>
        <p className='text-sm'>I've always wanted to make a personal website because it seemed cool.</p>
        <p className='text-sm'>It'll be like my little space on the internet.</p>
        <br></br>
        <br></br>
        <p className='text-sm'>I have good eyes</p>
        <p className='text-sm'>but need contacts</p>
        <br></br>
        <p className='text-sm'>I am introvert</p>
        <p className='text-sm'>but extroverted</p>
        <br></br>
        <p className='text-sm'>I make good decisions</p>
        <p className='text-sm'></p>
      </div>
      
      <img src="/aloha.jpg" alt="My face" className="h-full rounded-lg" />
    </main>
  )
}
