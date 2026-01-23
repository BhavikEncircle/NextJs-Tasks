'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(formData) {
  const username = formData.get('username')
  const password = formData.get('password')

  if (username !== 'admin' || password !== '123456') {
    throw new Error('Invalid credentials')
  }

  const cookieStore = await cookies()
  cookieStore.set('user', JSON.stringify({ username }), { httpOnly: true })

  redirect('/dashboard')
}
export async function logout() {
  'use server'
  const cookieStore = await cookies()
  cookieStore.delete('user')
  redirect('/login')
}
