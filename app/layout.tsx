import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScaleOS.io",
  description: "ScaleOS.io",
  openGraph: {
    title: "ClarityScalesoftware.io",
    description: "ClarityScalesoftware.io",
    images: [
      {
        url: '/titlelogo.png',
        width: 800,
        height: 600,
        alt: 'ClarityScale Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ClarityScalesoftware.io",
    description: "ClarityScalesoftware.io",
    images: ['/titlelogo.png'],
  },
  icons: {
    icon: '/titlelogo.png',
    shortcut: '/titlelogo.png',
    apple: '/titlelogo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-wf-page="6882a9e95dcd0d3fa9826b02" data-wf-site="6882a9e95dcd0d3fa9826ac8" suppressHydrationWarning>
      <head>
        <link href="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/css/clarityscalesoftware.webflow.shared.ed4b54830.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />

        <style dangerouslySetInnerHTML={{
          __html: `
            /* Prevent horizontal scrolling globally - but allow vertical scrolling */
            html, body { overflow-x: hidden !important; overflow-y: auto !important; width: 100% !important; max-width: 100vw !important; }
            * { max-width: 100%; box-sizing: border-box; }
            section, main, header, footer { overflow-x: hidden !important; }

            /* Fix: circles must keep equal width+height — max-width:100% on * was squashing them oval */
            .circle, .circle._01, .circle._02, .circle._04, .circle._05,
            .circle._06, .circle._07, .circle._08, .circle._09, .circle._10,
            .circle._12, .circle._13, .circle._14, .circle._15, .circle._16 {
              max-width: none !important;
              aspect-ratio: 1 / 1 !important;
              flex-shrink: 0 !important;
            }
            
            .navbar, .section { display: block !important; visibility: visible !important; }
        .navbar {position: fixed !important; top: 0 !important; opacity: 1 !important; z-index: 1000 !important; }
        /* ONLY html/body control scroll — sections/wrappers are fully visible so hero blur is never clipped */
        .section {position: relative !important; opacity: 1 !important; overflow: visible !important; }
        .wrapper, .container { overflow: visible !important; }
        /* Navbar: fixed, always on top, never clipped */
        .navbar, .w-nav, .navbar *, .w-nav * { overflow: visible !important; }
        .navbar * {opacity: 1 !important; visibility: visible !important; }

        /* Force visibility on everything EXCEPT gsap-blur-reveal + other custom animated elements */
        .hero-section-wrapper, .section *:not(.animate-me):not(.tip-tool-holder):not(.tip-tool-container):not(.gsap-blur-reveal) {opacity: 1 !important; visibility: visible !important; filter: none !important; }

        /* gsap-blur-reveal elements: GSAP owns opacity, filter, visibility — no forced overrides */
        .gsap-blur-reveal { /* intentionally left empty — GSAP controls these via inline style */ }

        /* Ensure explicit visibility for containers */
        .home-text-holder, .hero-dashboard-wrapper, .hero-icons-holder, .hero-text-holder {opacity: 1 !important; visibility: visible !important; filter: none !important; }

        /* Allow filters on animated elements, force off for others */
        .hero-title:not(.animate-me), .paragraph-l:not(.animate-me), .button-holder:not(.animate-me), .home-text-container:not(.animate-me), .home-pragraph-holder:not(.animate-me) {filter: none !important; }

        /* Force logo containers and static images to be visible */
        .cube-rotate-holder, .cube-image, .meeting-card, .card-holder {opacity: 1 !important; visibility: visible !important; filter: none !important; display: block !important; }

        /* Safe visibility for logo containers (preserving filters/flex) */
        .hero-logo-container, .hero-logo {opacity: 1 !important; visibility: visible !important; }
        `}} />
        <Script src="/assets/ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js" strategy="beforeInteractive" />
        <Script id="webfont-load" strategy="beforeInteractive">
          {`WebFont.load({  google: {    families: ["Inter:100,200,300,regular,500,600,700,800,900","Manrope:200,300,regular,500,600,700,800"]  }});`}
        </Script>
        <Script id="webflow-mod" strategy="beforeInteractive">
          {`!function(o,c){var n=c.documentElement,t=" w-mod-";n.className+=t+"js",("ontouchstart"in o||o.DocumentTouch&&c instanceof DocumentTouch)&&(n.className+=t+"touch")}(window,document);`}
        </Script>
        <Script id="nocodelytics" src="/assets/tracker.nocodelytics.com/api/tracker/assets/nocodelytics.js" strategy="lazyOnload" async />
        <Script id="webflow-currency" strategy="beforeInteractive">
          {`window.__WEBFLOW_CURRENCY_SETTINGS = {"currencyCode":"USD","symbol":"$","decimal":".","fractionDigits":2,"group":",","template":"{{wf {\\"path\\":\\"symbol\\",\\"type\\":\\"PlainText\\"} }} {{wf {\\"path\\":\\"amount\\",\\"type\\":\\"CommercePrice\\"} }} {{wf {\\"path\\":\\"currencyCode\\",\\"type\\":\\"PlainText\\"} }}","hideDecimalForWholeNumbers":false};`}
        </Script>
      </head>
      <body>
        {children}
        <Script src="/assets/d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js__qs_site_6882a9e95dcd0d3fa9826ac8" strategy="lazyOnload" />
        <Script src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/js/webflow.schunk.6ea92fe2a208e24a.js" strategy="lazyOnload" />
        <Script src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/js/webflow.schunk.99c73f74edd7b087.js" strategy="lazyOnload" />
        <Script src="/assets/cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/js/webflow.ad50bbc6.18329f711d515d2d.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
