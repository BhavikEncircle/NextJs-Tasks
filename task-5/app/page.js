export default function Home() {
  return (
    <div>
      <div className='h-180 w-3/4 px-20 mt-10 text-center mx-auto flex flex-col justify-center'>
        <h1 className='text-3xl font-bold'>Welcome to Home page</h1>
        <br></br>
        <h2 className='text-2xl'>Please Log in to view the Dashboard.</h2>
        <br></br>
        <h3 className='text-xl'>
          <a href='/login' className='text-blue-500 mx-1'>
            Click here
          </a>
          to login.
        </h3>
      </div>
    </div>
  )
}
