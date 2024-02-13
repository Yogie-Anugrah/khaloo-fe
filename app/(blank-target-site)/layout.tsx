import NavbarWithoutSearchnPath from '@/components/navbar-without-search';

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
