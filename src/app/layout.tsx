import { Inter } from 'next/font/google';
import React from 'react';

import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

import { ThemeProvider } from '@/context/ThemeContext';

import type { Metadata } from 'next';

import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'hi jack',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
