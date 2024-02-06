import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

const socialMedias = [
  {
    title: 'Khaloo',
    links: [
      {
        title: 'About Us',
        href: '/about-us',
      },
      {
        title: 'Partner With Us',
        href: '/partner-with-us',
      },
      {
        title: 'Our Store',
        href: '/our-store',
      },
    ],
  },
  {
    title: 'Information',
    links: [
      {
        title: 'FAQ',
        href: '/faq',
      },
      {
        title: 'Career',
        href: '/career',
      },
      {
        title: 'Terms & Condition',
        href: '/terms-condition',
      },
      {
        title: 'Privacy Policy',
        href: '/privacy-policy',
      },
    ],
  },
];

const onlineStores = [
  {
    title: 'Contact & Follow Us',
    icons: [
      {
        link: 'https://www.instagram.com/khaloobeauty/?hl=en',
        url: '/assets/icons/instagram.svg',
        alt: 'Instagram',
        width: 20,
        height: 20,
      },
      {
        link: 'https://www.linkedin.com/company/khaloobeauty/',
        url: '/assets/icons/linkedin.svg',
        alt: 'linkedin',
        width: 20,
        height: 20,
      },
      {
        link: 'https://www.tiktok.com/@khaloo.beauty',
        url: '/assets/icons/tiktok.svg',
        alt: 'tiktok',
        width: 20,
        height: 20,
      },
      {
        link: 'https://www.facebook.com/people/Khaloo-Beauty/100083609192190/?fref=nf',
        url: '/assets/icons/facebook.svg',
        alt: 'facebook',
        width: 25,
        height: 25,
      },
      {
        link: 'http://tiny.cc/wakhaloo',
        url: '/assets/icons/whatsapp.svg',
        alt: 'whatsapp',
        width: 20,
        height: 20,
      },
    ],
  },
  {
    title: 'Our Online Stores',
    icons: [
      {
        link: 'http://tiny.cc/profiletokopediakhaloo',
        url: '/assets/images/tokopedia.png',
        alt: 'tokopedia',
        width: 40,
        height: 40,
      },
      {
        link: 'http://tiny.cc/profileshopeekhaloo',
        url: '/assets/icons/shopee.svg',
        alt: 'shopee',
        width: 40,
        height: 40,
      },
      {
        link: 'http://tiny.cc/profilebliblikhaloo',
        url: '/assets/icons/blibli.svg',
        alt: 'blibli',
        width: 40,
        height: 40,
      },
      {
        link: 'http://tiny.cc/profilelazadakhaloo',
        url: '/assets/icons/lazada.svg',
        alt: 'lazada',
        width: 40,
        height: 40,
      },
    ],
  },
];

const certifications = [
  {
    src: '/assets/images/halal.png',
    alt: 'Sertifikasi Halal',
    width: 50,
    height: 50,
  },
  {
    src: '/assets/images/bpom.png',
    alt: 'Sertifikasi BPOM',
    width: 50,
    height: 50,
  },
  {
    src: '/assets/images/no-animal.png',
    alt: 'Sertifikasi No Animal',
    width: 65,
    height: 50,
  },
];

export default function Footer() {
  return (
    <footer className='flex flex-col bg-[#E6E6E6] px-8 py-10 text-black md:px-12 lg:px-20'>
      {/* Upper Main Content */}
      <div className='flex flex-col justify-around gap-10 pb-5 text-base lg:text-lg xl:flex-row xl:text-xl 2xl:text-2xl'>
        {/* Subcription Content */}
        <div className='max-xl flex flex-col gap-1 max-xl:items-center'>
          <p className='text-2xl font-bold text-primary-2 xl:text-[26px] 2xl:text-3xl'>
            Ikuti Berita terbaru Khaloo
          </p>
          <p className='text-sm font-semibold text-secondary-1 lg:text-base'>
            Dapatkan diskon 10% pembelian pertama
          </p>
          {/* Mailchimp subcription */}
          <div className='mt-3 flex w-fit flex-col items-center rounded-lg max-lg:gap-3 lg:flex-row lg:bg-white'>
            <input
              type='text'
              className='bg-white px-4 py-2 max-lg:rounded-lg md:w-72 lg:rounded-l-lg'
              placeholder='Alamat Email'
            />
            <button className='m-auto rounded-lg bg-secondary-1 px-5 py-2 font-bold text-white'>
              Subscribe
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 justify-around gap-5 sm:grid-cols-4 md:gap-10'>
          {/* Mapping link content */}
          {socialMedias.map((footerLink) => (
            <div key={footerLink.title} className='flex flex-col md:gap-1'>
              {/* Title section  */}
              <p className='font-bold text-primary-2'>{footerLink.title}</p>
              {/* Content link */}
              {footerLink.links.map((link) => (
                <Link
                  className='font-medium hover:underline'
                  key={link.title}
                  href={link.href}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}

          {/* Mapping blank target link social */}
          <div className='flex flex-col gap-6'>
            {onlineStores.map((footerLinkIcon, index) => (
              <div
                key={footerLinkIcon.title}
                className='flex flex-col md:gap-1'
              >
                {/* Title section  */}
                <p className='font-bold text-primary-2'>
                  {footerLinkIcon.title}
                </p>
                {/* Content Link Icon*/}
                <div className='flex flex-wrap items-center gap-3 2xl:gap-4'>
                  {footerLinkIcon.icons.map((icon) => (
                    <Link
                      key={icon.url}
                      href={icon.link}
                      target='_blank'
                      className='transition-all duration-300 hover:scale-105'
                    >
                      <Image
                        src={icon.url}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                        sizes={icon.width + 'px'}
                        className={clsx(
                          'aspect-square object-contain object-center',
                          index == 1 && 'rounded-md bg-white p-1'
                        )}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Internationalization */}
          <Link
            href='/id/'
            className='inline-flex h-fit items-center gap-1 font-bold text-secondary-1 hover:underline'
          >
            <Image
              src='/assets/icons/language.svg'
              alt='indonesia'
              width={20}
              height={20}
              sizes='20px'
            />
            Indonesia
          </Link>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className='flex flex-col-reverse items-center justify-between gap-5 border-t-[2px] border-black pt-5 sm:flex-row'>
        <p className='text-sm font-bold lg:text-base'>Copyright PT.Khaloo</p>
        <ul className='flex gap-4 text-base font-bold lg:text-lg 2xl:text-xl'>
          {certifications.map((image) => {
            return (
              <Image
                key={image.alt}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className='h-auto w-auto rounded-md bg-white object-contain object-center'
                sizes={image.width + 'px'}
              />
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
