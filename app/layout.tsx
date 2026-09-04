import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'ParkShare — Find parking before you reach your destination.',
  description:
    'Discover and reserve convenient parking spaces from people and businesses around you. Save time, compare prices, and park with confidence.',
  openGraph: {
    title: 'ParkShare — Find parking before you reach your destination.',
    description:
      'Discover and reserve convenient parking spaces from people and businesses around you.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ParkShare — Find parking before you reach your destination.',
    description:
      'Discover and reserve convenient parking spaces from people and businesses around you.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
