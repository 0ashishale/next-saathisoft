'use client';
import { CiLocationOn } from 'react-icons/ci';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import { TfiEmail } from 'react-icons/tfi';
import { MdOutlinePhone } from 'react-icons/md';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { TwitterX } from './icons';
import { GrLinkTop } from "react-icons/gr";


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
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <section>
        <div className="FadeIn md:w-[--width-lg] w-[--width-sm] mx-auto p-[--p-container]  h-fit flex md:flex-row flex-col gap-10">
          <div className="flex flex-col">
            <h1 className="smallHeading">Quick Links</h1>
            <div className="flex flex-col gap-1 mt-3 ml-1 text-[--font-color]">
              <Link href="/">
                <span className=" hover:text-[--ancient-gold] duration-300 ">
                  &#10919;&nbsp; Home
                </span>
              </Link>
              <Link href="/services">
                <span className=" hover:text-[--ancient-gold] duration-300">
                  &#10919;&nbsp; Our Services
                </span>
              </Link>
              <Link href="/contact">
                <span className=" hover:text-[--ancient-gold] duration-300">
                  &#10919;&nbsp; Contact Us
                </span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col flex-1 items-center  gap-5">
            <Link href="/">
              <Image
                width={250}
                height={200}
                src="/Image/logo.png"
                alt="SAATHisoft"
                className="h-auto w-auto hover:opacity-80 duration-200 move overflow-hidden"
              />
            </Link>
            <div>
              <div className="flex gap-5 text-[--font-color] ">
                <a
                  href="https://www.facebook.com/profile.php?id=100084999577902"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="contactIcon"
                >
                  <FaFacebookF size={20} />
                </a>

                <a
                  href="https://www.instagram.com/saathisoft02/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="contactIcon"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="contactIcon"
                >
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="contactIcon"
                >
                  <TwitterX size={20} />
                </a>
              </div>
            </div>
          </div>

          <p className="md:self-end text-sm text-[--font-color70]">
            &copy; <a href="/">SAATHisoft</a> {year}. All rights reserved.
          </p>
        </div>

        <div
          onClick={handleClick}
          className={`${
            scrollHeight > 600 ? "visibble" : "invisible"
          } fixed bottom-5 right-5  bg-gray-700 bg-opacity-50 transition-colors cursor-pointer  h-10 w-10 rounded-full flex justify-center items-center border border-[--ancient-gold] text-[--font-color] hover:text-[--ancient-gold]`}
        >
          <span ><GrLinkTop /></span>
        </div>
      </section>
    </>
  );
};

export default Footer;
