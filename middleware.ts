import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './app/i18n/settings'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always'
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}

function getLocale(request: NextRequest) {
  const acceptLang = request.headers.get('accept-language')
  if (!acceptLang) return defaultLocale
  const preferred = acceptLang.split(',').map(l => l.split(';')[0].trim())
  const localesArr = Array.from(locales) as string[];
  const found = preferred.find(lang =>
    localesArr.includes(lang) || localesArr.includes(lang.split('-')[0])
  )
  return found ? (localesArr.includes(found) ? found : found.split('-')[0]) : defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next()
  }
  const locale = getLocale(request)
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}
