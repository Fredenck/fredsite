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
      <div className="w-full font-mono basis-2/6">
        <h1 className='text-lg font-bold'>Hey, it's Fred</h1>
        <br></br>
        <p className='text-sm' font-bold>This is the fredsite</p>
        <hr className="my-4 w-4/6" />
        <br></br>
        <p className='text-sm'>I'm a current UCLA sophomore studying computer science.</p>
        <br></br>
        <p className='text-sm'>I see programming as a tool and computer science as the area of study to solve problems with this tool.</p>
        <br></br>
        <p className='text-sm'>Currently, I have a lot of interests. Probably too many. 
        That's probably why I like computer science; it's applicable to anything</p>
      </div>
      
      {/* <img src="/aloha.jpg" alt="My face" className="h-full rounded-lg" /> */}
      <Image
        alt="Aloha"
        className='rounded-lg object-scale-down pt-12 md:pt-0 lg:pt-0'
        // Importing an image will
        // automatically set the width and height
        src={pfp}
        // Make the image display full width
        style={{
          height: '100%',
          width: 'auto',
        }}
      />

      {/* <div className='flex flex-row justify-center'>
          <img src="/snowy-view.jpg" alt="alt" className='w-1/4 object-scale-down rounded-lg m-8'></img>
          <img src="/deer.jpg" alt="alt" className='w-1/4 object-scale-down rounded-lg m-8'></img>
          <img src="/snowy.jpg" alt="alt" className='w-1/4 object-scale-down rounded-lg m-8'></img>
      </div> */}

    </main>
  )
}

export default Home