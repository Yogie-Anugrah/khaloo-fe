import TabClient from '@/app/(site)/product/[id]/tabs-client';
import Button from '@/components/button';
import CardProduct from '@/components/card-product';
import { currencyFormatter } from '@/utils/currency';
import Image from 'next/image';
import Link from 'next/link';


async function getDetailProduct({ id }: { id: string }) {
  try {
    const res = await fetch(`https://khaloo-be.vercel.app/product/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch detail product data');
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export default async function DetailProductPage({ params }: { params: { id: string } }) {
  const productDetail = await getDetailProduct({ id: params.id });
  return (
    <main className='flex min-h-screen flex-col gap-10 overflow-hidden px-8 py-8 text-black md:px-20 lg:gap-14 lg:py-10 xl:px-32 xl:py-14 2xl:py-20'>
      {/* Back Link Navigation */}
      <Link href='/product' className='flex items-center gap-5'>
        <Image
          src={'/assets/icons/chevron.svg'}
          alt='Back Button'
          width={20}
          height={20}
          className='aspect-square w-5 md:w-6 lg:w-7'
        />
        <p className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
          Kembali ke daftar produk
        </p>
      </Link>
      {/* Detail Page Content */}
      <div className='flex flex-col gap-10 md:gap-12 lg:gap-16 lg:flex-row'>
        {/* Image and Carousel */}
        <div className='mx-auto flex h-fit w-full max-w-[300px] sm:max-w-[400px] flex-col lg:w-[30%]'>
          {/* Product Image */}
          <Image
            src={productDetail.prod_main_img}
            alt='Product Image'
            width={654}
            height={631}
            className='h-auto w-full rounded-3xl object-cover object-center'
          />
          {/* Carousel */}
          <div className='relative w-full'>
            {/* <ConfigProvider
              theme={{
                components: {
                  Carousel: {
                    dotWidth: 5,
                    dotHeight: 5,
                    dotActiveWidth: 5,
                  },
                },
                token: {
                  colorBgContainer: '#000000',
                },
              }}
            >
              <Carousel className='grid grid-cols-3'>
                <div>
                  <h3 className='flex aspect-square w-1/3 bg-red-500 text-black'>
                    1
                  </h3>
                </div>
                <div>
                  <h3 className='flex aspect-square w-1/3 bg-red-500 text-black'>
                    2
                  </h3>
                </div>
                <div>
                  <h3 className='flex aspect-square w-1/3 bg-red-500 text-black'>
                    3
                  </h3>
                </div>
                <div>
                  <h3 className='flex aspect-square w-1/3 bg-red-500 text-black'>
                    4
                  </h3>
                </div>
              </Carousel>
            </ConfigProvider> */}
          </div>
        </div>
        {/* Detail Content */}
        <div className='flex-1'>
          <div className='flex flex-col gap-3 sm:gap-4 md:gap-5'>
            {/* Title */}
            <h1 className='text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-[42px]'>
              {productDetail.prod_name}
            </h1>
            {/* Price */}
            <h2 className='text-xl font-medium lg:text-2xl xl:text-3xl 2xl:text-4xl'>
              {currencyFormatter(productDetail.prod_price)}
            </h2>
            {/* Button Shop */}
            <div className='h-20 w-full max-w-80 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
              <Button
                size='large'
                block
                variant='dark-primary-white'
                fontSize={40}
              >
                Shop Now
              </Button>
            </div>
          </div>
          <TabClient
            description={productDetail.prod_desc}
            ingredients={productDetail.prod_ingredients}
            howToUse={productDetail.prod_how_to_use}
          />

        </div>
      </div>

      {/* Watch Other Product */}
      <div className='flex flex-col gap-6 lg:gap-8 xl:gap-10'>
        <h2 className='text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-[42px]'>
          Watch This Product Review!
        </h2>
        <div className='flex gap-10'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className='flex flex-col gap-2 md:gap-3 xl:gap-4' key={index}>
              <div className='aspect-[3/2] w-[220px] rounded-3xl lg:rounded-[40px] bg-gray-2 lg:w-[400px] xl:w-[420px] 2xl:w-[450px]' />
              <h3 className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
                Judul Video Youtube
              </h3>
              <p className='text-base font-medium lg:text-lg xl:text-xl 2xl:text-2xl'>
                1.3 Views-3 Days Ago
              </p>
            </div>
          ))
          }
        </div>
      </div>

      <div className='flex flex-col gap-6 lg:gap-8 xl:gap-10'>
        <div className='flex justify-between flex-wrap gap-2 lg:gap-5'>
          <h2 className='text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-[42px]'>
            Watch This Product Review!
          </h2>
          <Link
            href='/product'
            className='flex items-center gap-5 text-primary-2'
          >
            <p className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
              Selengkapnya
            </p>
            <Image
              src={'/assets/icons/arrow.svg'}
              alt='Back Button'
              width={20}
              height={20}
              className='aspect-square w-7 lg:w-10 2xl:w-12'
            />
          </Link>
        </div>
        {/* Card Product */}
        <div className='flex flex-wrap gap-10 items-center justify-center'>
          {Array.from({ length: 4 }).map((_, index) => (
            <CardProduct
              imageUrl={'/assets/images/product-1.png'}
              key={index}
              id='3'
              className='m-auto'
              title='Slow Down Hair Reducer Cream'
              price={45000}
            />
          ))}
        </div>
      </div >
    </main >
  );
}
