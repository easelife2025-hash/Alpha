import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Montserrat } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'ALPHA FITNESS | Nerul Navi Mumbai | 4.9★ Rated Gym',
  description:
    'Alpha Fitness is Nerul’s premier strength & conditioning fitness center. Equipped with heavy-duty selectorized machines, certified trainers, and spacious workout zones. Rated 4.9★ with 349+ reviews.',
  openGraph: {
    title: 'ALPHA FITNESS | Premium Gym in Nerul, Navi Mumbai',
    description:
      'Forge strength at Nerul’s top-rated gym. 4.9★ Google rating, advanced strength equipment, customized personal training, and open Mon-Sat 6 AM - 11 PM.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALPHA FITNESS | Premium Gym in Nerul, Navi Mumbai',
    description:
      'Forge strength at Nerul’s top-rated gym. 4.9★ Google rating, advanced strength equipment, and certified coaches.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${montserrat.variable} dark`}>
      <body
        className="min-h-screen bg-[#08090c] text-slate-100 font-sans antialiased selection:bg-red-600 selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

