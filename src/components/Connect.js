'use client'

import { useEffect, useRef } from "react";
import {gsap} from 'gsap'


const Connect = () => {

  const missionRef = useRef(null)
  const visionRef = useRef(null)

  // useEffect(() => {
  //   const vision = visionRef.current;
  //   const mission = missionRef.current;


  //   const handleIntersection = (enteries) => {
  //     enteries.forEach((entry) => {
  //       if (entry.isInteresecting) {
  //         //start gsap animation
  //         gsap.fromTo(
  //           vision,
  //           { y: 100 },
  //           {
  //             y: 0,
  //             duration: 1,
  //             ease: "power3.out",
  //           }
  //         );

  //         // Unsubscribe from further intersection observations for the current element
  //         observer.unobserve(vision)
          
  //       }
  //     })
  //   }

  //   const observer = new IntersectionObserver(handleIntersection,
  //     { threshold: 1 })
    
  //   //start observing the components
  //   observer.observe(vision)


  //   //stop observing element while component unmounted

  //   return () => {
  //     observer.disconnect()
  //   }
  // },[])
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
      <section className="FadeIn w-[90%] md:w-[70%] mx-auto flex items-center flex-col md:flex-row my-10">
        <div className="py-5 h-28 w-full ">
          <h5 className="gradient text-sm tracking-widest font-semibold mb-3">
            LET&apos;S CONNECT
          </h5>
          <div>
            <h1 className="md:text-5xl text-3xl  font-bold tracking-wide ">
              <span className="">
                LET YOUR <span ref={visionRef} className="stroke relative overflow-hidden">VISION</span>
              </span>{" "}
              BE OUR <span ref={missionRef} className="stroke relative overflow-hidden">MISSION.</span>{" "}
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
