"use client";
import { formatIntervalDate } from '@/utils/utils';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export type Location = {
  type: string;
  name: string;
  address: string;
  imageUrl: string;
  mapsUrl: string;
};


export type SearchResult = {
  stores: Location[];
  events: Event[];
};


export type Event = {
  type: string;
  name: string;
  startDate: Date;
  endDate: Date;
  time: string;
  address: string;
  bannerUrl: string;
  imageUrl: string;
};

export interface CardStoreProps {
  title: string;
  address: string;
  imageUrl: string;
  linkMaps?: string;
  bannerUrl?: string;
  startDate?: Date;
  endDate?: Date;
  time?: string;
  type: "store" | "event"
}


export default function CardStore({
  title,
  address,
  imageUrl,
  linkMaps,
  startDate,
  endDate,
  time,
  type,
  bannerUrl
}: CardStoreProps) {
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const sideBarBgRef = useRef<HTMLDivElement>(null);


  // Close Navbar when user clicks on black background stuffs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If Userclick is in the black background stuff
      if (
        sideBarBgRef.current &&
        sideBarBgRef.current.contains(event.target as Node)
      ) {
        setIsBannerOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsBannerOpen]);


  // Overflow hidden when search result is open
  useEffect(() => {
    if (isBannerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isBannerOpen]);


  return (
    <>
      <div className='flex w-full items-stretch justify-center gap-4 max-sm:flex-col sm:gap-7 md:gap-10'>
        {/* Image  */}
        <Image
          src={imageUrl}
          width={400}
          height={300}
          alt={title + ' image'}
          className='m-auto h-auto w-full rounded-[20px] object-cover object-center max-lg:max-w-[300px] lg:w-[320px] lg:rounded-[30px] xl:w-[400px] '
          style={{
            boxShadow: ' 0px 4px 32px rgba(0, 0, 0, 0.3)',
          }}
          sizes='(max-width: 1023px) 300px, 400px'
        />
        <div className='flex flex-1 flex-col justify-between gap-6'>
          <div className='flex flex-col gap-1 text-black lg:gap-3'>
            {/* Title */}
            <p className='text-xl font-semibold lg:text-2xl xl:text-3xl 2xl:text-4xl'>
              {title}
            </p>
            {/* Interval Date */}
            <div className='text-lg lg:text-xl xl:text-2xl 2xl:text-[28px] flex flex-col gap-1'>
              {startDate && endDate && (
                formatIntervalDate(startDate, endDate)
              )}
              {/* Time */}
              {type === "event" && time &&
                <p>Pukul {time}</p>
              }
              {/* Address */}
              <p>
                {address}
              </p>
            </div>
          </div>
          <div>
            {/* Maps */}
            {type === "store" ? (
              linkMaps &&
              <Link href={linkMaps} target='_blank'>
                <button className='hover:brightness-90 duration-300 transition rounded-lg bg-secondary-1 px-20 py-2 text-base font-medium text-white lg:text-lg xl:text-xl 2xl:text-2xl'>
                  Maps
                </button>
              </Link>
            ) : (
              // Open Banner
              <button
                onClick={() => setIsBannerOpen(true)}
                className='hover:brightness-90 duration-300 transition rounded-lg bg-secondary-1 px-20 py-2 text-base font-medium text-white lg:text-lg xl:text-xl 2xl:text-2xl'>
                See More
              </button>
            )}
          </div>
        </div>
      </div>
      {/* Banner Popup */}
      {isBannerOpen && bannerUrl && (
        <>
          < div
            ref={sideBarBgRef}
            className={
              clsx(
                'fixed inset-0 z-[400] h-screen w-screen bg-opacity-80 bg-black backdrop-blur-sm',
                isBannerOpen
                  ? 'visible'
                  : 'invisible'
              )
            }
          />
          <div className='fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 z-[500] w-[80%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-auto overflow-hidden rounded-xl lg:rounded-2xl'>
            <div className='relative w-fit h-fit'>
              <button onClick={() => setIsBannerOpen(false)}>
                <Image src={"/assets/icons/x.svg"} alt='close icon' width={25} height={25} className='absolute right-3 lg:right-5 top-10 3-4 h-4 lg:w-5 lg:h-5' />
              </button>
              <Image src={bannerUrl} alt={title + " Banner"} width={1920} height={1080} className='rounded-xl lg:rounded-2xl object-contein object-center' />
            </div>
          </div>
        </>
      )}
    </>

  );
}
