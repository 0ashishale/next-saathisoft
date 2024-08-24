'use client';

import ContactForm from './ContactForm';

import { gsap } from 'gsap/gsap-core';
import { useEffect, useRef } from 'react';
import { Facebook, Instagram, LinkedIn, Location, Mail, Phone, TwitterX } from './icons';

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
              ease: 'power2.inOut',
            },
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
      <section className='FadeIn md:w-[90%] w-[90%] flex md:flex-row flex-col gap-10 mx-auto p-6 justify-between'>
        <div className='lg:mr-5 h-full'>
          <h1 className='smallHeading'>Contact Us</h1>
          <p
            ref={feelRef}
            className=' mt-2 relative overflow-hidden text-6xl font-bold bg-gradient-to-r from-[--font-color] to-[--font-color-end] bg-clip-text text-transparent'
          >
            Feel free <br /> to contact
          </p>
          <div className='mt-8'>
            <div className='flex flex-col gap-2 text-[--font-color]'>
            <span className='flex gap-2 items-center'>
                <Location size={20} color='white' />
                    <p>Pokhara, Nepal</p>
              </span>
              <span className='flex gap-2 items-center'>
                <Phone size={20} color='white' />
                <a
                  href='tel:+9779816189588'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  +9779816189588
                </a>{' '}
                /
                <a
                  href='tel:+9779815138271'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  +9779815138271
                </a>
              </span>
              <span className='flex gap-2 items-center'>
                <Mail size={20} color='white' />
                <a
                  href='mailto:saathisoft02@gmail.com'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  saathisoft02@gmail.com
                </a>
              </span>
            </div>

            <div className=' mt-6 flex gap-5 text-[--font-color] '>
              <a
                href='https://www.facebook.com/profile.php?id=100084999577902'
                rel='noreferrer noopener'
                target='_blank'
                className='contactIcon'
              >
                <Facebook size={20} />
              </a>

              <a
                href='https://www.instagram.com/saathisoft02/'
                rel='noreferrer noopener'
                target='_blank'
                className='contactIcon'
              >
                <Instagram size={20} color='white' />
              </a>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='contactIcon'
              >
                <LinkedIn size={20} color='white' />
              </a>
              <a
                href='#'
                rel='noreferrer'
                target='_blank'
                className='contactIcon'
              >
                <TwitterX size={20} color='white' />
              </a>
            </div>
          </div>
        </div>

        <div className='md:w-[50%]'>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
