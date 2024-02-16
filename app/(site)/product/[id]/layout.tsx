import { Metadata, ResolvingMetadata } from 'next'

export async function generateStaticParams() {
  const productsId = await fetch('https://khaloo-be.vercel.app/products-metadata').then((res) => res.json())

  return productsId.map((prod: { prod_id: string }) => ({
    id: prod.prod_id,
  }))
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const product = await fetch(`https://khaloo-be.vercel.app/product-metadata/${id}`).then((res) => res.json())

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: product.prod_name,
  }
}

export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}