import { Metadata } from "next";

const privacyPolicyData = [
  {
    title: "Pendahuluan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Kapan Khaloo Mengumpulkan Data",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Data Pribadi Apa yang Akan Dikumpulkan",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Pengumpulan Data Lainnya",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Cookies",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Bagaimana Kami Mengumpulkan Data Anda",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Bagaimana Kami Melindungi Data Anda",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Apakah Khaloo Menyebarkan Data ke Pihak Luar?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
  {
    title: "Pertanyaan atau Masalah Silahkan Hubungi Kami",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a tempor augue. Nam nisl neque, faucibus pulvinar semper ac, rhoncus vel ipsum. Integer pellentesque leo at congue interdum. Quisque in nisi efficitur, vulputate sem et, vestibulum lorem. Ut eget sagittis nisl. Phasellus acinia rhoncus metus, sit amet fermentum enim. Vestibulum eu rutrum ipsum. Donec rhoncus magna nec ex pretium commodo."
  },
]

export default function PrivacyPolicyPage() {
  return (
    <main className='flex text-black min-h-screen flex-col gap-5 px-8 py-8 md:px-20 lg:py-10 xl:px-32 xl:py-14 2xl:py-20 mb-10'>
      <h1 className="font-bold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center">Privacy Policy</h1>
      <ol className="flex flex-col mt-8 lg:mt-11 gap-8 lg:gap-9 text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
        {privacyPolicyData.map((data, index) => {
          return (
            <li key={data.title} className="flex flex-col gap-3 lg:gap-4">
              <h2 className="font-semibold"><span>{index + 1}. </span>{data.title}</h2>
              <p className="leading-7 lg:leading-9 xl:leading-[44px]">{data.desc}</p>
            </li>
          )
        })}
      </ol>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Privacy Policy | Khaloo',
  description:
    'privacy-policy-description',
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
    canonical: '/privacy-policy',
    languages: {
      'en-US': '/en-US/privacy-policy',
      'id-ID': '/id-ID/privacy-policy',
    },
  },
  openGraph: {
    title: 'Khaloo Beauty',
    description:
      'privacy-policy-description',
    url: 'https://www.khaloobeauty.com/privacy-policy',
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
      'privacy-policy-description',
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