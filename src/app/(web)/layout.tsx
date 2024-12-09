import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

import Header from '@/components/Header/Header';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import { NextAuthProvider } from '@/components/AuthProvider/AuthProvider';
import Toast from '@/components/Toast/Toast';

const roboto_font = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: 'normal',
});

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotel rooms',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={roboto_font.className}>
        <NextAuthProvider>
          <ThemeProvider>
            <Toast />
            <main className="font-normal">
              <Header />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
