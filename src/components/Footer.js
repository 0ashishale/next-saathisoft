"use client";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhone } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  const [scrollHeight, setScrollHeight] = useState(0);
  const handleClick = () => {
    window.scroll(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollHeight(window.scrollY);
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section>
        <div className="FadeIn md:w-[70%] w-[90%] mx-auto py-5  h-fit">
          <div className="flex flex-wrap justify-between gap-y-10">

          <div>
            <h1 className="text-2xl tracking-wide mb-3">Contact us</h1>
            <div className="mt-5 flex flex-col gap-5 ml-1">
              <div className="flex gap-5 ">
                <CiLocationOn size={30} className="text-[--font-color]" />
                <div>
                  <h1 className="font-semibold tracking-wide mb-2">
                    Official address
                  </h1>
                  <div className="flex flex-col gap-1">
                    <span>Pokhara 33700</span>
                    <span>Nepal</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 ">
                <TfiEmail size={30} className="text-[--font-color]" />
                <div>
                  <h1 className="font-semibold tracking-wide mb-2">
                    Email address
                  </h1>
                  <div className="flex flex-col gap-1">
                    <span className="tracking-wide hover:text-[--font-color] duration-300 hover:translate-x-1">
                      <a
                        href="mailto:saathisoft02@gmail.com"
                        rel="noreferrer"
                        target="_blank"
                      >
                        saathisoft02@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-5 ">
                <MdOutlinePhone size={30} className="text-[--font-color]" />
                <div>
                  <h1 className="font-semibold tracking-wide mb-2">Call us</h1>
                  <div className="flex flex-col gap-1 ">
                    <a
                      href="tel:+9779816189588"
                      rel="noreferrer"
                      target="_blank"
                      className="hover:text-[--font-color] duration-300 hover:translate-x-1"
                    >
                      +9779816189588
                    </a>
                    <a
                      href="tel:+9779815138271"
                      rel="noreferrer"
                      target="_blank"
                      className="hover:text-[--font-color] duration-300 hover:translate-x-1"
                    >
                      +9779815138271
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between  gap-5">
            <div>
              <h1 className="text-2xl tracking-wide mb-3 text-white md:text-center">
                Get in touch.
              </h1>
              <div className="flex gap-5 text-[--font-color] ">
                <a
                  href="https://www.facebook.com/profile.php?id=100084999577902"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="h-[4rem] w-[4rem] rounded-full flex items-center justify-center bg-gray-900/60 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <FaFacebookF size={20} />
                </a>

                <a
                  href="https://www.instagram.com/saathisoft02/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="h-[4rem] w-[4rem] rounded-full flex items-center justify-center bg-gray-900/60 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="h-[4rem] w-[4rem] rounded-full flex items-center justify-center bg-gray-900/60 hover:bg-gray-800/70 transition-all duration-300"
                >
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
            <Link href="/">
                <Image
                  width={250}
                  height={200}
                src="/Image/logo.png"
                alt="SAATHisoft"
                className="h-auto w-auto hover:opacity-80 duration-200 move overflow-hidden"
              />
            </Link>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <h1 className="text-2xl tracking-wide mb-3">Our services</h1>
              <div className="flex flex-col gap-2 ml-2">
                <Link href="/services">
                  <span className=" hover:text-[--font-color-end] duration-300 ">
                    &#10919;&nbsp; Graphics Dersign
                  </span>
                </Link>
                <Link href="/services">
                  <span className=" hover:text-[--font-color-end] duration-300">
                    &#10919;&nbsp; Video Creation
                  </span>
                </Link>
                <Link href="/services">
                  <span className=" hover:text-[--font-color-end] duration-300">
                    &#10919;&nbsp; Web Development
                  </span>
                </Link>
                <Link href="/services">
                  <span className="hover:text-[--font-color-end] duration-300">
                    &#10919;&nbsp; App Development
                  </span>
                </Link>
                <Link href="/services">
                  <span className="hover:text-[--font-color-end] duration-300">
                    &#10919;&nbsp; Branding
                  </span>
                </Link>

                <Link href="/services">
                  <span className=" hover:text-[--font-color-end] duration-300">
                    &#10919;&nbsp; Content Writing
                  </span>
                </Link>
                <Link href="/services">
                  <span className=" hover:text-[--font-color-end] duration-300">
                    &#10919;&nbsp; Social Media Marketing
                  </span>
                </Link>
                <Link href="/services">
                  <span className=" hover:text-[--font-color-end] duration-300 ">
                    &#10919;&nbsp; Search Engine Optimization (SEO)
                  </span>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <div
        onClick={handleClick}
        className={`${
          scrollHeight > 600 ? "visibble" : "invisible"
          } fixed bottom-5 right-5  bg-gray-700 bg-opacity-50 hover:bg-[--font-color] transition-colors cursor-pointer  h-10 w-10 rounded-full flex justify-center items-center border border-blue-700`}
      >
        <span className="text-2xl relative top-1">&#10514;</span>
      </div>

      <section className=" w-full bg-black text-white p-1 font-light text-center tracking-wide text-sm">
        <p>
          &copy; <a href="/">SAATHisoft</a> {year}. All rights reserved.
        </p>
      </section>
    </>
  );
};

export default Footer;
