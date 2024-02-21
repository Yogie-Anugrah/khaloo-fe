"use client";

import CardStore, { SearchResult } from "@/components/card-store";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function SearchClient({ data }: { data: SearchResult }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Add params to the query string
  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(name, value);
    return params.toString();
  };

  // Remove params from the query string
  const removeQueryParam = (name: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(name);
    return params.toString();
  };

  // Get search and filter params from the query string
  const filter = searchParams.get("filter");

  const filteredData = useMemo(() => {
    if (filter === "locations") {
      return data.stores;
    }
    if (filter === "events") {
      return data.events;
    }
    return [...data.stores, ...data.events];
  }, [data, filter]);

  return (
    <>
      <div className='flex w-full flex-col gap-7'>
        {/* Filtering Button */}
        <div className='flex flex-wrap gap-5 font-semibold text-base text-primary-2 lg:text-lg xl:text-xl 2xl:text-2xl'>
          {/* All filter */}
          <button
            onClick={() =>
              router.push(pathname + "?" + removeQueryParam("filter"))
            }
            className={clsx(
              "rounded-xl bg-gray-4 border-primary-2 border-2 px-10 py-2 hover:brightness-90 duration-300 transition",
              !filter && "bg-primary-2 text-white"
            )}
          >
            All
          </button>
          {/* Location */}
          <button
            onClick={() =>
              router.push(
                pathname +
                "?" +
                createQueryString("filter", "locations")
              )
            }
            className={clsx(
              "rounded-xl bg-gray-4 border-primary-2 border-2 px-10 py-2 hover:brightness-90 duration-300 transition",
              filter === "locations" && "bg-primary-2 text-white"
            )}
          >
            In-Store
          </button>
          {/* Event */}
          <button
            onClick={() =>
              router.push(
                pathname +
                "?" +
                createQueryString("filter", "events")
              )
            }
            className={clsx(
              "rounded-xl bg-gray-4 border-primary-2 border-2 px-10 py-2 hover:brightness-90 duration-300 transition",
              filter === "events" && "bg-primary-2 text-white"
            )}
          >
            Event
          </button>
        </div>
      </div>
      <div className='flex w-full flex-col gap-10'>
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <CardStore
              key={index}
              title={item.name}
              address={item.address}
              imageUrl={item.imageUrl}
              linkMaps={filter === "locations" && 'mapsUrl' in item ? item.mapsUrl : undefined}
              startDate={filter === "events" && 'startDate' in item ? item.startDate : undefined}
              endDate={filter === "events" && 'startDate' in item ? item.endDate : undefined}
              time={filter === "events" && 'time' in item ? item.time : undefined}
              bannerUrl={filter === "events" && 'bannerUrl' in item ? item.bannerUrl : undefined}
              type={filter === "locations" ? "store" : "event"}
            />
          ))
        ) : (
          <p className='text-center text-black font-bold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl'>
            No Results Found
          </p>
        )}
      </div>
    </>
  );
}