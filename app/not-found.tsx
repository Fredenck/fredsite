
 
export default function NotFound() {
  return (
    // bad spaghetti code h-[calc(100vh-64px)] to "center" not found message
    <div className='flex flex-col h-[calc(100vh-96px)] items-center justify-center'>
      <h2 className='text-2xl font-medium'>404 Not Found</h2>
      <p>Sorry man, this page doesn't exist yet (or at all).</p>
    </div>
  )
}