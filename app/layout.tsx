import './globals.css';
import type { Metadata } from 'next';
import { CartProvider } from '@/components/CartProvider';

export const metadata: Metadata = {
  title: 'AURELLE — Elegance in Every Detail',
  description: 'Discover refined fashion for him and her at AURELLE.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><CartProvider>{children}</CartProvider></body></html>;
}
