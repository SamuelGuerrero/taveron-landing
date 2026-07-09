export const STORE_LINKS = {
  appStore: "https://apps.apple.com/mx/app/taveron/id6748623264",
  googlePlay:
    "https://play.google.com/store/apps/details?id=com.taveron.app&hl=es_MX",
} as const;

/** Route the download QR points to. */
export const DOWNLOAD_PATH = "/descargar";

/**
 * Resolves the store to send a device to based on its user agent.
 * Apple devices (iPhone, iPad, iPod, Mac) go to the App Store; everything
 * else goes to Google Play. iPadOS 13+ reports as "Macintosh", so it is
 * covered by the Mac match.
 */
export const getStoreUrl = (userAgent: string): string => {
  const isApple = /iPhone|iPad|iPod|Macintosh|Mac OS X/i.test(userAgent);
  return isApple ? STORE_LINKS.appStore : STORE_LINKS.googlePlay;
};
