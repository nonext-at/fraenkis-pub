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
  title: "Fränkis Pub",
  description: "Ein Lokal, nicht nur für Billard Fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Fränkis Pub</title>
        <meta name="description" content="Ein Lokal, nicht nur für Billard Fans" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Fränkis" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Open Graph SEO */}
        <meta property="og:title" content="Fränkis Pub" />
        <meta property="og:description" content="Ein Lokal, nicht nur für Billard Fans" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fraenkis-pub.vercel.app/" /> {/* Replace with actual URL */}
        <meta property="og:image" content="https://fraenkis-pub.vercel.app/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fränkis Pub" />
        <meta name="twitter:description" content="Ein Lokal, nicht nur für Billard Fans" />
        <meta name="twitter:image" content="https://fraenkis-pub.vercel.app/og-image.png" />
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
