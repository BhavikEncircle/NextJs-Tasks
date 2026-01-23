'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className='w-3/4 mx-auto flex justify-between px-20 align-center mt-5 '>
        <div>
          <h3 className='font-bold text-xl text-gray-100'>Basic Next app</h3>
          <p className='text-gray-400'>&copy; all rights reserved.</p>
        </div>
        <div>
          <h3 className='text-xl font-bold text-gray-100'>Links </h3>
          <div className='text-gray-400 text-center flex flex-col hover:text-gray-300'>
            <Link href='/'>Home</Link>
          </div>
        </div>
        <div>
          <h3 className='text-xl font-bold text-gray-100'>Topics we learned</h3>
          <ul className='text-gray-400 text-center'>
            <li>Server Actions</li>
            <li>API Routes</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
