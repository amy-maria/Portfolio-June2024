import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import './globals.css';
import Link from 'next/link';
import Navigation from '@/components/nav';
import Footer from '@/components/footer';
import Chat from '@/components/chat';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio for Amy Rowell',
  description: 'Developer portfolio for Amy Rowell',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang='en'
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className='min-h-full flex flex-col'>
          <header className='sticky top-0 z-50 bg-black/80 backdrop-blur-md w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-gray-900'>
            <Link
              href='/'
              className='text-white font-black text-xl tracking-tighter'>
              Amy Rowell
            </Link>
            <Navigation />
          </header>
          <div className='flex-grow'>{children}</div>
          <Chat />
          <div id='contact' className='scroll-mt-24'>
            <Footer />
          </div>
        </body>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
        <Analytics />
      </html>
    </ViewTransitions>
  );
}