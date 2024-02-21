import ModalClient from '@/app/(site)/product/[id]/modal-client';
import TabClient from '@/app/(site)/product/[id]/tabs-client';
import CardProduct from '@/components/card-product';
import { currencyFormatter, dateTimeFormatter, viewFormatter } from '@/utils/utils';
import Image from 'next/image';
import Link from 'next/link';


async function getDetailProduct({ id }: { id: string }) {
  try {
    const res = await fetch(`https://khaloo-be-nine.vercel.app/products/${id}`, { cache: "no-cache" });

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

async function getProducts() {
  try {
    const res = await fetch('https://khaloo-be-nine.vercel.app/products/list', { cache: "no-cache" });

    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await res.json();

    // Perform array data type return check
    if (!Array.isArray(data) || data.length === 0) {
      throw new Error('Invalid data received');
    }

    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export default async function DetailProductPage({ params }: { params: { id: string } }) {
  const productDetail = await getDetailProduct({ id: params.id });
  const products = (await getProducts()).slice(0, 4);
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
          Back to Product List
        </p>
      </Link>
      {/* Detail Page Content */}
      <div className='flex flex-col gap-10 md:gap-12 xll:gap-16 lg:flex-row'>
        {/* Image and Carousel */}
        <div className='mx-auto flex h-fit w-full max-w-[300px] sm:max-w-[400px] flex-col lg:max-w-[450px] lg:w-[33%]'>
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
            <ModalClient />
          </div>
          <TabClient
            description={productDetail.prod_desc}
            ingredients={productDetail.prod_ingredients}
            howToUse={productDetail.prod_how_to_use}
          />

        </div>
      </div>

      {/* Watch Other Product */}
      {Array.isArray(productDetail.prod_review) && productDetail.prod_review.length > 0 && (
        <div className='flex flex-col gap-6 lg:gap-8 xl:gap-10'>
          <h2 className='text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-[42px]'>
            Watch This Product Review!
          </h2>
          <div className='flex gap-10'>
            {productDetail.prod_review.map((vid: any, index: number) => {
              const ytId = vid.vid_url.split('v=')[1];
              return (
                <Link href={vid.vid_url} className='flex flex-col gap-2 md:gap-3 xl:gap-4' key={index} target='_blank'>
                  <div className='overflow-hidden w-fit h-fit rounded-3xl lg:rounded-[40px]'>
                    <Image src={`https://img.youtube.com/vi/${ytId}/0.jpg`} alt={vid.vid_title} width={450} height={300} className='aspect-[3/2] w-[220px] lg:w-[400px] xl:w-[420px] 2xl:w-[450px] hover:scale-105 transition-all duration-300 object-cover' />
                  </div>
                  <h3 className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
                    {vid.vid_title}
                  </h3>
                  <p className='text-base font-medium lg:text-lg xl:text-xl 2xl:text-2xl'>
                    {viewFormatter(vid.vid_views)} - {dateTimeFormatter(new Date(vid.vid_createdAt))}
                  </p>
                </Link>
              )
            })
            }
          </div>
        </div>
      )}

      <div className='flex flex-col gap-6 lg:gap-8 xl:gap-10'>
        <div className='flex justify-between flex-wrap gap-2 lg:gap-5'>
          <h2 className='text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-[42px]'>
            Other Products
          </h2>
          <Link
            href='/product'
            className='flex items-center gap-5 text-primary-2'
          >
            <p className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
              Others
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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full'>
          {products.map((prod) => (
            <CardProduct
              imageUrl={prod.prod_main_img}
              key={prod.prod_id}
              id={prod.prod_id}
              exist={prod.prod_exist}
              status={prod.prod_flag}
              title={prod.prod_name}
              price={prod.prod_price}
            />
          ))}
        </div>
      </div >
    </main >
  );
}
