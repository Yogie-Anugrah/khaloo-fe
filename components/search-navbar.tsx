import { API_URL } from '@/libs/constant';
import { currencyFormatter } from '@/utils/utils';
import clsx from 'clsx';
import debounce from 'lodash.debounce';
import Image from 'next/image';
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react';

type DataPromise = {
  title: string;
  desc: string;
  imageUrl: string;
}

type CombinedResults = {
  product: {
    title: string;
    data: DataPromise[];
  };
  location: {
    title: string;
    data: DataPromise[];
  };
};

type ResultKeys = keyof CombinedResults;

export default function SearchNavbar({
  isSearchOpen,
  isSearchResultOpen,
  searchResult,
  setSearchResult,
  setIsSearchResultOpen,
  setIsSearchOpen,
}: {
  isSearchOpen: boolean;
  isSearchResultOpen: boolean;
  searchResult: string;
  setSearchResult: Dispatch<SetStateAction<string>>;
  setIsSearchResultOpen: Dispatch<SetStateAction<boolean>>;
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [filteredData, setFilteredData] = useState<CombinedResults>({ product: { title: '', data: [] }, location: { title: '', data: [] } });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from /products/search
        const productsResponse = await fetch(`${API_URL}/products/search?query=${searchResult}`, { cache: "no-cache" });
        const productsData = await productsResponse.json() as DataPromise[];

        // Fetch data from /locations/search
        const locationsResponse = await fetch(`${API_URL}/locations/search?query=${searchResult}`, { cache: "no-cache" });
        const locationsData = await locationsResponse.json() as DataPromise[];

        // Check if both product and location data are available before combining
        if (productsData.length > 0 || locationsData.length > 0) {
          // Combine results
          const combinedResults = {
            product: {
              title: "Products",
              data: productsData
            },
            location: {
              title: "Locations",
              data: locationsData
            }
          };
          setFilteredData(combinedResults);
        } else {
          // No results found for both product and location, reset data
          setFilteredData({ product: { title: '', data: [] }, location: { title: '', data: [] } });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const debouncedFetchData = debounce(fetchData, 3000);

    if (searchResult) {
      debouncedFetchData();
    } else {
      // Reset data if searchResult is empty
      setFilteredData({ product: { title: '', data: [] }, location: { title: '', data: [] } });
    }
  }, [searchResult]);

  return (
    <div
      className={clsx(
        'absolute left-1/2 top-2.5 z-0 flex w-[calc(100%-30px)] -translate-x-1/2 overflow-hidden transition-all duration-300 md:top-4 md:w-[60%] 2xl:w-[65%]',
        isSearchOpen ? 'absolute' : ' -translate-y-full'
      )}
    >
      <div className='flex gap-4 w-full'>
        <div className='relative flex w-full flex-col items-center'>
          {/* Search Field */}
          <div
            className={clsx(
              'flex w-full items-center gap-2 bg-gray-3 px-4 py-2',
              isSearchResultOpen && searchResult ? 'rounded-b-none rounded-t-lg' : 'rounded-lg'
            )}
            onFocus={() => {
              setIsSearchResultOpen(true);
            }}
          >
            {/* Search Icon */}
            <Image
              height={32}
              width={32}
              src='/assets/icons/search.svg'
              alt='Search Icon'
              className='aspect-square w-7 lg:w-8'
              sizes='(max-width: 640px) 28px, 32px'
            />
            {/* Input Field */}
            <input
              type='search'
              placeholder='Search'
              className={clsx(
                'w-full bg-transparent text-black outline-none placeholder:text-[#585857]'
              )}
              onChange={(e) => setSearchResult(e.target.value)}
              value={searchResult}
            />
          </div>
          {/* Content Show */}
          <div
            className={clsx(
              'max-h-[500px] w-full space-y-6 overflow-y-auto rounded-b-lg bg-gray-4 px-6 py-4 break-all md:max-h-[670px] lg:px-10 lg:py-8 2xl:px-16 2xl:py-10',
              isSearchResultOpen && searchResult ? 'visible' : 'invisible',

            )}
          >
            {/* Case not found matches */}
            {filteredData && Boolean(filteredData) && Object.keys(filteredData).every((key: string) => {
              const validKeys: ("product" | "location")[] = ["product", "location"];
              return validKeys.includes(key as ResultKeys) && filteredData[key as ResultKeys]?.data.length === 0;
            }) && Boolean(searchResult) ? (
              <p className='text-center text-lg font-semibold text-black lg:text-xl xl:text-2xl 2xl:text-3xl '>
                Not Result Found for {'"' + searchResult + '"'}
              </p>
            ) : (
              Boolean(searchResult) &&
              // Case found matches mapping based on category
              Object.entries(filteredData || {}).map(
                ([category, { title, data }]) => (
                  <div className={clsx('flex flex-col gap-4 xl:gap-6', !searchResult && "hidden")} key={category}>
                    <p className='text-lg font-semibold text-black lg:text-xl xl:text-2xl 2xl:text-3xl'>
                      {title + ' (' + data.length + ')'}
                    </p>
                    {/* Item in category matches */}
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                      {data.map((item) => (
                        <div
                          className='flex gap-x-4 gap-y-2 xl:gap-x-6'
                          key={item.title}
                        >
                          <div className='aspect-square h-fit w-12 flex-shrink-0 rounded-xl bg-gray-2 sm:w-16 sm:rounded-2xl md:rounded-3xl lg:w-20 xl:w-24 2xl:w-28' />
                          <div className='flex flex-col'>
                            <p className='font-medium'>{item.title}</p>
                            <p className='text-base lg:text-lg xl:text-xl'>
                              {item.title === 'Locations' ? item.desc : currencyFormatter(parseInt(item.desc))}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )
            )}
          </div>

        </div>
        <button
          className={clsx('md:hidden w-fit h-fit mt-3 transition-all duration-300', isSearchOpen && "rotate-90")}
          onClick={(e) => {
            e.stopPropagation();
            if (isSearchOpen) {
              setIsSearchOpen(false);
              setIsSearchResultOpen(false);
            }
            else {
              setIsSearchOpen(true);

            }
          }}
        >
          <Image
            height={32}
            width={32}
            src={"/assets/icons/x.svg"}
            alt='Search Icon'
            className={clsx("aspect-square md:hidden w-5 sm:w-6")}
            sizes='(max-width: 640px) 28px, 32px'
          />
        </button>
      </div>
    </div>
  );
}
