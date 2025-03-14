import React from "react";
import ddsLogoMini from "/public/dds-logo-mini.svg";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const navList = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "How it Works",
      link: "#howItWorks",
    },
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header className="w-full max-w-[1440px] mx-auto  h-[54px] sm:h-[64px] md:h-[80px] p-2 px-4 sm:px-8 md:px-8 flex items-center justify-between">
      <span className="logoContainer flex mr-2">
        <Image
          src={ddsLogoMini}
          className="size-[48px] sm:size-[64px] md:size-[80px] hover:scale-105 transition-all ease-out duration-300 cursor-pointer"
          alt="dds logo"
        />
      </span>
      <nav className="hidden min-[900px]:flex">
        <ul className="flex items-center gap-6">
          {navList.map((navItem, index) => (
            <li
              key={index}
              className="flex px-2 items-center text-primary hover:underline hover:underline-offset-6 transition-all ease-out duration-300"
            >
              <Link href={`${navItem.link}`}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
