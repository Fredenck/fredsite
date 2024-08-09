import { Metadata } from 'next'
// import pfp from '../public/aloha.jpg' 
import pfp from '../public/homepage4.jpg'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Homepage',
}

const Home = () => {
  return (
    // p-24, h-[...] because h-screen conflcits with navbar height and leads to whitespace at the bottom
    <main className="flex flex-col lg:flex-row lg:justify-around h-[calc(100vh-64px)] p-12 lg:py-24 lg:px-36">
      <div className="w-11/12 lg:w-5/12">
        <h1 className='text-lg font-bold'>I'm Fred</h1>
        <br></br>
        <p>Heyyyyy</p>
        <br></br>
        <p className='text-sm'>This is a mix of cool projects I've done as well as a journal for me. Perhaps I'll separate these as professional/personal in the future.</p>
        <hr className="my-4 w-4/6" />
        <p className='text-sm'>I made this website with Next 13, Tailwind, and Contentlayer.</p>
        <br></br>
        <p className='text-sm'>I love trying new things! Life is all about experiences and I try to gather all that I can.</p>
      </div>
      
      <div className='flex-col'>
        <Image
          alt="mirror selfie on my 20th bday"
          className='rounded-lg object-scale-down pt-12 lg:pt-0'
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
        {/* <p className='text-sm text-center mt-4'>me on my 20th birthday &gt;:)</p> */}
      </div>

    </main>
  )
}

export default Home