import { DefaultSeoProps } from 'next-seo';

export const SEO_CONFIG: DefaultSeoProps = {
  title: 'QuickUtil - Developer Tools',
  description: 'Fast & Modern Developer Utility Tools',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quickutil.com',
    site_name: 'QuickUtil',
    images: [
      {
        url: 'https://quickutil.com/og-image.png',
        alt: 'QuickUtil - Developer Tools',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    handle: '@quickutil',
    site: '@quickutil',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'JSON formatter, Base64 encoder, QR code generator, URL encoder, UUID generator, hash generator, password generator',
    },
    {
      name: 'application-name',
      content: 'QuickUtil',
    },
    {
      name: 'apple-mobile-web-app-title',
      content: 'QuickUtil',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'theme-color',
      content: '#3B82F6',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  defaultTitle: 'QuickUtil - Developer Tools',
  titleTemplate: '%s | QuickUtil',
};
