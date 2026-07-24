"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Fires a page_view on client-side route changes (Next navigations don't
 * reload the page, so the GA/Pixel loaders only fire once on first paint).
 * No-ops safely if analytics isn't configured.
 */
export default function RouteChangeTracker() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (first.current) {
      first.current = false; // initial PageView already sent by the loaders
      return;
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", { page_path: pathname });
    }
    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);
  return null;
}
