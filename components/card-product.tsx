import { currencyFormatter } from '@/utils/utils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export interface CardProductProps {
  id: string;
  title: string;
  price: number;
  status?: 'New' | 'BestSeller' | null;
  imageUrl: string;
  exist?: boolean;
}

function CardProductSkeleton() {
  return (
    <></>
  )
}

export default function CardProduct({
  status = null,
  title,
  price,
  id,
  exist,
  imageUrl,
}: CardProductProps) {
  return (
    <Suspense fallback={"Loading"}>
      <Link
        href={'/product/' + id}
        className={clsx('flex h-auto w-full flex-col overflow-hidden rounded-3xl bg-white text-base text-black transition-all duration-300 hover:scale-105 max-lg:max-w-[300px] lg:rounded-[32px] lg:text-lg xl:text-xl 2xl:text-2xl',
          "m-auto")}
        style={{ boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.3)' }}
      >
        {/* Image and the label */}
        <div className='relative w-full'>
          {Boolean(!exist) && (
            <div className='absolute top-0 z-20 flex h-full w-full items-center justify-center rounded-3xl bg-black bg-opacity-70 lg:rounded-[32px]'>
              <p className='font-semibold text-white'>Out of Stock</p>
            </div>
          )}
          <div className='relative w-full px-5 py-6 lg:py-8 xl:px-7 xl:py-9'>
            {status === 'BestSeller' && (
              <p
                className='absolute left-7 top-7 rounded-lg p-1.5 lg:p-2 font-semibold text-gray-1'
                style={{
                  background:
                    'linear-gradient(98.33deg, #FFD700 7.43%, #DBB71B 27.43%, #FFD800 50.37%, #E6BF18 71.99%, #FFD800 92.63%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                Best Seller
              </p>
            )}
            {status === 'New' && (
              <p
                className='absolute left-7 top-7 flex aspect-square h-auto w-auto items-center justify-center rounded-full p-2 lg:p-3 font-semibold text-gray-4'
                style={{
                  background:
                    'linear-gradient(146.14deg, #6688FF 44.8%, #1538B5 96.44%)',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
              >
                New
              </p>
            )}
            {/* Image */}
            <Image
              src={imageUrl}
              alt={title + ' image'}
              width={346}
              height={346}
              className='aspect-square w-full object-contain object-center'
              sizes='100vw'
            />
          </div>
        </div>

        {/* Content */}
        <div className='flex w-full flex-1 flex-col justify-center gap-3 px-5 pb-5 pt-4 text-left lg:pb-6 lg:pt-4 xl:px-7 xl:pb-7 xl:pt-5'>
          <p className='break-word break-all font-semibold'>{title}</p>
          <p className='font-medium text-[#484747]'>{currencyFormatter(price)}</p>
        </div>
      </Link>
    </Suspense>
  );
}
