import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function PageView() {
  return (
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
    />
  );
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type EventProps = {
  action: string;
  category?: string;
  label?: string;
  value?: string | number;
};

export function Event({ action, category, label, value }: EventProps) {
  return (
    <Script
      id="event"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.gtag('event', '${action}', {
            event_category: '${category}',
            event_label: ${label ? `'${label}'` : 'undefined'},
            value: ${value ? value : 'undefined'},
          });
        `,
      }}
    />
  );
}
