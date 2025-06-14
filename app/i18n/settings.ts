export const locales = ['ko', 'en', 'ja', 'uk', 'fr', 'es', 'de', 'vi', 'hi', 'id', 'zh'] as const
export type ValidLocale = typeof locales[number]

export const defaultLocale: ValidLocale = 'ko'

export const localeNames: Record<ValidLocale, string> = {
  ko: '한국어',
  en: 'English',
  ja: '日本語',
  uk: 'Українська',
  fr: 'Français',
  es: 'Español',
  de: 'Deutsch',
  vi: 'Tiếng Việt',
  hi: 'हिन्दी',
  id: 'Bahasa Indonesia',
  zh: '中文'
} 