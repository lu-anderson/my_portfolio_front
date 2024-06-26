import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Container from '@/components/container';
import Footer from '@/components/footer';
import Menu from '@/components/menu';

const inter = Inter({ subsets: ['latin'] });

// TODO: analisar a estratégia de cache
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          {children}
          <Footer />
          <Menu />
        </Container>
      </body>
    </html>
  );
}
