import NavbarWithoutSearchnPath from '@/components/navbar-without-search';
import { type Metadata } from 'next';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarWithoutSearchnPath />
      {children}
    </>
  );
}
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
