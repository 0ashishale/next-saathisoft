"use client";
import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import NavTab from "./ui/NavTab";

const navTabs = [
  { name: "Home", path: "/" },
  { name: "Our Services", path: "/services" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const path = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isBg, setIsBg] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsBg(true);
      } else {
        setIsBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
   
      py-1
      ${
        isBg
          ? "bg-[--background-start-color] transition-all duration-500"
          : "transition-color duration-500  "
      }`}
    >
      <div className="md:w-[--width-lg] w-[--width-sm] mx-auto ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              width={200}
              height={100}
              src="/Image/logo.png"
              alt="Saathisoft Logo"
              className="h-auto w-auto max-h-[56px]"
            />
          </Link>

          <div className="md:hidden relative z-30">
            <button
              type="button"
              className="text-[--font-color70] hover:text-[--font-color] focus:outline-none "
              onClick={toggleMenu}
            >
              <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18H4V16H6V18ZM4 13H6V11H4V13ZM6 8H4V6H6V8ZM10 18H8V16H10V18ZM8 13H10V11H8V13ZM10 8H8V6H10V8ZM14 18H12V16H14V18ZM12 13H14V11H12V13ZM14 8H12V6H14V8ZM20 18H16V16H20V18ZM16 13H20V11H16V13ZM20 8H16V6H20V8Z"
                  ></path>
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM20 18H4V16H20V18Z"
                  ></path>
                )}
              </svg>
            </button>
          </div>
          <div className={`hidden md:block ${isOpen ? "block" : "hidden"}`}>
            <div className="relative flex flex-row items-baseline space-x-4 text-sm tracking-wide text-[--font-color]">
             
              {navTabs.map((tab) => (
                <NavTab name={tab.name} path={tab.path} key={tab.path} />
              ))}
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? "block anime" : "hidden"}`}>
          <div
            className=" flex flex-col items-end gap-5 pr-2 text-[--font-color] pb-4"
            onClick={() => setIsOpen(false)}
          >
            <Link
              href="/"
              className={` hover:text-[--font-color] ${
                path === "/" ? "underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={` hover:text-[--font-color] ${
                path === "services" ? "underline" : ""
              }`}
            >
              Our Services
            </Link>
            <Link
              href="/about"
              className={` hover:text-[--font-color] ${
                path === "about" ? "underline" : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`bg-[--ancient-gold] hover:shadow-md dark:hover:shadow-white/40 hover:shadow-black/30 py-1 px-3 text-black 
                  hover rounded   hover:py-1
                  ${path === "/contact" ? "underline" : ""}`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
