import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 현재 설정된 언어 확인
  const locale = request.cookies.get('NEXT_LOCALE')?.value

  // 언어가 설정되어 있지 않은 경우에만 브라우저 언어 확인
  if (!locale) {
    const acceptLanguage = request.headers.get('accept-language')
    const browserLang = acceptLanguage?.startsWith('ko') ? 'ko' : 'en'
    
    const response = NextResponse.next()
    response.cookies.set('NEXT_LOCALE', browserLang, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365, // 1년
    })
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 