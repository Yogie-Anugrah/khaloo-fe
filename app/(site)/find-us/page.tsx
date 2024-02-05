import CardStore, { CardStoreProps } from '@/components/card-store';
import clsx from 'clsx';
import Image from 'next/image';

const FindUsPage = () => {
  const dummyStores: CardStoreProps[] = [
    {
      placeName: 'Store 1',
      placeAddress:
        'Jl. Jend. Sudirman No.123, Tengkerang Tengah, Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28128',
      imageUrl: '/assets/images/kios.png',
      linkMaps: 'https://maps.google.com/store1',
    },
    {
      placeName: 'Store 2',
      placeAddress:
        'Jl. Jend. Sudirman No.123, Tengkerang Tengah, Kec. Marpoyan Damai, Kota Pekanbaru, Riau 28128',
      imageUrl: '/assets/images/kios.png',
      linkMaps: 'https://maps.google.com/store1',
    },
    // Add more dummy data as needed
  ];

  return (
    <main className='flex w-full flex-col items-center gap-10 px-8 py-8 sm:px-10 md:px-20 lg:gap-20 lg:px-40 lg:py-10 xl:py-14 2xl:px-52 2xl:py-20'>
      <h1 className='text- max-w-[1140px] text-center text-2xl font-semibold text-black md:text-4xl lg:text-3xl 2xl:text-[42px] 2xl:leading-[60px]'>
        Mau dateng langsung ke offline stores? Mau ikut events yang menarik?
        Sabi!
      </h1>

      <div className='flex w-full flex-col gap-7'>
        <div
          className={clsx(
            'flex w-full items-center gap-2 rounded-xl bg-gray-3 px-4 py-3'
          )}
        >
          {/* Search Icon */}
          <Image
            height={32}
            width={32}
            src='/assets/icons/search.svg'
            alt='Search Icon'
            className='aspect-square w-7 sm:w-8'
            sizes='(max-width: 640px) 28px, 32px'
          />
          {/* Input Field */}
          <input
            type='search'
            placeholder='Search Store or Event...'
            className={clsx(
              'w-full bg-transparent text-black outline-none placeholder:text-[#585857] lg:text-lg xl:text-xl 2xl:text-2xl'
            )}
          />
        </div>
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
        {dummyStores.map((store, index) => (
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
