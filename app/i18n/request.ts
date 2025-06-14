import { getRequestConfig } from 'next-intl/server';
import { ValidLocale, defaultLocale } from './settings';

export default getRequestConfig(async ({ locale }) => {
  const validLocale = (locale || defaultLocale) as ValidLocale;
  
  const messages = (await import(`../../messages/${validLocale}.json`)).default;
  
  return {
    messages,
    locale: validLocale
  };
}); 