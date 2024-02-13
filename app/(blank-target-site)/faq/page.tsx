import FAQClient from "@/app/(blank-target-site)/faq/faq-client";
import { Metadata } from "next";

export default function TnCPage() {

  return (
    <main className='flex text-black min-h-screen flex-col gap-5 px-8 py-8 md:px-20 lg:py-10 xl:px-32 xl:py-14 2xl:py-20 mb-10'>
      <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center">Frequently Asked Questions</h1>
      <FAQClient />
    </main>
  )
}


export const metadata: Metadata = {
  title: 'FAQ | Khaloo',
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
