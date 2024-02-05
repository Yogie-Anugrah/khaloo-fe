import { currencyFormatter } from '@/utils/currency';
import Image from 'next/image';
import Link from 'next/link';

export default function CardProduct({
  status = 'normal',
  title,
  price,
  id,
}: {
  status?: 'out-stock' | 'new' | 'best-seller' | 'normal';
  title: string;
  price: number;
  id: string;
}) {
  return (
    <Link
      href={'/product/' + id}
      className='flex h-auto w-full flex-col overflow-hidden rounded-3xl bg-white text-base text-black transition-all duration-300 hover:scale-105 max-lg:max-w-[300px] lg:w-[330px] lg:rounded-[32px] lg:text-lg xl:w-[300px] xl:text-xl 2xl:w-[380px] 2xl:text-2xl'
      style={{ boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.3)' }}
    >
      {/* Image and the label */}
      <div className='relative w-full'>
        {status === 'out-stock' && (
          <div className='absolute top-0 z-20 flex h-full w-full items-center justify-center rounded-3xl bg-black bg-opacity-70 lg:rounded-[32px]'>
            <p className='font-semibold text-white'>Out of Stock</p>
          </div>
        )}
        <div className='relative w-full px-5 py-6 lg:px-6 lg:py-8 xl:px-7 xl:py-9'>
          {status === 'best-seller' && (
            <p
              className='absolute left-7 top-7 rounded-lg p-2 font-semibold text-gray-1'
              style={{
                background:
                  'linear-gradient(98.33deg, #FFD700 7.43%, #DBB71B 27.43%, #FFD800 50.37%, #E6BF18 71.99%, #FFD800 92.63%)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              Best Seller
            </p>
          )}
          {status === 'new' && (
            <p
              className='absolute left-7 top-7 flex aspect-square h-auto w-auto items-center justify-center rounded-full p-3 font-semibold text-gray-4'
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
            src={'/assets/images/product.png'}
            alt='product'
            width={346}
            height={346}
            className='aspect-square w-full object-contain object-center'
            sizes='100vw'
          />
        </div>
      </div>

      {/* Content */}
      <div className='flex w-full flex-1 flex-col justify-center gap-3 px-5 pb-5 pt-4 text-left lg:px-6 lg:pb-6 lg:pt-4 xl:px-7 xl:pb-7 xl:pt-5'>
        <p className='break-word font-semibold break-all'>{title}</p>
        <p className='font-medium text-[#484747]'>{currencyFormatter(price)}</p>
      </div>
    </Link>
  );
}
