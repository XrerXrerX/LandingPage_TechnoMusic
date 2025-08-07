import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechnoBeats - Best Techno Music Recommendations',
  description: 'Discover the best techno music tracks, artists, and recommendations. Your ultimate destination for electronic dance music.',
  keywords: 'techno music, electronic dance music, EDM, music recommendations, techno tracks',
  authors: [{ name: 'TechnoBeats' }],
  openGraph: {
    title: 'TechnoBeats - Best Techno Music Recommendations',
    description: 'Discover the best techno music tracks, artists, and recommendations.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}