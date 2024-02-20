import MarketPlaceCard, { MarketPlaceCardProps } from '@/components/market-place-card';
import Image from 'next/image';
const Eye = () => {
  return <Image src={'/public/assets/icons/tiktok.svg'} alt='tuhu' />;
};

export default function Home() {

  const dummyData: MarketPlaceCardProps[] = [
    {
      highlightPromo: 'Special Offer!',
      promoDueDateText: 'Valid until 2024-03-01',
      rating: 4.5,
      saleCount: 100,
      price: 500000,
      linkUrl: 'https://example.com/tokopedia-product',
      type: 'tokopedia',
    },
    {
      highlightPromo: 'Limited Time Deal!',
      promoDueDateText: 'Expires on 2024-03-15',
      rating: 4.2,
      saleCount: 75,
      price: 700000,
      linkUrl: 'https://example.com/shopee-product',
      type: 'shopee',
      discountPrice: 600000,
    },
    // Add more dummy data for other marketplaces if needed
  ];

  return (
    <main className='flex min-h-screen flex-col gap-5 p-24'>
      <h2 className='text-2xl text-black'>Button</h2>
      <div className='m-auto grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 md:gap-x-10 md:gap-y-14 xl:grid-cols-3 2xl:gap-x-12 2xl:gap-y-20 desktop:grid-cols-4 w-full'>
        {dummyData.map((item, index) => (
          <MarketPlaceCard key={index} {...item} />
        ))}
      </div>
    </main>
  );
}
