"use client";
import Script from "next/script";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { pageView } from "@/lib";

function GoogleAnalytics({
  GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID?: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams !== null && GA_MEASUREMENT_ID) {
      const url = pathname + searchParams.toString();
      pageView(GA_MEASUREMENT_ID, url);
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID]);
  if (!GA_MEASUREMENT_ID) return null;
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });

                gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                });
                `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
