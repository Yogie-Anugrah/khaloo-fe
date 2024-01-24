"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Dispatch, type SetStateAction, useEffect, useRef } from "react";

const navData = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "PRODUCT",
    path: "/product",
  },
  {
    name: "EDU-SKIN",
    path: "/edu-skin",
  },
  {
    name: "PARTNER WITH US",
    path: "/partner-with-us",
  },
];

export default function Navbar({
  navBarExpanded,
  setNavbarExpanded,
}: {
  navBarExpanded: boolean;
  setNavbarExpanded: Dispatch<SetStateAction<boolean>>;
}) {
  // Managing state open for the navbar

  // Side Bar background ref
  const sideBarBgRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close Navbar when user clicks on black background stuffs
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If Userclick is in the black background stuff
      if (
        sideBarBgRef.current &&
        sideBarBgRef.current.contains(event.target as Node)
      ) {
        setNavbarExpanded(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setNavbarExpanded]);

  return (
    <nav
      aria-label="Navbar"
      className="font-poppins sticky top-0 z-50 flex w-full flex-row items-center justify-between gap-4 overflow-hidden bg-white
      px-4 py-4 text-black md:px-10 lg:py-5 xl:px-20"
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold"
        aria-label="Home"
        data-cy="navbar-logo"
      >
        <Image
          alt="Logo Icon"
          width={180}
          height={40}
          className="h-8 w-28 object-contain object-center lg:h-10 lg:w-40"
          src={"/assets/images/logo.png"}
          priority
          sizes={"(max-width: 640px) 70px, 100px"}
        />
      </Link>

      {/* Display URL Navigation */}
      <div
        data-cy="navbar-expanded"
        className={`fixed right-0 top-0 z-10 flex h-full transform flex-col gap-6
        border-l-2 border-gray-3 bg-white p-5 text-base transition-all duration-300 ease-in-out max-lg:w-[60%]
        lg:static lg:h-auto lg:w-auto lg:flex-1 lg:translate-x-0 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:border-none lg:bg-transparent lg:p-0 lg:text-lg ${
          navBarExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-1 flex-col max-lg:gap-5 lg:flex-row ">
          {/* Close Menu Mobile Button */}
          <button
            className="ml-auto mr-4 lg:hidden"
            onClick={() => setNavbarExpanded(false)}
            aria-label="Close Menu"
            data-cy="navbar-close"
          >
            <Image
              height={20}
              width={20}
              alt="close-button"
              src="/assets/icons/x.svg"
              className={clsx(
                "transition-all duration-300",
                navBarExpanded ? "rotate-180" : "rotate-0"
              )}
              sizes="20px"
            />
          </button>

          {/* Map data navigation */}
          <ul className="flex flex-1 flex-col items-center gap-5 font-medium lg:flex-row lg:justify-center lg:gap-12 xl:gap-28">
            {navData.map((item) => {
              return (
                <li
                  key={item.name}
                  className={clsx(
                    "transition-all duration-300 hover:underline hover:underline-offset-8 ",
                    pathname == item.path
                      ? "font-bold text-primary-2"
                      : "font-medium"
                  )}
                >
                  <Link
                    data-cy={`navbar-link-${item.name
                      .toLowerCase()
                      .split(" ")
                      .join("-")}`}
                    href={item.path}
                    aria-label={item.path
                      .split("/")
                      .map((item) => item)
                      .join(" ")}
                    data-navlink
                    onClick={() => setNavbarExpanded(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-shrink-0 items-center justify-center gap-3 font-medium">
        {/* Search and Person */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-6">
          <Image
            height={32}
            width={32}
            src="/assets/icons/search.svg"
            alt="Search Icon"
            className="aspect-square w-7 sm:w-8"
            sizes="(max-width: 640px) 28px, 32px"
          />
          <Image
            height={32}
            width={32}
            src="/assets/icons/person.svg"
            alt="Person Icon"
            className="aspect-square w-7 sm:w-8"
            sizes="(max-width: 640px) 28px, 32px"
          />
          <button className="flex items-center gap-2">
            <Image
              height={24}
              width={24}
              src="/assets/icons/language.svg"
              alt="Language Icon"
              className="aspect-square w-6 sm:w-7"
              sizes="(max-width: 640px) 24px, 32px"
            />
            <p className="hidden hover:underline hover:underline-offset-4 lg:flex">
              INA
            </p>
          </button>
        </div>

        {/* Hamburger Menu button Mobile */}
        <button
          data-cy="navbar-toggle"
          aria-label="Menu"
          className="lg:hidden"
          onClick={() => setNavbarExpanded(true)}
        >
          <Image
            height={28}
            width={28}
            src="/assets/icons/menu.svg"
            alt="Menu Icon"
            sizes="28px"
          />
        </button>
      </div>

      {/* Side bar opaque background */}
      {navBarExpanded && (
        <div
          ref={sideBarBgRef}
          data-cy="navbar-side-bar-bg"
          className="fixed inset-0 z-0 h-full w-full bg-opacity-80 backdrop-blur-sm lg:hidden"
        />
      )}
    </nav>
  );
}
