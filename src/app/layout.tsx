import type { Metadata } from 'next';
import { Bebas_Neue, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-sans',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-ibm-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PrimeTime Lending — Retail Backbone. Broker Upside.',
  description:
    'PrimeTime Lending is a branch powered by Mpire Financial LLC. A broker shop built like a retail team — for retail loan officers ready for broker upside without losing the team.',
  metadataBase: new URL('https://primetime.colebrantley.com'),
  openGraph: {
    title: 'PrimeTime Lending — Retail Backbone. Broker Upside.',
    description:
      'A broker shop built like a retail team. Up to 200 bps, W-2 with full benefits, real team support. For retail loan officers ready for the upgrade.',
    type: 'website',
    url: 'https://primetime.colebrantley.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrimeTime Lending — Retail Backbone. Broker Upside.',
    description:
      'A broker shop built like a retail team. Up to 200 bps, W-2 with full benefits, real team support.',
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230A0A0A'/%3E%3Ctext x='50' y='70' font-family='Arial Black,sans-serif' font-size='70' font-weight='900' text-anchor='middle' fill='%23E0B040'%3EP%3C/text%3E%3C%2Fsvg%3E",
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  return (
    <html lang="en" className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <head>
        {plausibleDomain && process.env.NODE_ENV === 'production' && (
          <script defer data-domain={plausibleDomain} src="https://plausible.io/js/script.js" />
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
