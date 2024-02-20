import CardProduct from '@/components/card-product';
import { type Metadata } from 'next';

async function getProducts() {
  try {
    const res = await fetch('https://khaloo-be.vercel.app/product-list', { cache: "no-cache" });

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

export default async function ProductPage() {

  const products = await getProducts();
  return (
    <main className='flex min-h-screen flex-col gap-5 px-8 py-8 md:px-20 lg:py-10 xl:px-32 xl:py-14 2xl:py-20'>
      <div className='m-auto grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 md:gap-x-10 md:gap-y-14 xl:grid-cols-3 2xl:gap-x-12 2xl:gap-y-20 desktop:grid-cols-4'>
        {products.map((product) => (
          <CardProduct
            imageUrl={product.prod_main_img}
            id={product.prod_id}
            key={product.prod_id}
            title={product.prod_name}
            price={product.prod_price}
            exist={product.prod_exist}
            status={product.prod_flag}
          />
        ))}
      </div>
    </main>
  );
}


export const metadata: Metadata = {
  title: 'Product | Khaloo',
  description:
    'terms-condition-description',
  generator: 'Next.js',
  category: 'E-commerce',
  applicationName: 'Khaloo Beauty',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Khaloo Beauty',
    'Khaloo',
    'Beauty',
    'Skincare',
  ],
  metadataBase: new URL('https://www.khaloobeauty.com/'),
  alternates: {
    canonical: '/terms-condition',
    languages: {
      'en-US': '/en-US/terms-condition',
      'id-ID': '/id-ID/terms-condition',
    },
  },
  openGraph: {
    title: 'Khaloo Beauty',
    description:
      'terms-condition-description',
    url: 'https://www.khaloobeauty.com/terms-condition',
    siteName: 'Khaloo Beauty',
    images: [
      {
        url: '/next.svg',
        width: 1200,
        height: 630,
        alt: 'Khaloo Beauty Logo',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khaloo Beauty',
    description:
      'terms-condition-description',
    images: [
      {
        url: '/next.svg',
        width: 1200,
        height: 630,
        alt: 'Khaloo Beauty Logo',
      },
    ],
  },
};

