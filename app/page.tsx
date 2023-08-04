import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Homepage',
}

export default function Home() {
  return (
    // p-24, h-[...] because h-screen conflcits with navbar height and leads to whitespace at the bottom
    <main className="flex flex-row justify-center h-[calc(100vh-64px)] p-24">
      <div className="w-full font-mono basis-4/6 pl-12">
        <h1 className='text-lg font-bold'>Hey, it's Fred</h1>
        <br></br>
        <p className='text-sm' font-bold>This is the fredsite</p>
        <hr className="my-4 w-4/6" />
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

      {/* <div className='flex flex-row justify-center'>
          <img src="/snowy-view.jpg" alt="alt" className='w-1/4 object-scale-down rounded-lg m-8'></img>
          <img src="/deer.jpg" alt="alt" className='w-1/4 object-scale-down rounded-lg m-8'></img>
          <img src="/snowy.jpg" alt="alt" className='w-1/4 object-scale-down rounded-lg m-8'></img>
      </div> */}

    </main>
  )
}
