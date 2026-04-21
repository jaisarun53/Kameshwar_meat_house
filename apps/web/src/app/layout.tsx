import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';

import './globals.css';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'Purano Jayswal Meat House',
  description:
    'A heritage-rich restaurant website for Kameshwar Ji Ko Katiya Pasal in Katahariya, Rautahat.',
  icons: {
    icon: '/brand/logo.png',
    shortcut: '/brand/logo.png',
    apple: '/brand/logo.png',
  },
  openGraph: {
    title: 'Purano Jayswal Meat House',
    description:
      'The authentic clay-pot taste of Katahariya, carried through the family of Amritlal Sah.',
    type: 'website',
    images: ['/brand/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
