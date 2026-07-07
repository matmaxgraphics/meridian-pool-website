import './globals.css';

// NOTE: Fonts are loaded via <link> for portability. If you prefer Next.js
// optimized fonts, swap this for next/font/google (Sora, Instrument_Sans,
// IBM_Plex_Mono) and update the --font-* variables in globals.css.

export const metadata = {
  title: 'Meridian Pools — Your Pool. Always Ready.',
  description:
    'Weekly maintenance, equipment repair and emergency cleaning for Austin homeowners who value peace of mind.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
