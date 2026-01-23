'use client'

export default function Error({ error, reset }) {
  return (
    <div className='p-10 text-center'>
      <h2 className='text-xl font-bold mb-4'>Something went wrong!</h2>

      <button
        onClick={() => reset()}
        className='px-4 py-2 bg-black text-white rounded'
      >
        Try again
      </button>
    </div>
  )
}
