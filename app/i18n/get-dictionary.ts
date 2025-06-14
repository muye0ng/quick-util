import { ValidLocale } from './settings'

export async function getDictionary(locale: ValidLocale) {
  return (await import(`../../messages/${locale}.json`)).default
} 