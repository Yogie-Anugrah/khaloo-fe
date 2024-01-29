import { currencyFormatter } from "@/utils/currency";
import clsx from "clsx";
import Image from "next/image";
import { useMemo, type Dispatch, type SetStateAction } from "react";

interface Product {
  name: string;
  price: number;
  category: string;
}

// Define the categorized data type
type CategorizedData = {
  [category: string]: Product[];
};

const dummyData = [
  {
    name: "Serum Muda Mulus",
    price: 150000,
    category: "Perawatan Wajah",
  },
  {
    name: "Masker Rambut Indah",
    price: 120000,
    category: "Perawatan Rambut",
  },
  {
    name: "Lipstik Velvet Elegan",
    price: 80000,
    category: "Makeup",
  },
  {
    name: "Peeling Tubuh Bersinar",
    price: 200000,
    category: "Perawatan Tubuh",
  },
  {
    name: "Eyeliner Tahan Lama",
    price: 60000,
    category: "Makeup",
  },
  {
    name: "Krim Malam Vitalitas",
    price: 250000,
    category: "Perawatan Kulit",
  },
  {
    name: "Maskara Volume Ekstra",
    price: 75000,
    category: "Makeup",
  },
  {
    name: "Pelembab Siang Segar",
    price: 180000,
    category: "Perawatan Wajah",
  },
  {
    name: "Shampoo Organik",
    price: 100000,
    category: "Perawatan Rambut",
  },
  {
    name: "Bedak Compact Matte",
    price: 90000,
    category: "Makeup",
  },
  {
    name: "Lulur Bali Relax",
    price: 220000,
    category: "Perawatan Tubuh",
  },
  {
    name: "Pensil Alis Presisi",
    price: 50000,
    category: "Makeup",
  },
  {
    name: "Toner Aloe Vera",
    price: 120000,
    category: "Perawatan Kulit",
  },
  {
    name: "Lip Balm Berwarna",
    price: 70000,
    category: "Makeup",
  },
  {
    name: "Krim Mata Anti-Penuaan",
    price: 280000,
    category: "Perawatan Wajah",
  },
  {
    name: "Minyak Rambut Aromaterapi",
    price: 150000,
    category: "Perawatan Rambut",
  },
  {
    name: "Eyeshadow Palet Profesional",
    price: 120000,
    category: "Makeup",
  },
  {
    name: "Sabun Mandi Pewangi Mawar",
    price: 80000,
    category: "Perawatan Tubuh",
  },
  {
    name: "Pembersih Wajah Micellar",
    price: 90000,
    category: "Perawatan Kulit",
  },
  {
    name: "Mascara Waterproof",
    price: 65000,
    category: "Makeup",
  },
  {
    name: "Krim Pemutih Malam",
    price: 210000,
    category: "Perawatan Wajah",
  },
];

export default function SearchNavbar({
  isSearchOpen,
  isSearchResultOpen,
  searchResult,
  setSearchResult,
  setIsSearchResultOpen,
}: {
  isSearchOpen: boolean;
  isSearchResultOpen: boolean;
  searchResult: string;
  setSearchResult: Dispatch<SetStateAction<string>>;
  setIsSearchResultOpen: Dispatch<SetStateAction<boolean>>;
}) {
  // Categorize the filtered data
  const categorizeFilteredData: CategorizedData = useMemo(() => {
    // Filter the data
    const filteredData = dummyData.filter(
      (data) =>
        data.name.toLowerCase().includes(searchResult.toLowerCase()) ||
        data.category.toLowerCase().includes(searchResult.toLowerCase())
    );

    // Categorize the filtered data
    return filteredData.reduce((acc, curr) => {
      const category = curr.category;
      const updatedAcc: CategorizedData = { ...acc };

      if (!updatedAcc[category]) {
        updatedAcc[category] = [curr];
      } else {
        updatedAcc[category].push(curr);
      }
      return updatedAcc;
    }, {});
  }, [searchResult]);

  return (
    <div
      className={clsx(
        "flex w-[calc(100%-30px)] md:w-[70%] z-50 absolute top-2.5 md:top-4 left-1/2 -translate-x-1/2 transition-all duration-300 overflow-hidden",
        isSearchOpen ? "absolute" : " -translate-y-full"
      )}
    >
      <div className="relative flex flex-col items-center w-full">
        {/* Search Field */}
        <div
          className={clsx(
            "w-full flex bg-gray-3 px-4 items-center py-2",
            isSearchResultOpen ? "rounded-t-lg rounded-b-none" : "rounded-lg"
          )}
          onFocus={() => {
            setIsSearchResultOpen(true);
          }}
        >
          {/* Search Icon */}
          <Image
            height={32}
            width={32}
            src="/assets/icons/search.svg"
            alt="Search Icon"
            className="aspect-square w-7 sm:w-8"
            sizes="(max-width: 640px) 28px, 32px"
          />
          {/* Input Field */}
          <input
            type="search"
            placeholder="Search"
            className={clsx(
              "w-full text-black bg-transparent placeholder:text-[#585857] outline-none"
            )}
            onChange={(e) => setSearchResult(e.target.value)}
            value={searchResult}
          />
        </div>
        {/* Content Show */}
        <div
          className={clsx(
            "bg-gray-4 py-4 px-6 lg:px-10 lg:py-8 2xl:px-16 2xl:py-10 w-full h-[500px] md:h-[670px] overflow-y-scroll space-y-6 rounded-b-lg",
            isSearchResultOpen ? "visible" : "invisible"
          )}
        >
          {/* Case not found matches */}
          {Object.entries(categorizeFilteredData).length === 0 ? (
            <p className="text-black font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-center ">
              Not found
            </p>
          ) : (
            // Case found matches mapping based on category
            Object.entries(categorizeFilteredData).map(
              ([category, products]) => (
                <div className="flex flex-col gap-4 xl:gap-6" key={category}>
                  <p className="text-black font-semibold text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                    {category + " (" + products.length + ")"}
                  </p>
                  {/* Item in category matches */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {products.map((product) => (
                      <div
                        className="flex gap-y-2 gap-x-4 xl:gap-x-6"
                        key={product.name}
                      >
                        <div className="bg-gray-2 rounded-xl sm:rounded-2xl md:rounded-3xl w-12 sm:w-16 lg:w-20 xl:w-24 2xl:w-28 aspect-square flex-shrink-0 h-fit" />
                        <div className="flex flex-col">
                          <p className="font-medium">{product.name}</p>
                          <p className="text-base lg:text-lg xl:text-xl">
                            {currencyFormatter(product.price)}
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
    </div>
  );
}
