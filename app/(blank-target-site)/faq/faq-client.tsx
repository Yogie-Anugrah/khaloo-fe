"use client"
import Accordion from "@/components/accordion";
import { SearchInput } from "@/components/search-input";
import { useMemo, useState } from "react";

const data = [
  {
    key: '1',
    label: 'Lorem Ipsum Dolor Amet 1',
    children: 'Content for item 1',
  },
  {
    key: '2',
    label: 'Lorem Ipsum Dolor Amet 2',
    children: 'Content for item 2',
  },
  {
    key: '3',
    label: 'Lorem Ipsum Dolor Amet 3',
    children: 'Content for item 3',
  },
  {
    key: '4',
    label: 'Lorem Ipsum Dolor Amet 4',
    children: 'Content for item 4',
  },
];

export default function FAQClient() {
  const [search, setSearch] = useState('');

  const filteredData = useMemo(() => {
    return data.filter((item) => item.label.toLowerCase().includes(search.toLowerCase()));
  }, [search]);

  return (
    <div className="flex flex-col mt-12 lg:mt-16 gap-8 lg:gap-9 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      <SearchInput
        placeholder="Cari pertanyaanmu disini"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {Boolean(filteredData.length) ? (
        <Accordion data={filteredData} />
      ) : (
        <p className="text-center font-bold">Not Found</p>
      )}
    </div>
  );
}
