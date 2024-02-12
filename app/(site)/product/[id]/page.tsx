'use client';
import Button from '@/components/button';
import CardProduct from '@/components/card-product';
import { currencyFormatter } from '@/utils/currency';
import { StyleProvider, px2remTransformer } from '@ant-design/cssinjs';
import { ConfigProvider, Tabs, type TabsProps } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
const items: TabsProps['items'] = [
  {
    key: 'description',
    label: 'Description',
    children: (
      <div className='flex flex-col gap-4 break-all font-normal'>
        <p className='text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
          Avoskin Miraculous Refining Serum merupakan chemical exfoliator yang
          mengandung 10% AHA, 3% BHA dilengkapi dengan Niacinamide, Ceramide,
          dan bahan pendukung lainnya yang membuat serum ini efektif untuk
          membantu proses eksfoliasi sel kulit mati dan membantu memicu
          regenerasi sel kulit. Sehingga, kulit akan tampak lebih cerah, tekstur
          merata, kulit lebih lembut, serta merawat kulit berjerawat dan
          menyamarkan
          komedoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        <p className='text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
          Avoskin Miraculous Refining Serum merupakan chemical exfoliator yang
          mengandung 10% AHA, 3% BHA dilengkapi dengan Niacinamide, Ceramide,
          dan bahan pendukung lainnya yang membuat serum ini efektif untuk
          membantu proses eksfoliasi sel kulit mati dan membantu memicu
          regenerasi sel kulit. Sehingga, kulit akan tampak lebih cerah, tekstur
          merata, kulit lebih lembut, serta merawat kulit berjerawat dan
          menyamarkan
          komedoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        <p className='text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
          Avoskin Miraculous Refining Serum merupakan chemical exfoliator yang
          mengandung 10% AHA, 3% BHA dilengkapi dengan Niacinamide, Ceramide,
          dan bahan pendukung lainnya yang membuat serum ini efektif untuk
          membantu proses eksfoliasi sel kulit mati dan membantu memicu
          regenerasi sel kulit. Sehingga, kulit akan tampak lebih cerah, tekstur
          merata, kulit lebih lembut, serta merawat kulit berjerawat dan
          menyamarkan
          komedoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
        <p className='text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
          Avoskin Miraculous Refining Serum merupakan chemical exfoliator yang
          mengandung 10% AHA, 3% BHA dilengkapi dengan Niacinamide, Ceramide,
          dan bahan pendukung lainnya yang membuat serum ini efektif untuk
          membantu proses eksfoliasi sel kulit mati dan membantu memicu
          regenerasi sel kulit. Sehingga, kulit akan tampak lebih cerah, tekstur
          merata, kulit lebih lembut, serta merawat kulit berjerawat dan
          menyamarkan
          komedoxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </p>
      </div>
    ),
  },
  {
    key: 'ingredients',
    label: 'Ingredients',
    children: 'Content of Tab Pane 2',
  },
  {
    key: 'how-to-use',
    label: 'How to Use',
    children: 'Content of Tab Pane 3',
  },
];

export default function DetailProductPage() {
  const px2rem = px2remTransformer({
    rootValue: 9,
  });
  return (
    <main className='flex min-h-screen flex-col gap-10 overflow-hidden px-8 py-8 text-black md:px-20 lg:gap-14 lg:py-10 xl:px-32 xl:py-14 2xl:py-20'>
      {/* Back Link Navigation */}
      <Link href='/product' className='flex items-center gap-5'>
        <Image
          src={'/assets/icons/chevron.svg'}
          alt='Back Button'
          width={20}
          height={20}
          className='aspect-square w-3 lg:w-4'
        />
        <p className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
          Kembali ke daftar produk
        </p>
      </Link>
      {/* Detail Page Content */}
      <div className='flex flex-col gap-14 lg:flex-row'>
        {/* Image and Carousel */}
        <div className='mx-auto flex h-fit w-full max-w-[400px] flex-col lg:w-[30%]'>
          {/* Product Image */}
          <Image
            src={'/assets/images/product-1.png'}
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
          <div className='flex flex-col gap-7'>
            {/* Title */}
            <h1 className='text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-[42px]'>
              Serum Avoskin Miraculous Refining 30ml-AHA BHA-Waktunya Eksfoliasi
            </h1>
            {/* Price */}
            <h2 className='text-xl font-medium lg:text-2xl xl:text-3xl 2xl:text-4xl'>
              {currencyFormatter(50000)}
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
          <StyleProvider transformers={[px2rem]}>
            <ConfigProvider
              theme={{
                components: {
                  Tabs: {
                    fontWeightStrong: 600,
                    inkBarColor: '#AF2D6D',
                    itemActiveColor: '#AF2D6D',
                    itemHoverColor: '#AF2D6D',
                    itemSelectedColor: '#AF2D6D',
                  },
                },
              }}
            >
              {/* Tab Content */}

              <Tabs
                defaultActiveKey='description'
                centered
                items={items}
                tabBarGutter={64}
                className='text-3xl'
                tabBarStyle={{
                  borderBottom: '10px',
                  borderColor: '#AF2D6D',
                  fontWeight: 600,
                  width: '100%',
                  justifyContent: 'space-around',
                  flex: 1,
                  display: 'flex',
                }}
              />
            </ConfigProvider>
          </StyleProvider>
        </div>
      </div>

      {/* Watch Other Product */}
      <div className='flex flex-col gap-10'>
        <h2 className='text-2xl font-semibold lg:text-3xl xl:text-4xl 2xl:text-[42px]'>
          Watch This Product Review!
        </h2>
        <div className='flex gap-10'>
          <div className='flex flex-col gap-10'>
            <div className='aspect-[3/2] w-[220px] rounded-[40px] bg-gray-2 lg:w-[447px]' />
            <h3 className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
              Judul Video Youtube
            </h3>
            <p className='text-base font-medium lg:text-lg xl:text-xl 2xl:text-2xl'>
              1.3 Views-3 Days Ago
            </p>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='aspect-[3/2] w-[220px] rounded-[40px] bg-gray-2 lg:w-[447px]' />
            <h3 className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
              Judul Video Youtube
            </h3>
            <p className='text-base font-medium lg:text-lg xl:text-xl 2xl:tsext-2xl'>
              1.3 Views-3 Days Ago
            </p>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='aspect-[3/2] w-[220px] rounded-[40px] bg-gray-2 lg:w-[447px]' />
            <h3 className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
              Judul Video Youtube
            </h3>
            <p className='text-base font-medium lg:text-lg xl:text-xl 2xl:text-2xl'>
              1.3 Views-3 Days Ago
            </p>
          </div>
          <div className='flex flex-col gap-10'>
            <div className='aspect-[3/2] w-[220px] rounded-[40px] bg-gray-2 lg:w-[447px]' />
            <h3 className='text-lg font-medium lg:text-xl xl:text-2xl 2xl:text-3xl'>
              Judul Video Youtube
            </h3>
            <p className='text-base font-medium lg:text-lg xl:text-xl 2xl:text-2xl'>
              1.3 Views-3 Days Ago
            </p>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-10'>
        <div className='flex justify-between'>
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
              className='aspect-square w-10 lg:w-12'
            />
          </Link>
        </div>
        <div className='flex gap-10'>
          <CardProduct
            id='3'
            title='Slow Down Hair Reducer Cream'
            price={45000}
          />
          <CardProduct
            id='3'
            title='Slow Down Hair Reducer Cream'
            price={45000}
          />
          <CardProduct
            id='3'
            title='Slow Down Hair Reducer Cream'
            price={45000}
          />
          <CardProduct
            id='3'
            title='Slow Down Hair Reducer Cream'
            price={45000}
          />
        </div>
      </div>
    </main>
  );
}
