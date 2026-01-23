import { cookies } from 'next/headers'
import { logout } from '../actions/auth'

export default async function Dashboard() {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('user')

  const user = userCookie ? JSON.parse(userCookie.value) : null

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-800'>
      <div className='bg-gray-700 p-8 rounded-xl shadow-lg w-full max-w-md text-center'>
        <h1 className='text-3xl font-bold text-gray-200 mb-4'>Dashboard</h1>

        <p className='text-gray-300 text-2xl mb-6'>
          Welcome, <span className='font-semibold'>{user?.username}</span>
        </p>

        <form action={logout}>
          <button
            type='submit'
            className='w-full bg-red-500 text-white py-2 rounded-lg font-medium hover:bg-red-600 transition'
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  )
}
