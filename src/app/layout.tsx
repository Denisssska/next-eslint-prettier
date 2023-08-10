import { Inter } from 'next/font/google';

import { ClientOnlyProps } from '#/types';
import AuthProvider from '@/components/authProvider/AuthProvider';
import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

import { ThemeProvider } from '@/context/ThemeContext';

import type { Metadata } from 'next';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Геодезические работы',
  description: 'Геодезические работы в Беларуси',
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
