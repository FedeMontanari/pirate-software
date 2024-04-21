"use client";

import Script from "next/script";

export default function AnalyticsRewrite() {
  const isDev = process.env.NEXT_PUBLIC_VERCEL_ENV === "development";

  const beforeSend = (event: string) => {
    console.log("add custom beforeSend logic here");
    return event;
  };

  const src = isDev
    ? "https://va.vercel-scripts.com/v1/script.debug.js"
    : "/growth/script.js";

  if (typeof window !== "undefined") {
    window.va?.("beforeSend", beforeSend);
  }

  return (
    <>
      <Script id="meow" strategy="afterInteractive">
        {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
      </Script>
      <Script src={src} data-endpoint="/growth" strategy="lazyOnload" async />
    </>
  );
}
