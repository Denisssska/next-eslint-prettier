import './globals.scss';
import { Inter } from 'next/font/google';

import { ClientOnlyProps } from '#/types';
import AuthProvider from '@/components/authProvider/AuthProvider';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

import { ThemeProvider } from '@/context/ThemeContext';

import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  generator: 'Next.js',
  applicationName: 'Next-Blog',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'TypeScript'],
  authors: [
    { name: 'Den' },
    {
      name: 'Denis',
      url: 'https://drive.google.com/file/d/1najLFBrKwE3W4EyJeJGFZRra7oZ68mZ8/view?usp=sharing',
    },
  ],
  colorScheme: 'dark',
  creator: 'Denis Yarmoshko',
  publisher: 'Yarmoshko Denis',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: ClientOnlyProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
