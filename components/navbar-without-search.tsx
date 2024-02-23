'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


export default function NavbarWithoutSearchnPath() {
  const [isLogin, setIsLogin] = useState(false);

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
      {isLogin ? (
        <button
          onClick={() => setIsLogin(false)}
        >
          <Image
            height={40}
            width={40}
            src='/assets/icons/person.svg'
            alt='Person Icon'
            className='aspect-square w-9 sm:w-10'
            sizes='(max-width: 640px) 28px, 40px'
          />
        </button>
      ) : (
        <button
          onClick={() => setIsLogin(true)}
          className={("py-0.5 px-2 border-2 border-black rounded-lg text-black text-sm md:text-base lg:text-lg hover:brightness-[60%] transition-all duration-300")}>
          Login
        </button>)
      }
    </nav >
  );
}
