import type { Metadata } from 'next';
import { Lato, Bitter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Analytics, { GTMNoScript } from '@/components/Analytics';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

const bitter = Bitter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-bitter',
});

export const metadata: Metadata = {
  title: 'VisasCanada.ca',
  description:
    "Since 2015, we've helped thousands of successful applicants with work permits, study permits, visitor visas, and immigration applications. Today is your turn.",
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'VisasCanada.ca',
    description:
      "Since 2015, we've helped thousands of successful applicants with work permits, study permits, visitor visas, and immigration applications. Today is your turn.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VisasCanada.ca',
    description:
      "Since 2015, we've helped thousands of successful applicants with work permits, study permits, visitor visas, and immigration applications. Today is your turn.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        <Analytics />
      </head>
      <body className={`${lato.variable} ${bitter.variable} antialiased`}>
        <GTMNoScript />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
