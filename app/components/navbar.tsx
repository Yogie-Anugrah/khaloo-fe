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
      className="bg-[#D2D1D1] text-black sticky top-0 font-poppins z-50 flex w-full flex-row items-center justify-between px-5
      py-3 lg:py-5 overflow-hidden"
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
          width={80}
          height={80}
          className="w-16 lg:w-full h-8"
          src={"/next.svg"}
          priority
          sizes={"(max-width: 640px) 70px, 100px"}
        />
      </Link>

      {/* Display URL Navigation */}
      <div
        data-cy="navbar-expanded"
        className={`fixed bg-[#D2D1D1] right-0 top-0 z-10 flex gap-6 duration-300 ease-in-out
        p-5 text-base flex-col max-lg:w-[60%] h-full 
        lg:text-lg lg:flex-1 lg:flex-row lg:static lg:h-auto lg:w-auto lg:translate-x-0 lg:items-center lg:justify-between lg:gap-12 lg:border-none lg:bg-transparent lg:p-0 ${
          navBarExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col lg:flex-row flex-1 max-lg:gap-5 ">
          {/* Close Menu Mobile Button */}
          <button
            className="ml-auto lg:hidden"
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
                "duration-300 transition-all",
                navBarExpanded ? "rotate-180" : "rotate-0"
              )}
            />
          </button>

          {/* Map data navigation */}
          <ul className="font-medium flex flex-col lg:flex-row flex-1 items-center lg:justify-center gap-5 lg:gap-12 xl:gap-28">
            {navData.map((item) => {
              return (
                <li
                  key={item.name}
                  className={clsx(
                    "duration-300 transition-all hover:underline hover:underline-offset-8 ",
                    pathname == item.path ? "font-semibold" : "font-medium"
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

      <div className="flex gap-3">
        {/* Search and Person */}
        <div className="flex gap-3 lg:gap-6">
          <Image
            height={32}
            width={32}
            src="/assets/icons/search.svg"
            alt="Search Icon"
          />
          <Image
            height={32}
            width={32}
            src="/assets/icons/person.svg"
            alt="Person Icon"
          />
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
