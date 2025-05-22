

export default function NotFoundPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <img src="/error-404.png" alt="404" className='w-50 h-50' />
        <h1 className='text-4xl font-bold text-gray-800'>Page not found</h1>
    </div>
  )
}
