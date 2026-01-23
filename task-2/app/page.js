import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-180 w-3/4 px-20 mt-10 mx-auto flex flex-col justify-center text-center'>
      <h1 className='text-3xl font-bolder'>Welcome to the Home page.</h1>
      <br></br>
      <h2 className='font-bold text-2xl'>
        <Link
          href='/products'
          className='p-2 text-white bg-blue-500 rounded-lg mx-2'
        >
          Click here
        </Link>
        to explore our products now.
      </h2>
    </div>
  )
}
