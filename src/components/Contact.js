'use client';

import ContactForm from './ContactForm';

import { gsap } from 'gsap/gsap-core';
import { useEffect, useRef } from 'react';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Location,
  Mail,
  Phone,
  TwitterX,
} from './icons';
import useIntersectionObserver from '@/hook/useIntersectionObserver';

const Contact = () => {
  const feelRef = useRef(null);

  const [ref, isIntersecting] = useIntersectionObserver(() => {
    // GSAP timeline for multiple animations
    const tl = gsap.timeline();

    // Pulse effect on "Feel" word
    tl.to('.feel-word', {
      scale: 1.2,
      duration: 0.5,
      repeat: 2,
      yoyo: true,
      ease: 'power1.inOut',
    })
    .to('.feel-word', {
      scale: 1,
      duration: 0.3,
      ease: 'power1.out',
    })
    .fromTo('.free-word', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.2, ease: 'power3.out' }
    )
    .fromTo('.to-word', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.2, ease: 'power3.out' },
      "+=0.3" // delay before "to" appears
    )
    .fromTo('.contact-word', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.2, ease: 'power3.out' },
      "+=0.3" // delay before "contact" appears
    );
  }, { threshold: 0.5 });

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

  // useEffect(() => {
  //   const feel = feelRef.current;

  //   const feelWord = document.querySelector('.feel-word');
  //   const freeWord = document.querySelector('.free-word');
  //   const toWord = document.querySelector('.to-word');
  //   const contactWord = document.querySelector('.contact-word');

  //   const handleIntersection = (entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         // GSAP timeline for pulse effect and sequential word appearance
  //         const tl = gsap.timeline();

  //         // Pulse effect on "Feel" word
  //         tl.to(feelWord, {
  //           scale: 1.2,
  //           duration: 0.5,
  //           repeat: 2,
  //           yoyo: true,
  //           ease: 'power1.inOut',
  //         })
  //         .to(feelWord, {
  //           scale: 1,
  //           duration: 0.3,
  //           ease: 'power1.out',
  //         });

  //         // Delayed appearance of "free to contact"
  //         tl.fromTo(
  //           freeWord,
  //           { opacity: 0, y: 20 },
  //           { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
  //         )
  //         .fromTo(
  //           toWord,
  //           { opacity: 0, y: 20 },
  //           { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
  //           "+=0.1", // delay before "to" appears
  //         )
  //         .fromTo(
  //           contactWord,
  //           { opacity: 0, y: 20 },
  //           { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
  //           "+=0.1", // delay before "contact" appears
  //         );

  //         // Unsubscribe from further intersection observations
  //         observer.unobserve(head);
  //         observer.unobserve(heading);
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(handleIntersection, {
  //     threshold: 0.5, // Adjust the threshold as needed
  //   });

  //   // Start observing the components

  //   // Stop observing elements when the component is unmounted
  //   return () => {
  //     observer.observe(feel);
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <>
      <section className="FadeIn md:w-[--width-lg] w-[--width-sm] mx-auto p-[--p-container] flex md:flex-row flex-col gap-10 justify-between">
        <div className="lg:mr-5 h-full">
          <h1 className="smallHeading">Contact Us</h1>
          <p
            // ref={ref}
            className="feel mt-3 relative overflow-hidden text-6xl font-bold bg-gradient-to-r from-[--font-color] to-[--font-color-end] bg-clip-text text-transparent"
          >
            <span className="feel-word">Feel</span>
            <span className="free-word"> free</span> <br />
            <span className="to-word">to</span>
            <span className="contact-word"> contact.</span>
          </p>

          <div className="mt-8">
            <div className="flex flex-col gap-2 text-[--font-color]">
              <span className="flex gap-2 items-center">
                <Location size={20} color="white" />
                <p>Pokhara, Nepal</p>
              </span>
              <span className="flex gap-2 items-center">
                <Phone size={20} color="white" />
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
                <Mail size={20} color="white" />
                <a
                  href="mailto:saathisoft02@gmail.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  saathisoft02@gmail.com
                </a>
              </span>
            </div>

            {/* <div className=" mt-6 flex gap-5 text-[--font-color] ">
              <a
                href="https://www.facebook.com/profile.php?id=100084999577902"
                rel="noreferrer noopener"
                target="_blank"
                className="contactIcon"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://www.instagram.com/saathisoft02/"
                rel="noreferrer noopener"
                target="_blank"
                className="contactIcon"
              >
                <Instagram size={20} color="white" />
              </a>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="contactIcon"
              >
                <LinkedIn size={20} color="white" />
              </a>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="contactIcon"
              >
                <TwitterX size={20} color="white" />
              </a>
            </div> */}
          </div>
        </div>

        <div className="md:w-[50%]">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
