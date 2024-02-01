'use client';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sidebarData = [
  {
    section: 'Halaman Utama',
    icon: '/admin/assets/icons/home.svg',
    items: [
      {
        category: 'Product',
        icon: '/admin/assets/icons/shopping-bag.svg',
        items: [
          {
            name: 'Tambah Produk',
            path: '/admin/product/new',
            icon: '/admin/assets/icons/add-shopping-bag.svg',
          },
          {
            name: 'Daftar Produk',
            path: '/admin/product/list',
            icon: '/admin/assets/icons/source.svg',
          },
        ],
      },
      {
        category: 'Partnership',
        icon: '/admin/assets/icons/groups.svg',
        items: [
          {
            name: 'Daftar Partner',
            path: '/admin/partner/new',
            icon: '/admin/assets/icons/person-search.svg',
          },
          {
            name: 'Atur Tipe Partner',
            path: '/admin/partner/edit',
            icon: '/admin/assets/icons/pencil.svg',
          },
        ],
      },
    ],
  },
  {
    section: 'Atur Beranda',
    icon: '/admin/assets/icons/draw.svg',
    items: [
      {
        category: 'Artikel',
        icon: '/admin/assets/icons/article.svg',
        items: [
          {
            name: 'Tambah Artikel',
            path: '/admin/article/new',
            icon: '/admin/assets/icons/post-add.svg',
          },
          {
            name: 'Daftar Artikel',
            path: '/admin/article/list',
            icon: '/admin/assets/icons/view-list.svg',
          },
        ],
      },
      {
        category: 'Statistik Performa',
        icon: '/admin/assets/icons/stack-line-chart.svg',
        items: [
          {
            name: 'Website',
            path: '/admin/statistic/website',
            icon: '/admin/assets/icons/web.svg',
          },
          {
            name: 'Penjualan',
            path: '/admin/statistic/sales',
            icon: '/admin/assets/icons/shopping-cart.svg',
          },
          {
            name: 'Pembelian',
            path: '/admin/statistic/purchase',
            icon: '/admin/assets/icons/settings-accessibility.svg',
          },
        ],
      },
      {
        category: 'Lokasi',
        icon: '/admin/assets/icons/location.svg',
        items: [
          {
            name: 'Toko Offline',
            path: '/admin/location/offline',
            icon: '/admin/assets/icons/store.svg',
          },
          {
            name: 'Acara Offline',
            path: '/admin/location/event',
            icon: '/admin/assets/icons/event.svg',
          },
        ],
      },
      {
        category: 'Settings',
        icon: '/admin/assets/icons/admin-panel-settings.svg',
        items: [
          {
            name: 'Pengaturan Admin',
            path: '/admin/settings',
            icon: '/admin/assets/icons/article.svg',
          },
        ],
      },
    ],
  },
];

export default function Sidebar() {
  const navs = useNavs();
  // Side Bar background ref
  const pathname = usePathname();

  return (
    <nav
      aria-label='Navbar'
      className='font-poppins sticky left-0 top-0 flex h-screen flex-col gap-6 bg-primary-2
      px-6 py-6 text-base font-normal text-white lg:gap-8 lg:text-lg xl:py-12 xl:text-xl 2xl:py-14 2xl:text-2xl'
    >
      {/* Logo */}
      <div className='flex w-full flex-col items-center justify-center gap-5 lg:gap-7'>
        <Link href='/' className='text-2xl font-bold' aria-label='Home'>
          <Image
            alt='Logo Icon'
            width={180}
            height={40}
            className='h-auto w-28 object-contain object-center lg:w-44'
            src={'/assets/images/logo.png'}
            priority
            sizes={'(max-width: 640px) 70px, 100px'}
          />
        </Link>
        <div className='flex items-center gap-4'>
          <Image
            src={'/admin/assets/icons/person.svg'}
            alt={'Admin Utama Icon'}
            width={20}
            height={20}
            sizes='20px'
          />
          <p>
            Hi, <span className='font-bold'>Admin Utama</span>!
          </p>
        </div>
      </div>

      {/* Display URL Navigation */}
      <div
        className='custom-scrollbar flex w-[200px] flex-col items-start justify-start 
         gap-6 overflow-y-auto bg-primary-2 bg-transparent px-5 md:w-[270px] xl:w-[300px]'
      >
        {/* Map data navigation */}
        <ul className={'flex w-full flex-1 flex-col justify-center gap-3'}>
          {navs.map((sec) => (
            <li key={sec.section} className='space-y-3 lg:space-y-4'>
              {/* Section Main Grouping */}
              <div className='flex items-center gap-3'>
                <Image
                  src={sec.icon}
                  alt={sec.section + 'Logo'}
                  width={20}
                  height={20}
                  sizes='20px'
                />
                <p className='font-bold'>{sec.section}</p>
              </div>
              <ul
                className='flex flex-col gap-4 text-sm lg:text-base xl:text-lg '
                key={`ul-${sec.section}`}
              >
                {sec.items.map((item) => (
                  <li key={`${item.category}`} className='space-y-3'>
                    {/* Category Grouping */}
                    {/* Case 1: item category >1 */}
                    {item.items.length > 1 ? (
                      <div className='flex items-center gap-3'>
                        <Image
                          src={item.icon}
                          alt={item.category + 'Logo'}
                          width={18}
                          height={18}
                          sizes='18px'
                        />
                        <p className='font-bold'>{item.category}</p>
                      </div>
                    ) : (
                      // Case 2: Item Category ==1: Make the category as link
                      <Link
                        href={item.items[0].path}
                        aria-label={item.items[0].path.split('/').join(' ')}
                        data-navlink
                      >
                        <div className='flex items-center gap-3 font-bold'>
                          <Image
                            src={item.items[0].icon}
                            alt={item.items[0].name + 'Logo'}
                            width={19}
                            height={19}
                            sizes='19px'
                          />
                          {item.items[0].name}
                        </div>
                      </Link>
                    )}
                    <ul
                      className='ml-5 flex flex-col gap-3 lg:ml-7'
                      key={`ul-${item.category}`}
                    >
                      {/* Link Path Navogation */}
                      {Boolean(item.items.length > 1) &&
                        item.items.map((subItem) => (
                          <li
                            key={subItem.name}
                            className={clsx(
                              'hover:underline hover:underline-offset-4',
                              pathname == subItem.path && 'font-bold'
                            )}
                          >
                            <Link
                              href={subItem.path}
                              aria-label={subItem.path.split('/').join(' ')}
                              data-navlink
                            >
                              <div className='flex items-center gap-3'>
                                <Image
                                  src={subItem.icon}
                                  alt={subItem.name + 'Logo'}
                                  width={19}
                                  height={19}
                                  sizes='20px'
                                />
                                {subItem.name}
                              </div>
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

const roleLevel: {
  freelance: number;
  admin: number;
  superadmin: number;
} = {
  freelance: 0,
  admin: 1,
  superadmin: 2,
};

// Simulation getRole
function getUser() {
  return {
    data: {
      role: 'superadmin',
    },
  };
}

// a function to decide the content of the sidebar
function useNavs() {
  const { data: user } = getUser();

  if (!user) {
    return [];
  }

  const navs = [];

  switch (roleLevel[user.role as keyof typeof roleLevel]) {
    case roleLevel.superadmin:
      // Superadmin gets all navigation items
      navs.push(...sidebarData);
      break;

    case roleLevel.admin:
      // Admin excludes 'Settings' category if length < 2
      navs.push(
        ...sidebarData.map((section) => ({
          ...section,
          items: section.items.filter(
            (item) => item.category !== 'Settings' || item.items.length >= 2
          ),
        }))
      );
      break;

    case roleLevel.freelance:
      // Freelance includes only 'Artikel' category
      navs.push(
        ...sidebarData
          .filter((item) => item.section === 'Atur Beranda')
          .map((section) => ({
            ...section,
            items: section.items.filter((item) => item.category === 'Artikel'),
          }))
      );
      break;
  }

  return navs;
}
