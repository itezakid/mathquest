// middleware.ts — Route protection
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_ROUTES = ['/', '/auth/login', '/auth/callback']

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({ request: { headers: request.headers } })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({ request: { headers: request.headers } })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  const { data: { session } } = await supabase.auth.getSession()
  const { pathname } = request.nextUrl

  // DEBUG — hapus setelah fix
  console.log('[middleware]', pathname, 'session:', !!session, 'isPublic check:', pathname.startsWith('/auth'))

  // Redirect ke login jika belum auth dan akses protected route
  const isPublic = PUBLIC_ROUTES.some(route => pathname === route || pathname.startsWith('/auth'))
  if (!session && !isPublic) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  // Redirect ke dashboard jika sudah auth dan akses public route
  if (session && (pathname === '/' || pathname === '/auth/login')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
