import { type Metadata } from 'next'
import { ReactNode } from 'react'
import { API_URL } from '../../../../libs/constant'

export async function generateStaticParams() {
  const productIds = await fetch(`${API_URL}/products/list/id`).then((res) => res.json())
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
  const product = await fetch(`${API_URL}/products/metadata/${id}`).then((res) => res.json())


  return {
    title: product.prod_name + " | Khaloo",
  }
}

export default function ServerLayout({ children }: { children: ReactNode },) {
  return <>{children}</>
}
