'use client';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [scrollHeight, setScrollHeight] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
          setScrollHeight(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <nav
      className={`${
        scrollHeight > 200
          ? "bg-black transition-all duration-1000"
          : "transition-color duration-700"
      }`}
    >
      <div className="md:w-[80%] w-[90%] mx-auto">
        <div className="flex items-center justify-between">
        
            <Link href="/">
              <Image
                width={250}
                height={200}
                src="/Image/logo.png"
              alt="Saathisoft Logo"
              className='h-auto w-auto'
              />
            </Link>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
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
            <div className="flex flex-row items-baseline space-x-4 text-sm tracking-wide text-gray-200">
              <Link
                href="/"
                className="  hover:text-[--font-color] transition-all duration-200 hover:animate-pulse "
              >
                Home
              </Link>

              <Link
                href="/services"
                className="  hover:text-[--font-color] transition-all duration-200"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="  hover:text-[--font-color] transition-all duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className=" hover:text-[--font-color] transition-all duration-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
          <div
            className=" flex flex-col items-end gap-2 pr-2 text-gray-200 pb-4"
            onClick={() => setIsOpen(false)}
          >
            <Link href="/" className="  hover:text-[--font-color]">
              Home
            </Link>
            <Link
              href="/services"
              className="  hover:text-[--font-color]"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="  hover:text-[--font-color]  "
            >
              About
            </Link>
            <Link
              href="/contact"
              className="  hover:text-[--font-color] "
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;