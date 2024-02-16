import { type Metadata } from 'next'
import { ReactNode } from 'react'

export async function generateStaticParams() {
  const productIds = await fetch('https://khaloo-be.vercel.app/products-id').then((res) => res.json())
  return productIds.map((prod: { prod_id: number }) => ({
    id: prod.prod_id.toString(),
  }))
}


type Props = {
  params: { id: string }
}

export async function generateMetadata(
  { params }: Props,
  // parent: ResolvingMetadata
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

export default function ServerLayout({ children }: { children: ReactNode },) {
  return <>{children}</>
}
