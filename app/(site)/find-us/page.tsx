'use client';
import SearchClient from '@/app/(site)/find-us/search-client';
import CardStore, { CardStoreProps } from '@/components/card-store';
import { useSearchParams } from 'next/navigation';

const FindUsPage = () => {
  const dummyStores: CardStoreProps[] = [
    {
      placeName: 'SuperMart',
      placeAddress: '123 Main Street, Cityville, State 12345',
      imageUrl: '/assets/images/kios.png',
      linkMaps: 'https://maps.google.com/supermart',
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

  const searchParams = useSearchParams();

  const search = searchParams.get('events');

  const filteredStores = dummyStores.filter((store) => {
    return search
      ? store.placeName.toLowerCase().includes(search.toLowerCase())
      : true;
  });

  return (
    <main className='flex w-full flex-col items-center gap-10 px-8 py-8 sm:px-10 md:px-20 lg:gap-20 lg:px-40 lg:py-10 xl:py-14 2xl:px-52 2xl:py-20'>
      <h1 className='text- max-w-[1140px] text-center text-2xl font-semibold text-black md:text-4xl lg:text-3xl 2xl:text-[42px] 2xl:leading-[60px]'>
        Mau dateng langsung ke offline stores? Mau ikut events yang menarik?
        Sabi!
      </h1>

      <div className='flex w-full flex-col gap-7'>
        <SearchClient />

        <div className='flex flex-wrap gap-5'>
          <button className='rounded-lg bg-primary-2 px-10 py-2 text-base font-medium text-white lg:text-lg xl:text-xl 2xl:text-2xl'>
            All
          </button>
          <button className='rounded-lg border border-primary-2 bg-gray-4 px-10 py-2 text-base font-medium text-primary-2  lg:text-lg xl:text-xl 2xl:text-2xl'>
            Locations
          </button>
          <button className='rounded-lg border border-primary-2 bg-gray-4 px-10 py-2 text-base font-medium text-primary-2  lg:text-lg xl:text-xl 2xl:text-2xl'>
            Events
          </button>
        </div>
      </div>
      <div className='flex w-full flex-col gap-10'>
        {filteredStores.map((store, index) => (
          <CardStore
            key={index}
            placeName={store.placeName}
            placeAddress={store.placeAddress}
            imageUrl={store.imageUrl}
            linkMaps={store.linkMaps}
          />
        ))}
      </div>
    </main>
  );
};

export default FindUsPage;
