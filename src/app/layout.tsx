import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';

import './globals.css';
import Header from '@/components/layout/header';
import { Providers } from '@/lib/providers';
import Footer from '@/components/layout/footer';
import { Github } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

const title = 'Arya Johary | Java Developer';
const description =
  'A self-proclaimed designer who specializes in Java Development, from Ludhiana, India.';
const url = 'https://aryajohary.github.io/MyPortfolio/';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Java Developer',
    'Full Stack Developer',
    'Python Developer',
  ],
  creator: 'Arya Kumar Johary',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    url: 'https://aryajohary.github.io/MyPortfolio/',
    title: 'Arya\'s Portfolio',
    description: 'This is my professional portfolio where I have showcased my previous internships, projects and achievements.',
    siteName: 'Github',
    images: [
      {
        url: 'https://drive.google.com/file/d/1zKocYNL1JjtlwYGsNLuFWsfMvHhKbTbH/view?usp=sharing',
      },
    ],
    
  },
  icons: {
    icon: '/public/images/icon.png',
  },
};

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      {googleAnalyticsId ? (
        <head>
          <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          ></Script>
          <Script id="google-anayltics-script">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', '${googleAnalyticsId}');
          `}
          </Script>
        </head>
      ) : null}
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
