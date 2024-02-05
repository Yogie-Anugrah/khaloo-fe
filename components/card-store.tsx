import Image from 'next/image';
import Link from 'next/link';

export interface CardStoreProps {
  placeName: string;
  placeAddress: string;
  imageUrl: string;
  linkMaps: string;
}

export default function CardStore({
  placeName,
  placeAddress,
  imageUrl,
  linkMaps,
}: CardStoreProps) {
  return (
    <div className='flex w-full items-stretch justify-center gap-4 max-sm:flex-col sm:gap-7 md:gap-10'>
      <Image
        src={imageUrl}
        width={400}
        height={300}
        alt={(placeName = ' image')}
        className='m-auto h-auto w-full rounded-[20px] object-cover object-center max-lg:max-w-[300px] lg:w-[320px] lg:rounded-[40px] xl:w-[400px] '
        style={{
          boxShadow: ' 0px 4px 32px rgba(0, 0, 0, 0.3)',
        }}
        sizes='(max-width: 1023px) 300px, 400px'
      />
      <div className='flex flex-1 flex-col justify-between gap-6'>
        <div className='flex flex-col gap-1 text-black lg:gap-3'>
          <p className='text-xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl'>
            {placeName}
          </p>
          <p className='text-lg lg:text-xl xl:text-2xl 2xl:text-[28px]'>
            {placeAddress}
          </p>
        </div>
        <div>
          <Link href={linkMaps}>
            <button className='rounded-lg bg-secondary-1 px-20 py-2 text-base font-medium text-white lg:text-lg xl:text-xl 2xl:text-2xl'>
              Maps
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
