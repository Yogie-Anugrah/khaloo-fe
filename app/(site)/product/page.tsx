import CardProduct, { CardProductProps } from '@/components/card-product';

export default function ProductPage() {
  const dummyProducts: CardProductProps[] = [
    {
      id: '1',
      title:
        'Product 1akl jdlka kjdkla jdklasdljaskdjalsd lkasjd lasdjklas djlkasd jklasd jklas djklasjd askl',
      price: 29.99,
      status: 'new',
    },
    {
      id: '2',
      title: 'Purifying and Brightening Facial Wash 100ml',
      price: 49.99,
      status: 'best-seller',
    },
    {
      id: '3',
      title: 'Product 3',
      price: 39.99,
      status: 'normal',
    },
    {
      id: '4',
      title: 'Product 4',
      price: 59.99,
      status: 'out-stock',
    },
    {
      id: '5',
      title: 'Product 5',
      price: 19.99,
      status: 'new',
    },
    {
      id: '6',
      title:
        'Product 6ak sd; k;asd;la kdl;as kdl;kasld;kals;dkl;askdlaskdl;askdl;kasdl;kas;dkasdlkasd;kasl;dkas;dlkals;dkas;ldk',
      price: 79.99,
      status: 'best-seller',
    },
    {
      id: '7',
      title:
        'Purifying and Brightening Facial Wash 100ml Seum kesads jdhjklas jdlakdjalkd jaskldjaslkdjklajsdkladjklajdlkjasdl',
      price: 69.99,
      status: 'normal',
    },
    {
      id: '8',
      title: 'Product 8',
      price: 89.99,
      status: 'out-stock',
    },
    {
      id: '9',
      title: 'Product 9',
      price: 99.99,
      status: 'new',
    },
    {
      id: '10',
      title: 'Product 10',
      price: 129.99,
      status: 'best-seller',
    },
  ];

  return (
    <main className='flex min-h-screen flex-col gap-5 px-8 py-8 md:px-20 lg:py-10 xl:px-32 xl:py-14 2xl:py-20'>
      <div className='desktop:grid-cols-4 m-auto grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 md:gap-x-10 md:gap-y-14 xl:grid-cols-3 2xl:gap-x-12 2xl:gap-y-20'>
        {dummyProducts.map((product, index) => (
          <CardProduct
            id={product.id}
            key={index}
            title={product.title}
            price={product.price}
            status={product.status}
          />
        ))}
      </div>
    </main>
  );
}
