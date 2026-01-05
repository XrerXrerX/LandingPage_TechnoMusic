/** @format */

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechnoBeats - Best Techno Music Recommendations",
  description:
    "Discover the best techno music tracks, artists, and recommendations. Your ultimate destination for electronic dance music.",
  keywords:
    "techno music, electronic dance music, EDM, music recommendations, techno tracks",
  authors: [{ name: "TechnoBeats" }],
  openGraph: {
    title: "TechnoBeats - Best Techno Music Recommendations",
    description:
      "Discover the best techno music tracks, artists, and recommendations.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Security metadata
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  other: {
    "x-dns-prefetch-control": "off",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Security: Prevent DNS prefetching */}
        <meta httpEquiv="x-dns-prefetch-control" content="off" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        {/* Google AdSense - Loaded with Next.js Script component for better security and performance */}
        {process.env.NEXT_PUBLIC_ADSENSE_ID && (
          <Script
            id="google-adsense"
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
