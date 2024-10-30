"use client";
import { GiArmorUpgrade } from "react-icons/gi";
import { PiStrategyBold } from "react-icons/pi";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Image from "next/image";

import { gsap } from "gsap/gsap-core";
import { useEffect, useRef } from "react";
// import { SplitText } from "gsap/SplitText";
// import { SplitText } from "gsap/SplitText";

const About = () => {
  const imageRef = useRef(null);
  const h1Ref = useRef(null);
  const headRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const head = h1Ref.current;
    const heading = headRef.current;
    const paragraph = pRef.current;

    heading.style.overflow = "hidden";

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start GSAP animations
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
              ease: "power3.out",
            }
          );

          gsap.fromTo(
            head,
            {
              x: 50,
            },
            {
              x: 0,
              duration: 1,
            }
          );

          gsap.fromTo(
            paragraph,
            {
              opacity: 0,
              y: 50,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1,
            }
          );

          // Unsubscribe from further intersection observations for the current element
          observer.unobserve(image);
          observer.unobserve(head);
          observer.unobserve(heading);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold as needed
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
      <section className="FadeIn md:w-[--width-lg] w-[--width-sm] mx-auto p-[--p-container] bg-slate-500m">
        <div className=" grid md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-2">
            <h1 ref={h1Ref} className="smallHeading">
              About us
            </h1>
            <h3 ref={headRef} className="heading gradient ">
              SAATHisoft - Where Digital Dreams Take Flight!
            </h3>
            <p ref={pRef} className="paragraph">
              We love turning your digital dreams into reality with creativity
              and the latest technology.
              <br />
              We combine our skills with a deep understanding of your brand to
              deliver outstanding results. <br />
              Our talented team is committed to creating unique solutions that
              adapt to the ever-changing digital world. Whether it's web/mobile
              development, design, digital marketing or branding with SEO
              optimization.
            </p>
          </div>

          <div className="h-fit w-full flex justify-center mnd:justify-end">
            <Image
              ref={imageRef}
              height={350}
              width={350}
              src="/Image/about.png"
              alt="About us"
              className="aboutImage h-auto w-auto"
            />
          </div>
        </div>

        <div className="mt-10  flex flex-col gap-2">
          <div className="flex flex-col">
            <h1 className="text-[--font-color70]">Why choose us?</h1>
            <p className="text-lg text-[--font-color80] font-semibold pl-2">
              We are the bricks to build your dreams.
            </p>
          </div>
          <div className="flex flex-wrap p-4 md:gap-6 gap-8">
            <div className="aboutCard">
              <span className="icon">
                <GiArmorUpgrade size={40} />
              </span>
              <h1 className="heading ">Innovative Solutions</h1>
            </div>
            <div className="aboutCard">
              <span className="icon">
                <PiStrategyBold size={40} />
              </span>
              <h1 className="heading ">Strategic Digital Marketing</h1>
            </div>
            <div className="aboutCard">
              <span className="icon">
                <FaDownLeftAndUpRightToCenter size={40} />
              </span>
              <h1 className="heading">Customer-Centric Approach</h1>
            </div>
            <div className="aboutCard">
              <span className="icon">
                <VscWorkspaceTrusted size={40} />
              </span>
              <h1 className="">Reliability and Trust</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
