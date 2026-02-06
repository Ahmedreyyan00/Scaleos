import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClarityScalesoftware.io",
  description: "ClarityScalesoftware.io",
  openGraph: {
    title: "ClarityScalesoftware.io",
  },
  twitter: {
    title: "ClarityScalesoftware.io",
  },
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
        <link href="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/68837077b60f5263fe4960cb_LogoClaritySclae.png" rel="shortcut icon" type="image/x-icon" />
        <link href="https://cdn.prod.website-files.com/6882a9e95dcd0d3fa9826ac8/688370b5b15902eb4f2ba600_LogoClarityScale256px.png" rel="apple-touch-icon" />
        <style dangerouslySetInnerHTML={{__html: `
          .navbar, .section { display: block !important; visibility: visible !important; }
          .navbar { position: sticky !important; opacity: 1 !important; z-index: 1000 !important; filter: none !important; }
          .section { position: relative !important; opacity: 1 !important; filter: none !important; }
          .navbar * { opacity: 1 !important; visibility: visible !important; filter: none !important; }
          .hero-section-wrapper, .section * { opacity: 1 !important; visibility: visible !important; filter: none !important; }
          .home-text-holder, .hero-dashboard-wrapper, .hero-icons-holder, .hero-text-holder { opacity: 1 !important; visibility: visible !important; filter: none !important; }
          .animate-on-load-01, .animate-on-load-02, .animate-on-load-03, .animate-on-load-04 { opacity: 1 !important; visibility: visible !important; filter: none !important; }
          .hero-title, .paragraph-l, .button-holder, .home-text-container, .home-pragraph-holder { filter: none !important; }
          .cube-rotate-holder, .cube-image, .meeting-card, .card-holder { opacity: 1 !important; visibility: visible !important; filter: none !important; display: block !important; }
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
