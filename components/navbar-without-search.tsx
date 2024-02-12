'use client';
import Image from 'next/image';
import Link from 'next/link';


export default function NavbarWithoutSearchnPath() {

  return (
    <nav
      aria-label='Navbar'
      className='font-poppins sticky top-0 z-50 flex w-full flex-row items-center justify-between gap-4 bg-white
      px-4 py-4 text-black md:px-6 md:py-5 xl:px-20'
    >
      {/* Logo */}
      <Link
        href='/'
        className='text-2xl font-bold'
        aria-label='Home'
        data-cy='navbar-logo'
      >
        <Image
          alt='Logo Icon'
          width={180}
          height={40}
          className='h-8 w-28 object-contain object-center lg:h-10 lg:w-40'
          src={'/assets/images/logo.png'}
          priority
          sizes={'(max-width: 640px) 70px, 100px'}
        />
      </Link>

      {/* Login Icon */}
      <Image
        height={32}
        width={32}
        src='/assets/icons/person.svg'
        alt='Person Icon'
        className='aspect-square w-7 sm:w-8'
        sizes='(max-width: 640px) 28px, 32px'
      />
    </nav >
  );
}
