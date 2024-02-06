'use client';
import { cn } from '@/libs/utils';
import { createQueryString } from '@/utils/search-query';
import clsx from 'clsx';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';

export default function SearchClient() {
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();
  const timeoutRef = useRef<NodeJS.Timeout | undefined>();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <form
      className={cn('mt-4 flex')}
      onSubmit={(e) => {
        e.preventDefault();
        clearTimeout(timeoutRef.current);
        timeoutRef.current = undefined;
      }}
    >
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
        <input
          type='search'
          value={search}
          placeholder='Search Store or Event...'
          className={clsx(
            'w-full bg-transparent text-black outline-none placeholder:text-[#585857] lg:text-lg xl:text-xl 2xl:text-2xl'
          )}
          onChange={(e) => {
            setSearch(e.target.value);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
              router.push(
                pathname + '?' + createQueryString('events', e.target.value)
              );
            }, 1000);
          }}
        />
      </div>
    </form>
  );
}
