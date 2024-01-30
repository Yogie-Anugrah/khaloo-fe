import Footer from '@/components/footer';
import { ReactNode } from 'react';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
