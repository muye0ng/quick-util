declare module 'workbox-precaching';

declare module 'workbox-routing';

declare module 'workbox-strategies';

interface Window {
  __WB_MANIFEST: any;
  skipWaiting: () => void;
}
