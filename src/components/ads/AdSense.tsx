import Script from 'next/script';

const AD_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
const AD_SLOT = process.env.NEXT_PUBLIC_ADSENSE_SLOT;

export default function AdSense() {
  if (!AD_CLIENT || !AD_SLOT) {
    return null;
  }

  return (
    <div className="w-full">
      <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`}
        strategy="lazyOnload"
        onError={(err) => console.error('AdSense script failed to load:', err)}
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <Script
        id="ad-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({});
          `,
        }}
      />
    </div>
  );
}
