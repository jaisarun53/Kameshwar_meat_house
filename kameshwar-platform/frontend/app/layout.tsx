import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Kameshwar Meat House',
  description:
    'An artistic restaurant website for Kameshwar Meat House in Katahariya, Rautahat, celebrating clay-pot katiya and charcoal-fired flavor.',
  openGraph: {
    title: 'Kameshwar Meat House',
    description:
      'Clay-pot katiya, smoke, fire, and the food identity of Katahariya in one immersive restaurant experience.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
