// pages/Home.js
'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/gsap-core";


const Hero = () => {

  const heroTHeading = useRef(null)
  const saathisoft = useRef(null)


  useEffect(() => {

    var timeline = gsap.timeline();

  timeline
    .fromTo(saathisoft.current, { scale: 0 }, { scale: 1, duration: 1 })
    .fromTo(
      heroTHeading.current,
      { opacity: 0, bottom: "-100px", scale: 2 },
      { opacity: 1, bottom: 0, scale: 1, duration: 1 }
    );

    timeline.delay(1)

  },[])
  return (
    <section
      className="heroSection md:min-h-[80svh] min-h-[50svh] md:w-[70%] w-[90%] mx-auto flex flex-col items-center p-4 md:p-8 lg:p-16 relative
    bg-[url('/Image/hero.png')] bg-contain bg-no-repeat bg-center
     
    "
    >
      <div className="">
        <div className=" flex flex-col gap-5 justify-center ">
          <h2 className="font-light relative  tracking-wide">
            Let&apos;s make your online presence shine!{" "}
          </h2>

          <div
            ref={saathisoft}
            className="content font-bold flex items-center justify-center md:text-[8rem] text-[7vmax]  h-full w-full"
          >
            <h2>SAATHisoft</h2>
            <h2>SAATHisoft</h2>
          </div>
        </div>
        <div
          ref={heroTHeading}
          className="heroHeading absolute bottom-[10%] bg-gray-800/80 py-2 px-[2.5em]"
        >
          <h1 className="text-[1.5em]  tracking-wide gradient">
            Shine Everywhere!!
          </h1>
        </div>

        <div className="box">
          <div className="boxContainerRight container "></div>

          <div className="boxContainerLeft container"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
