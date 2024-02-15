import { cn } from "@/libs/utils";
import Image from "next/image";
import React from "react";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className='flex w-full items-center bg-gray-3 px-7 py-2.5 rounded-xl gap-4 font-normal'>
        {/* Label search Icon */}
        <label htmlFor='search'>
          <Image
            height={36}
            width={36}
            src='/assets/icons/search.svg'
            alt='Search Icon'
            className='aspect-square w-8 sm:w-9'
            sizes='(max-width: 640px) 28px, 32px'
          />
        </label>
        {/* Input Field */}
        <input
          id="search"
          type='search'
          placeholder='Search'
          className={cn('w-full h-full bg-transparent text-black outline-none placeholder:text-[#585857]', className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export { SearchInput };

