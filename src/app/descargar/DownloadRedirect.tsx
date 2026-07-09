"use client";

import { useEffect } from "react";
import { getStoreUrl } from "~/config/download";

/**
 * Detects the device OS on mount and redirects to the matching store.
 * Rendered on the /descargar page (the target of the download QR), so a
 * phone that scans the code lands straight on App Store or Google Play.
 * The store buttons on the page act as a fallback.
 */
export const DownloadRedirect = () => {
  useEffect(() => {
    window.location.replace(getStoreUrl(navigator.userAgent));
  }, []);

  return null;
};
