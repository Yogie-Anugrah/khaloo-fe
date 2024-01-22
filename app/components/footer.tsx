import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = [
  {
    title: "Khaloo",
    links: [
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "Partner With Us",
        href: "/partner-with-us",
      },
      {
        title: "Our Store",
        href: "/our-store",
      },
    ],
  },
  {
    title: "Information",
    links: [
      {
        title: "FAQ",
        href: "/faq",
      },
      {
        title: "Career",
        href: "/career",
      },
      {
        title: "Terms & Condition",
        href: "/terms-condition",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
    ],
  },
];

const footerLinkIcons = [
  {
    title: "Contact & Follow Us",
    icons: [
      {
        link: "https://instagram.com/khaloobeauty/",
        url: "/assets/icons/instagram.svg",
        alt: "Instagram",
        width: 20,
        height: 20,
      },
      {
        link: "https://www.linkedin.com/company/khaloobeauty/",
        url: "/assets/icons/linkedin.svg",
        alt: "linkedin",
        width: 20,
        height: 20,
      },
      {
        link: "https://www.tiktok.com/@khaloo.beauty",
        url: "/assets/icons/tiktok.svg",
        alt: "tiktok",
        width: 20,
        height: 20,
      },
      {
        link: "https://wa.me/6281399230269?text=Hallo+Admin",
        url: "/assets/icons/whatsapp.svg",
        alt: "whatsapp",
        width: 20,
        height: 20,
      },
    ],
  },
  {
    title: "Our Online Stores",
    icons: [
      {
        link: "/",
        url: "/assets/images/tokopedia.png",
        alt: "instagram",
        width: 32,
        height: 32,
      },
      {
        link: "/",
        url: "/assets/images/tokopedia.png",
        alt: "instagram",
        width: 32,
        height: 32,
      },
      {
        link: "/",
        url: "/assets/images/tokopedia.png",
        alt: "instagram",
        width: 32,
        height: 32,
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#D2D1D1] text-black font-poppins px-8 md:px-12 lg:px-20 py-10">
      {/* Upper Main Content */}
      <div className="flex flex-col xl:flex-row pb-5 gap-10 justify-around text-base lg:text-lg">
        {/* Subcription Content */}
        <div className="flex flex-col gap-1 max-xl items-center">
          <p className="font-bold text-2xl">Ikuti Berita terbaru Khaloo</p>
          <p className="font-semibold text-base">
            Dapatkan diskon 10% pembelian pertama
          </p>
          {/* Mailchimp subcription */}
          <div className="flex flex-col xl:bg-white lg:flex-row items-center max-lg:gap-3 mt-3 rounded-lg w-fit">
            <input
              type="text"
              className="bg-white max-xl:rounded-lg xl:rounded-l-lg py-2 px-4 md:max-xl:w-80"
              placeholder="Email"
            />
            <button className="bg-[#434242] m-auto text-white rounded-lg py-2 px-5 font-bold ">
              Subscribe
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-10 justify-around">
          {/* Mapping link content */}
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className="flex flex-col md:gap-1">
              {/* Title section  */}
              <p className="font-bold">{footerLink.title}</p>
              {/* Content link */}
              {footerLink.links.map((link) => (
                <Link
                  className="font-medium hover:underline"
                  key={link.title}
                  href={link.href}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          ))}

          {/* Mapping blank target link social */}
          <div className="flex flex-col gap-6 text-base lg:text-lg">
            {footerLinkIcons.map((footerLinkIcon) => (
              <div
                key={footerLinkIcon.title}
                className="flex flex-col md:gap-1"
              >
                {/* Title section  */}
                <p className="font-bold">{footerLinkIcon.title}</p>
                {/* Content Link Icon*/}
                <div className="flex flex-wrap gap-3 xl:gap-5 items-center">
                  {footerLinkIcon.icons.map((icon) => (
                    <Link
                      key={icon.url}
                      href={icon.link}
                      target="_blank"
                      className=" hover:scale-105 duration-300 transition-all"
                    >
                      <Image
                        src={icon.url}
                        alt={icon.alt}
                        width={icon.width}
                        height={icon.height}
                      />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Internationalization */}
          <Link
            href="/id/"
            className="font-bold hover:underline text-base lg:text-lg inline-flex gap-1 items-center h-fit"
          >
            <Image
              src="/assets/icons/language.svg"
              alt="indonesia"
              width={20}
              height={20}
            />
            Indonesia
          </Link>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="flex flex-col sm:flex-row gap-3 justify-between pt-5 border-t-[3px] border-black">
        <p className="text-sm lg:text-base">Copyright PT.XXXXX</p>
        <ul className="flex gap-4 font-bold text-base lg:text-lg">
          <li>Halal</li>
          <li>BPOM</li>
          <li>Animal Safe</li>
        </ul>
      </div>
    </footer>
  );
}
