import { currencyFormatter } from '@/utils/utils';
import clsx from 'clsx';
import Image from "next/image";
import Link from 'next/link';
import { Suspense } from 'react';

export interface MarketCardTypes {
  type: "tokopedia" | "shopee" | "blibli" | "lazada",
}

export interface MarketPlaceCardProps extends MarketCardTypes {
  highlightPromo: string;
  promoDueDateText: string;
  rating: number;
  saleCount: number;
  linkUrl: string;
  price: number;
  discountPrice?: number;
}
export default function MarketPlaceCard({
  highlightPromo,
  promoDueDateText,
  rating,
  saleCount,
  price,
  linkUrl,
  type,
  discountPrice
}: MarketPlaceCardProps) {
  const content = {
    "tokopedia": {
      imageUrl: "/assets/images/marketplaces/tokopedia.png",
      title: "Tokopedia",
    },
    "shopee": {
      imageUrl: "/assets/images/marketplaces/shopee.png",
      title: "Shopee",
    },
    "blibli": {
      imageUrl: "/assets/images/marketplaces/blibli.png",
      title: "Blibli",
    },
    "lazada": {
      imageUrl: "/assets/images/marketplaces/lazada.png",
      title: "Lazada",
    },
  }

  return (
    <Suspense fallback={"Loading"}>
      <Link
        href={linkUrl}
        target='_blank'
        className={clsx('flex h-full w-full flex-col overflow-hidden font-medium rounded-3xl bg-white text-black transition-all duration-300 hover:scale-105 max-lg:max-w-[300px]',
          "m-auto")}
        style={{ boxShadow: '0px 4px 32px rgba(0, 0, 0, 0.3)' }}
      >
        {/* Image and the label */}
        <div className='flex flex-col gap-6 w-full px-5 py-6 lg:py-8 xl:px-7 xl:py-9 items-center justify-center text-center flex-1'>
          {/* Highlighted Promo */}
          {highlightPromo && (
            <p
              className='rounded-lg p-1.5 lg:p-2 font-semibold text-gray-1 w-fit m-auto'
              style={{
                background:
                  'linear-gradient(98.33deg, #FFD700 7.43%, #DBB71B 27.43%, #FFD800 50.37%, #E6BF18 71.99%, #FFD800 92.63%)',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              }}
            >
              {highlightPromo}
            </p>
          )}
          {/* Image */}
          <Image
            src={content[type].imageUrl}
            alt={content[type].title}
            width={229}
            height={60}
            className='w-full h-[60px] object-contain object-center'
            sizes='100vw'
          />
          {/* Content */}
          <div className='flex w-full flex-col gap-2'>
            {Boolean(discountPrice) &&
              <p className=' text-black text-lg lg:rounded-[32px] lg:text-xl xl:text-2xl 2xl:text-3xl'>{currencyFormatter(discountPrice)}</p>
            }
            <p className={clsx(" text-black lg:rounded-[32px]", Boolean(discountPrice) ? "text-base lg:text-lg xl:text-xl line-through text-red-500" : "lg:text-xl xl:text-2xl 2xl:text-3xl text-lg")}>{currencyFormatter(price)}</p>
            <div className='flex gap-2 items-center justify-center text-base lg:text-lg xl:text-xl'>
              <Image src={"/assets/icons/star.svg"} alt='Star Icon' width={25} height={25} />
              <p>{rating}</p> | <p>{saleCount}</p>
            </div>
          </div>
          <p className='text-gray-2 text-[10px] lg:text-xs'>{promoDueDateText}</p>
        </div>

      </Link>
    </Suspense>
  )
}
