import { Metadata } from 'next'
import pfp from '../public/aloha.jpg' 
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Homepage',
}

const Home = () => {
  return (
    // p-24, h-[...] because h-screen conflcits with navbar height and leads to whitespace at the bottom
    <main className="flex flex-col md:flex-row lg:flex-row md:justify-around lg:justify-around h-[calc(100vh-64px)] p-12 md:p-16 lg:p-24">
      <div className="w-full basis-2/6">
        <h1 className='text-lg font-bold'>Hey, it's Fred</h1>
        <br></br>
        <p>Welcome!</p>
        <br></br>
        <p className='text-sm'>This is a mix of cool projects I've done as well as a journal for me. Perhaps I'll separate these as professional/personal in the future.</p>
        <hr className="my-4 w-4/6" />
        <p className='text-sm'>I made this website with Next 13, Tailwind, and Contentlayer.</p>
        <br></br>
        <p className='text-sm'>I love trying new things! Last quarter I tried our Fencing and Volleyball! This quarter, I plan to continue fencing and get back into Tennis</p>
        
        <br></br>
        <p className='text-sm'>I also love Computer Science :). It's applicable everywhere and really gives a unique perspective on how you <em>think</em></p>
      </div>
      
      <Image
        alt="Aloha"
        className='rounded-lg object-scale-down pt-12 md:pt-0 lg:pt-0'
        // Importing an image will automatically set the width and height
        src={pfp}
        // Make the image display full width
        style={{
          height: '100%',
          width: 'auto',
        }}
        // Core Web Vitals: disable lazy loading for LCP
        priority={true}
      />

    </main>
  )
}

export default Home