"use client";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import ContactForm from "./ContactForm";

import { gsap } from "gsap/gsap-core";
import { useEffect, useRef } from "react";

const Contact = () => {
  const feelRef = useRef(null);
  // useEffect(() => {
  //   const feel = feelRef.current;

  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isInterescting) {
  //         gsap.fromTo(
  //           feel,
  //           { scale: 0.3, left: -100, opacity: 0 },
  //           { scale: 1, left: 0, opacity: 1, duration: 2.5, ease: "power2.inOut" }
  //         );

  //         //unsubscribe from further intersection
  //           observer.unobserve(feel)
  //       }
  //     })
  //   }

  //   const observer = new IntersectionObserver(handleIntersection,
  //     {
  //     threshold : 1
  //     })

  //   observer.observe(feel)
  //   return () => {
  //     observer.disconnect()
  //   }

  // }, [])

  useEffect(() => {
    const feel = feelRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start GSAP animation when the component is visible
          gsap.fromTo(
            feel,
            { scale: 0.3, left: -100, opacity: 0 },
            {
              scale: 1,
              left: 0,
              opacity: 1,
              duration: 2.2,
              ease: "power2.inOut",
            }
          );

          // Unsubscribe from further intersection observations for the current element
          observer.unobserve(feel);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1, // Adjust the threshold as needed
    });

    // Start observing the components
    observer.observe(feel);

    // Stop observing elements when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section className="FadeIn md:w-[70%] w-[90%] mx-auto py-5 my-3">
        <div>
          <div
            className="flex flex-col 
            md:bg-[url('/Image/contact.png')] 
           bg-no-repeat bg-contain bg-center
          
           lg:flex-row justify-between gap-y-10 w-full"
          >
            <div className="lg:mr-5 h-full">
              <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
              <p
                ref={feelRef}
                className="relative overflow-hidden text-6xl font-bold bg-gradient-to-r from-[--font-color] to-[--font-color-end] bg-clip-text text-transparent"
              >
                Feel free <br /> to contact
              </p>
              <div className="mt-10 flex flex-col gap-2">
                <span className="flex gap-2 items-center">
                  <MdOutlineLocalPhone
                    size={20}
                    className="text-[--font-color]"
                  />
                  <a
                    href="tel:+9779816189588"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    +9779816189588
                  </a>{" "}
                  /
                  <a
                    href="tel:+9779815138271"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    +9779815138271
                  </a>
                </span>
                <span className="flex gap-2 items-center">
                  <IoMailOutline size={20} className="text-[--font-color]" />
                  <a
                    href="mailto:saathisoft02@gmail.com"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    saathisoft02@gmail.com
                  </a>
                </span>
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
            </div>

            <div className="flex flex-col w-[20rem] rounded-3xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
