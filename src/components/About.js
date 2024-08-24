'use client';
import { GiArmorUpgrade } from 'react-icons/gi';
import { PiStrategyBold } from 'react-icons/pi';
import { FaDownLeftAndUpRightToCenter } from 'react-icons/fa6';
import { VscWorkspaceTrusted } from 'react-icons/vsc';
import Image from 'next/image';

import { gsap } from 'gsap/gsap-core';
import { useEffect, useRef } from 'react';
// import { SplitText } from "gsap/SplitText";
// import { SplitText } from "gsap/SplitText";

const About = () => {
  const imageRef = useRef(null);
  const h1Ref = useRef(null);
  const headRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    //    const image1 = document.querySelector(".aboutImage");

    //    gsap.fromTo(
    //      image1,
    //      {
    //        opacity: 0,
    //        scale: 0,
    //      },
    //      {
    //        opacity: 1,
    //        scale: 1,
    //        duration: 1,
    //        ease: "power3.out",
    //      }
    // );

    const image = imageRef.current;
    const head = h1Ref.current;
    const heading = headRef.current;
    heading.style.overflow = 'hidden';
    const paragraph = pRef.current;

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start GSAP animation when the component is visible
          gsap.fromTo(
            image,
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              ease: 'power3.out',
            },
          );

          gsap.fromTo(
            head,
            {
              x: 100,
            },
            {
              x: 0,
              duration: 2,
              ease: 'power3.out',
            },
          );
          gsap.fromTo(
            paragraph,
            {
              opacity: 0,
              y: 100,
            },
            {
              opacity: 1,
              y: 0,
              duration: 2,
              ease: 'power3.out',
            },
          );

         

          // Unsubscribe from further intersection observations for the current element
          observer.unobserve(image);
          observer.unobserve(head);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1, // Adjust the threshold as needed
    });

    // Start observing the components
    observer.observe(image);
    observer.observe(head);
    observer.observe(heading);

    // Stop observing elements when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <section className='FadeIn md:w-[90%] w-[90%] mx-auto p-6 bg-slate-500m'>
        <div className=' grid md:grid-cols-2 gap-5'>
          <div className='flex flex-col gap-5'>
            <h1 ref={h1Ref} className='smallHeading'>
              About us
            </h1>

            <div className='flex flex-col '>
              <h3 ref={headRef} className='heading gradient'>
                SAATHisoft - Where Digital Dreams Take Flight!
              </h3>
              <p ref={pRef} className='paragraph'>
                We are passionate about transforming digital aspirations into
                reality with a commitment to innovation, creativity, and
                cutting-edge technology.
                <br />
                <br />
                Our team of skilled professionals is dedicated to crafting
                unique solutions tailored to meet the ever-evolving demands of
                the digital landscape. From web development and design to
                digital marketing strategies, we seamlessly blend expertise with
                a keen understanding of your brand to deliver exceptional
                results.
              </p>
            </div>
          </div>

          <div className='h-fit w-full flex justify-center mnd:justify-end'>
            <Image
              ref={imageRef}
              height={350}
              width={350}
              src='/Image/about.png'
              alt='About us'
              className='aboutImage h-auto w-auto'
            />
          </div>
        </div>

        <div className='mt-10 text-[--font-color90]'>
          <h1 className='text-[--font-color70]'>Why choose us?</h1>
          <h1 className='text-xl mt-2'>
            We are the bricks to build your dreams.
          </h1>
          <div className='mt-8 flex flex-wrap justify-center gap-10'>
            <div className='aboutCard'>
              <GiArmorUpgrade size={40} className='text-[--ancient-gold1000]' />
              <h1 className='heading '>
                Innovative Solutions
              </h1>
            </div>
            <div className='aboutCard'>
              <PiStrategyBold size={40} className='text-[--ancient-gold1000]' />
              <h1 className='heading '>
                Strategic Digital Marketing
              </h1>
            </div>
            <div className='aboutCard'>
              <FaDownLeftAndUpRightToCenter
                size={40}
                className='text-[--ancient-gold1000]'
              />
              <h1 className='heading'>
                Customer-Centric Approach
              </h1>
            </div>
            <div className='aboutCard'>
              <VscWorkspaceTrusted size={40} className='text-[--ancient-gold1000]' />
              <h1 className='heading '>
                Reliability and Trust
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
