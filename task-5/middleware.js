import { NextResponse } from 'next/server'

export function middleware(request) {
  const user = request.cookies.get('user')
  const url = request.nextUrl.clone()

  // If user is not authenticated and trying to access dashboard, redirect to login
  if (!user && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Allow access if user is authenticated or accessing non-protected routes
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
