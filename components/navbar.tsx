'use client';
import SearchNavbar from '@/components/search-navbar';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const navData = [
  {
    name: 'HOME',
    path: '/',
  },
  {
    name: 'PRODUCT',
    path: '/product',
  },
  {
    name: 'EDU-SKIN',
    path: '/edu-skin',
  },
  {
    name: 'PARTNERSHIP',
    path: '/partner-with-us',
  },
  {
    name: 'FIND-US',
    path: '/find-us',
  },
];

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchResultOpen, setIsSearchResultOpen] = useState(false);
  const [navBarExpanded, setNavbarExpanded] = useState(false);

  // Side Bar background ref
  const sideBarBgRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Todo: Tergantung how to fetch the data from the backend we can use useParams if backend have query to filter data
  // Todo : or we can use state to filter the data on the client side

  // Implement option 2
  const [searchResult, setSearchResult] = useState('');

  // Close Navbar when user clicks on black background stuffs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If Userclick is in the black background stuff
      if (
        sideBarBgRef.current &&
        sideBarBgRef.current.contains(event.target as Node)
      ) {
        setNavbarExpanded(false);
        setIsSearchOpen(false);
        setIsSearchResultOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setNavbarExpanded]);

  // Overflow hidden when search result is open
  useEffect(() => {
    if (isSearchResultOpen || navBarExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSearchResultOpen, navBarExpanded]);

  return (
    <>
      <nav
        aria-label='Navbar'
        className='font-poppins sticky top-0 z-[60] flex w-full flex-row items-center justify-between gap-4 bg-white
      px-4 py-4 text-black md:px-6 md:py-5 xl:px-20'
      >
        {/* Logo */}
        <Link
          href='/'
          className={clsx('text-2xl font-bold', navBarExpanded && "max-md:opacity-60 max-md:backdrop-blur-lg")}
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

        {/* Display URL Navigation */}
        <div
          data-cy='navbar-expanded'
          className={`fixed right-0 top-0 z-10 flex h-full transform flex-col gap-6 
        border-l-2 border-gray-3 bg-white p-5 text-base transition-all duration-300 ease-in-out max-md:w-[60%]
        md:static md:h-auto md:w-auto md:flex-1 md:translate-x-0 md:flex-row md:items-center md:justify-between md:gap-12 md:border-none md:bg-transparent md:p-0 lg:text-lg xl:text-xl 2xl:text-2xl 
        ${navBarExpanded ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <div className='flex flex-1 flex-col max-lg:gap-5 lg:flex-row '>
            {/* Close Menu Mobile Button */}
            <button
              className='ml-auto mr-4 md:hidden'
              onClick={() => setNavbarExpanded(false)}
              aria-label='Close Menu'
              data-cy='navbar-close'
            >
              <Image
                height={20}
                width={20}
                alt='close-button'
                src='/assets/icons/x.svg'
                className={clsx(
                  'transition-all duration-300',
                  navBarExpanded ? 'rotate-180' : 'rotate-0'
                )}
                sizes='20px'
              />
            </button>

            {/* Map data navigation */}
            <ul
              className={clsx(
                'flex flex-1 flex-col items-center gap-5 font-medium md:flex-row md:justify-center md:gap-5 lg:gap-9 xl:gap-12 2xl:gap-20',
                isSearchOpen ? 'hidden' : 'flex'
              )}
            >
              {navData.map((item) => {
                return (
                  <li
                    key={item.name}
                    className={clsx(
                      'text-center transition-all duration-300 hover:underline hover:underline-offset-8 ',
                      pathname == item.path
                        ? 'font-bold text-primary-2'
                        : 'font-medium'
                    )}
                  >
                    <Link
                      data-cy={`navbar-link-${item.name
                        .toLowerCase()
                        .split(' ')
                        .join('-')}`}
                      href={item.path}
                      aria-label={item.path
                        .split('/')
                        .map((item) => item)
                        .join(' ')}
                      data-navlink
                      onClick={() => setNavbarExpanded(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className='flex flex-shrink-0 items-center justify-center gap-3 font-medium'>
          {/* Search and Person */}
          <div className='flex items-center justify-center gap-2 sm:gap-2 lg:gap-4 2xl:gap-5'>
            <button
              onClick={() => {
                if (isSearchOpen) {
                  setIsSearchOpen(false);
                  setIsSearchResultOpen(false);
                }
                else {
                  setIsSearchOpen(true);
                  setIsSearchResultOpen(true);

                }
              }}
            >
              <Image
                height={32}
                width={32}
                src={!isSearchOpen ? '/assets/icons/search.svg' : "/assets/icons/x.svg"}
                alt='Search Icon'
                className={clsx("aspect-square transition-all duration-300", !isSearchOpen ? "w-7 sm:w-8" : "w-5 sm:w-6 rotate-90")}
                sizes='(max-width: 640px) 28px, 32px'
              />
            </button>
            <SearchNavbar
              searchResult={searchResult}
              setIsSearchResultOpen={setIsSearchResultOpen}
              setSearchResult={setSearchResult}
              isSearchOpen={isSearchOpen}
              isSearchResultOpen={isSearchResultOpen}
            />
            <button>
              <Image
                height={40}
                width={40}
                src='/assets/icons/person.svg'
                alt='Person Icon'
                className='aspect-square w-9 sm:w-10'
                sizes='(max-width: 640px) 28px, 40px'
              />
            </button>
            <button className='flex items-center gap-2'>
              <Image
                height={24}
                width={24}
                src='/assets/icons/language.svg'
                alt='Language Icon'
                className='aspect-square w-6 sm:w-7'
                sizes='(max-width: 640px) 24px, 32px'
              />
              <p className='hidden text-base hover:underline hover:underline-offset-4 lg:flex xl:text-lg 2xl:text-xl'>
                INA
              </p>
            </button>
          </div>

          {/* Hamburger Menu button Mobile */}
          <button
            data-cy='navbar-toggle'
            aria-label='Menu'
            className='md:hidden'
            onClick={() => setNavbarExpanded(true)}
          >
            <Image
              height={28}
              width={28}
              src='/assets/icons/menu.svg'
              alt='Menu Icon'
              sizes='28px'
            />
          </button>
        </div>
      </nav>
      {/* Side bar opaque background */}
      <div
        ref={sideBarBgRef}
        data-cy='navbar-side-bar-bg'
        className={clsx(
          'fixed inset-0 z-[59] md:z-50 h-full w-full bg-opacity-80 backdrop-blur-sm',
          isSearchResultOpen
            ? 'visible bg-black'
            : navBarExpanded
              ? 'visible md:hidden'
              : 'hidden'
        )}
      />
    </>
  );
}
