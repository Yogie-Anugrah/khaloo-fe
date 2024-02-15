'use client';
import CardStore, { CardStoreProps } from '@/components/card-store';
import { SearchInput } from '@/components/search-input';
import { cn } from '@/libs/utils';

import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useMemo, useRef } from 'react';

const FindUsPage = () => {
  // Get search params from query string
  const searchParams = useSearchParams();
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();
  const router = useRouter();
  const pathname = usePathname();

  // Add params to query string
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);

    return params.toString();
  };

  // Remove params from query string
  const removeQueryParam = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name);
    return params.toString();
  };

  // Get search and filter params from query string
  const search = searchParams.get("search")
  const filter = searchParams.get("filter")

  // Filter stores based on search and filter params
  const filteredStores = useMemo(() => {
    const dummyStores: CardStoreProps[] = [
      {
        placeName: 'SuperMart',
        placeAddress: '123 Main Street, Cityville, State 12345',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/supermart',
        date: new Date('2022-12-12'),
        time: '10:00 - 15:00',
      },
      {
        placeName: 'Fashion Emporium',
        placeAddress: '456 Fashion Avenue, Trendytown, State 56789',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/fashion_emporium',
      },
      {
        placeName: 'Tech Haven',
        placeAddress: '789 Gadget Street, Tech City, State 10111',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/tech_haven',
      },
      {
        placeName: 'FreshMart',
        placeAddress: '987 Healthy Road, Organic Town, State 54321',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/freshmart',
      },
      {
        placeName: 'Book Nook',
        placeAddress: '654 Literary Lane, Bookworm City, State 98765',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/book_nook',
      },
      {
        placeName: 'Gourmet Delights',
        placeAddress: '321 Culinary Street, Foodieville, State 13579',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/gourmet_delights',
      },
      {
        placeName: 'Sports Zone',
        placeAddress: '876 Athlete Avenue, Sports City, State 24680',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/sports_zone',
      },
      {
        placeName: 'Home Decor Hub',
        placeAddress: '543 Stylish Road, Decor Town, State 64208',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/home_decor_hub',
      },
      {
        placeName: 'Pet Paradise',
        placeAddress: '210 Pet Street, Animal Haven, State 86420',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/pet_paradise',
      },
      {
        placeName: 'Electronics Expo',
        placeAddress: '789 Tech Road, Gadget City, State 97531',
        imageUrl: '/assets/images/kios.png',
        linkMaps: 'https://maps.google.com/electronics_expo',
      },
      // Add more dummy data as needed
    ];

    return dummyStores.filter((store) => {
      return search
        ? filter === "events"
          ? store.placeName.toLowerCase().includes(search.toLowerCase())
          : filter === "locations"
            ? store.placeAddress.toLowerCase().includes(search.toLowerCase())
            : store.placeName.toLowerCase().includes(search.toLowerCase()) || store.placeAddress.toLowerCase().includes(search.toLowerCase())
        : true;
    });
  }, [search, filter]);

  return (
    <main className='min-h-screen flex w-full flex-col items-center gap-10 px-8 py-8 sm:px-10 md:px-20 lg:gap-20 lg:px-40 lg:py-10 xl:py-14 2xl:px-52 2xl:py-20'>
      <h1 className='text- max-w-[1140px] text-center text-2xl font-semibold text-black md:text-4xl lg:text-3xl 2xl:text-[42px] 2xl:leading-[60px]'>
        Mau dateng langsung ke offline stores? Mau ikut events yang menarik?
        Sabi!
      </h1>
      <div className='flex w-full flex-col gap-7'>
        <form
          className={cn('mt-4 flex')}
          onSubmit={(e) => {
            e.preventDefault();
            clearTimeout(timeoutRef.current);
            timeoutRef.current = undefined;
          }}
        >
          <SearchInput
            type='search'
            placeholder='Search Store or Event...'
            className={clsx(
              'w-full bg-transparent text-black outline-none placeholder:text-[#585857] text-base lg:text-lg xl:text-xl 2xl:text-2xl'
            )}
            onChange={(e) => {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = setTimeout(() => {
                router.push(
                  pathname + '?' + createQueryString("search", e.target.value)
                )
              }, 1000);
            }}
          />

        </form>
        <div className='flex flex-wrap gap-5 font-semibold text-base text-primary-2 lg:text-lg xl:text-xl 2xl:text-2xl'>
          <button onClick={() => router.push(
            pathname + '?' + removeQueryParam("filter")
          )} className={clsx('rounded-xl bg-gray-4 border-primary-2 border-2 px-10 py-2 hover:brightness-90 duration-300 transition',
            !filter && "bg-primary-2 text-white"
          )}>
            All
          </button>
          <button onClick={() => router.push(
            pathname + '?' + createQueryString("filter", "locations")
          )} className={clsx('rounded-xl bg-gray-4 border-primary-2 border-2 px-10 py-2 hover:brightness-90 duration-300 transition',
            filter == "locations" && "bg-primary-2 text-white"
          )}>
            Locations
          </button>
          <button onClick={() => router.push(
            pathname + '?' + createQueryString("filter", "events")
          )} className={clsx('rounded-xl bg-gray-4 border-primary-2 border-2 px-10 py-2 hover:brightness-90 duration-300 transition',
            filter == "events" && "bg-primary-2 text-white"
          )}>
            Events
          </button>
        </div>
      </div>
      <div className='flex w-full flex-col gap-10'>
        {filteredStores.length > 0 ? filteredStores.map((store, index) => (
          <CardStore
            key={index}
            placeName={store.placeName}
            placeAddress={store.placeAddress}
            imageUrl={store.imageUrl}
            linkMaps={store.linkMaps}
            date={store.date}
            time={store.time}
          />
        )) : <p className='text-center text-black font-bold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>Not found</p>}
      </div>
    </main>
  );
};

export default FindUsPage;
