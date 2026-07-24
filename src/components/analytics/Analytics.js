import Script from "next/script";
import RouteChangeTracker from "./RouteChangeTracker";

/**
 * GA4 + Meta Pixel, entirely env-driven. Nothing loads unless the matching
 * env var is set, so this is safe to ship dormant and activates the moment
 * you add the IDs in Vercel + redeploy.
 *
 *   NEXT_PUBLIC_GA_ID           e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID   e.g. 123456789012345
 *
 * Conversion events fire through src/lib/analytics.js `track()` to both gtag
 * and fbq. The Pixel loads now (dormant until ID set) so every 2026 visitor
 * becomes a 2027 retargeting-audience member from day one.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function Analytics() {
  return (
    <>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {PIXEL_ID && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${PIXEL_ID}');
              fbq('track', 'PageView');
            `}
          </Script>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      <RouteChangeTracker />
    </>
  );
}
