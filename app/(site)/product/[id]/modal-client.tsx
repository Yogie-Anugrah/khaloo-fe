"use client"
import Button from "@/components/button";
import MarketPlaceCard, { MarketPlaceCardProps } from "@/components/market-place-card";
import { Modal } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ModalClient() {
  const dummyData: MarketPlaceCardProps[] = [
    {
      highlightPromo: 'Special Offer!',
      promoDueDateText: 'Valid until 2024-03-01',
      rating: 4.5,
      saleCount: 10300,
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
    {
      highlightPromo: 'Limited Time Deal!',
      promoDueDateText: 'Expires on 2024-03-15',
      rating: 4.2,
      saleCount: 7500000,
      price: 700000,
      linkUrl: 'https://example.com/shopee-product',
      type: 'blibli',
      discountPrice: 600000,
    },
    {
      highlightPromo: 'Limited Time Deal!',
      promoDueDateText: 'Expires on 2024-03-15',
      rating: 4.2,
      saleCount: 7500000,
      price: 700000,
      linkUrl: 'https://example.com/shopee-product',
      type: 'lazada',
      discountPrice: 600000,
    },
    // Add more dummy data for other marketplaces if needed
  ];
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen])


  return (
    <div>
      <div className='h-20 w-full max-w-80 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
        <Button
          size='large'
          block
          onClick={showModal}
          variant='dark-primary-white'
          fontSize={40}
        >
          Shop Now
        </Button>
      </div>
      <Modal open={isModalOpen} width={"80%"} centered footer={null} maskClosable onCancel={handleCancel} classNames={{ body: "p-6 md:p-10 lg:p-12" }}
        closeIcon={
          <Image src={"/assets/icons/x.svg"} alt='Close Icon' width={25} height={25} />
        }>
        <div className='flex flex-col items-center justify-center py-6 bg-white rounded-3xl lg:rounded-[40px] font-poppins sm:px-4 md:px-10 lg:px-12'>
          <div className='flex flex-col gap-8 md:gap-10 lg:gap-14  mb-3 md:mb-5 lg:mb-14'>
            <p className='text-black text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium text-center'>Pembelian dapat dilakukan melalui marketplace berikut</p>
            <div className='m-auto grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 md:gap-x-10 md:gap-y-14 2xl:gap-x-12 2xl:gap-y-20 xl:grid-cols-4 w-full'>
              {dummyData.map((item, index) => (
                <MarketPlaceCard key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </Modal >
    </div >
  )
}
