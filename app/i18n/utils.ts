import { ValidLocale } from './settings'

export async function getDictionary(locale: ValidLocale) {
  return (await import(`./locales/${locale}.json`)).default
}

export function getLocaleFromPathname(pathname: string): ValidLocale {
  const segments = pathname.split('/')
  const locale = segments[1]
  return locale as ValidLocale
} 