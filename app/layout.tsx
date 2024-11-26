import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fränkis Pub - Bar, Billard, Dart und mehr in Lustenau",
  description:
    "Erlebe Fränkis Pub in Lustenau: Bar, Billard, Darts, Flipper, Airhockey und Tischfußball. Dein Treffpunkt in Vorarlberg für Spaß und Unterhaltung!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-AT">
      <head>
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Fränkis Pub" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Fränkis Pub in Lustenau - Unterhaltung pur" />
        <meta
          property="og:description"
          content="Willkommen im Fränkis Pub in Lustenau. Entdecke unser breites Angebot an Unterhaltung: Bar, Billard, Dart und mehr!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fraenkis.at/" />
        <meta property="og:image" content="https://fraenkis.at/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fränkis Pub - Lustenau Lokal" />
        <meta
          name="twitter:description"
          content="Bar, Billard, Darts und mehr in Lustenau. Besuche Fränkis Pub für unvergessliche Abende."
        />
        <meta name="twitter:image" content="https://fraenkis.at/og-image.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarOrPub",
            name: "Fränkis Pub",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Im Widum 19",
              addressLocality: "Lustenau",
              postalCode: "6890",
              addressCountry: "AT",
            },
            image: "https://fraenkis.at/og-image.png",
            url: "https://fraenkis.at/",
            telephone: "+43 676 3807111",
            description:
              "Fränkis Pub in Lustenau, Vorarlberg: Bar, Billard, Dart, Flipper, Airhockey und mehr.",
            openingHours: "Mo-So 19:00-02:00",
            sameAs: [
              "https://www.facebook.com/fraenkispub",
              "https://www.instagram.com/fraenkispub",
            ],
          })}
        </script>

        {/* Keywords Meta Tag */}
        <meta
          name="keywords"
          content="Fränkis Pub, Bar in Lustenau, Billard Lustenau, Dart Lustenau, Pub Vorarlberg, Unterhaltung Lustenau, Billiard, Flipper, Airhockey, Tischfußball"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://fraenkis.at/" />

        {/* Additional Meta Tags for Local SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="AT-8" />
        <meta name="geo.placename" content="Lustenau" />
        <meta name="geo.position" content="47.4215;9.6586" />
        <meta name="ICBM" content="47.4215, 9.6586" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
