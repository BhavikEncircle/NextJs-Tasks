'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className='w-3/4 mx-auto flex justify-between px-20 align-center mt-5 '>
        <div>
          <h3 className='font-bold text-xl'>Basic Next app</h3>
          <p className='text-zinc-600'>&copy; all rights reserved.</p>
        </div>
        <div>
          <h3 className='text-xl font-bold'>Links </h3>
          <div className='text-zinc-500 text-center flex flex-col'>
            <Link href='/'>Home</Link>
            <Link href='/products'>Products</Link>
          </div>
        </div>
        <div>
          <h3 className='text-xl font-bold'>Topics we learned</h3>
          <ul className='text-zinc-500 text-center'>
            <li>Routing</li>
            <li>RSC</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
