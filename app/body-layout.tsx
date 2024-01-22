"use client";
import Navbar from "@/app/components/navbar";
import { useState } from "react";

export default function BodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  return (
    <body
      className={`flex min-h-screen flex-col ${
        navBarExpanded && "overflow-hidden"
      }`}
    >
      <Navbar
        navBarExpanded={navBarExpanded}
        setNavbarExpanded={setNavBarExpanded}
      />
      {children}
    </body>
  );
}
