export const locales = ['ko', 'en', 'ja', 'uk', 'fr', 'es', 'de', 'zh'] as const
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
  zh: '中文'
} 