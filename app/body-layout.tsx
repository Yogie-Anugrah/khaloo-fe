'use client';
import Footer from '@/components/footer';
import { useState } from 'react';

export default function BodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  return (
    <body
      className={`flex min-h-screen flex-col ${
        navBarExpanded && 'overflow-hidden'
      }`}
    >
      {children}
      <Footer />
    </body>
  );
}
