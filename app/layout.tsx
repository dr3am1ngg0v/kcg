import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google';
import Header from '@/app/components/Header';
import "./globals.css";

const font = Kumbh_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KEKW Circle Game',
  description: 'Complete games, win the prizes!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-gray-900 text-gray-100`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
