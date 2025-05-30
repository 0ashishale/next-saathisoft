// pages/Home.js
'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/gsap-core';
import { Facebook, Instagram, LinkedIn, Location, TwitterX } from './icons';

const Hero = () => {
  const heroTHeading = useRef(null);
  const saathisoft = useRef(null);

  useEffect(() => {
    var timeline = gsap.timeline();

    timeline
      // .fromTo(saathisoft.current, { scale: 0 }, { scale: 1, duration: 1 })
      .fromTo(
        heroTHeading.current,
        { opacity: 0, x: 50 },
        { opacity: 1,x: 0,   duration: 1 },
      );

    timeline.delay(0);
  }, []);
  return (
    <section
      className="
       md:min-h-[90svh] min-h-[90svh] w-[100%]  mx-auto
       bg-[url('/Image/home.png')] bg-contain bg-no-repeat bg-right-bottom 
      flex
    "
    >
      <div className=' w-full flex items-center bg-gradient-to-r from-[--ancient-green-shade-3] to-transparent'>
        <div
         
          className='md:w-[--width-lg] w-[--width-sm] py-[--p-container] mx-auto  '
        >
          <div
            // style={{ borderRadius: '28% 72% 84% 16% / 47% 80% 20% 53%' }}
            className='bg-[--primary-color-shade-3]3 bg-opacity-20  w-fit flex flex-col gap-5 shadow-inner shadow-[--primary-color-tint-3]3'
          >
            <div  ref={heroTHeading}>
              <h1 className='md:text-6xl text-4xl border-b-2 pb-3 border-b-[--ancient-gold] tracking-wide font-extrabold text-[var(--ancient-gold)]'>
                Shine <br /> Everywhere!!
              </h1>
              <p className='text-lg mt-8 font-medium text-white tracking-wide'>
                Let&apos;s make your digital presence shine together.{' '}
              </p>
             
            </div>
            <p className='text-white tracking-wide flex gap-1 items-center text-[--ancient-gold] text-base'>  <Location size={18} />Pokhara, Nepal</p>

            <div className='text-[--font-color] flex gap-10 mt-5'>
              <a href='' className='heroIcon'><LinkedIn  size={20}  /></a>
              <a href='' className='heroIcon'><Facebook size={20}  /></a>
              <a href='' className='heroIcon'><TwitterX size={20}/></a>
              <a href='' className='heroIcon'><Instagram size={20}  /></a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=''>
        <div className=' flex flex-col gap-5 justify-center '>
          <h2 className='font-light relative  tracking-wide'>
            Let&apos;s make your online presence shine!{' '}
          </h2>

          <div
            ref={saathisoft}
            className="content font-bold flex items-center justify-center md:text-[8rem] text-[7vmax]  h-full w-full"
          >
            <h2>SAATHisoft</h2>
            <h2>SAATHisoft</h2>
          </div>
        </div>

        <div className='box'>
          <div className='boxContainerRight container '></div>

          <div className='boxContainerLeft container'></div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
