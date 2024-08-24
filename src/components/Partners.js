'use client'

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const Partners = () => {
  const missionRef = useRef(null)
  const visionRef = useRef(null)


  useEffect(() => {

    const vision = visionRef.current;
    const mission = missionRef.current;
  
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start GSAP animation when the component is visible
          gsap.fromTo(
            vision,
            {
              // opacity: 0,
              bottom: -50,
            },
            {
              opacity: 1,
              bottom: 0,
              duration: 2.4,
              ease: "power3.out",
            }
          );
  
         gsap.fromTo(
            mission,
            {
              opacity: 0,
              right: -100,
            },
            {
              opacity: 1,
              right: 0,
              duration: 2.5,
              ease: "power3.out",
            }
          );
  
  
          // gsap.fromTo(heading, { rotate: 8 }, { rotate: 0 });
  
          // Unsubscribe from further intersection observations for the current element
          observer.unobserve(vision);
          observer.unobserve(mission);
          // observer.unobserve(heading);
        }
      });
    };
  
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 1, // Adjust the threshold as needed
    });
  
    // Start observing the components
    observer.observe(vision);
    observer.observe(mission);
  
  
    // Stop observing elements when the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <section className='md:w-[90%] w-[90%] mx-auto p-6 flex flex-col gap-8'>
        <div className='FadeIn flex items-center flex-col md:flex-row'>
          <div className='py-5 h-28 w-full '>
            <h5 className='gradient  tracking-wider font-semibold mb-3'>
              LET&apos;S CONNECT
            </h5>
            <div>
              <h1 className='md:text-5xl text-3xl  font-bold  text-[--font-color] tracking-wide '>
                <span className=''>
                  LET YOUR{' '}
                  <span
                    ref={visionRef}
                    className='stroke relative overflow-hidden'
                  >
                    VISION
                  </span>
                </span>{' '}
                BE OUR{' '}
                <span
                  ref={missionRef}
                  className='stroke relative overflow-hidden'
                >
                  MISSION.
                </span>{' '}
              </h1>
            </div>
          </div>
        </div>


        <div className=''>
          <h5 className='gradient text-sm tracking-wider font-semibold'>
            OUR DIGITAL PARTNERS
          </h5>
          {/* <h1 className='text-3xl font-semibold tracking-widest text-center'>
            Explore our accomplished projects
          </h1> */}
          <div className='flex flex-wrap gap-10 items-center mt-3'>
            <Card
              name={`Aiwa Education`}
              url={`www.aiwa.edu.np/`}
              logo={'/Image/aiwa.png'}
            />
            <Card
              name={`Neat Dental Care`}
              url={`www.neatdentalcare.com.np/`}
              logo={'/Image/neatdental.png'}
            />
            <Card
              name={`Sunaulo Baglung`}
              url={``}
              logo={'/Image/sunaulo.png'}
            />
          </div>
        </div>
      </section>
    </>
  );
};

const Card = ({ logo, url, name }) => {
  return (
    <>
      <div className='flip-card  h-[12.5rem] w-[12.5rem] cursor-pointer'>
        <div className='flip-card-inner'>
          <div className='flip-card-front border border-[--ancient-gold60] rounded'>
            <Image width={300} height={300} src={logo} alt='Neat Dental Care' />
          </div>
          <div className='flip-card-back border border-[--ancient-gold60] rounded'>
            <a
              href={`https://${url}`}
              rel='noreferrer noopener'
              target='_blank'
              className='text-[14px] underline text-[--font-color] hover:text-[--font-color-end] transition-colors duration-200'
              alt={name}
            >
              {url}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
