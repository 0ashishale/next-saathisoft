'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { GiArmorUpgrade } from "react-icons/gi";
import { PiStrategyBold } from "react-icons/pi";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const About = () => {
  const imageContainerRef = useRef(null);
  const h1Ref = useRef(null);
  const headRef = useRef(null);
  const pRef = useRef(null);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const head = h1Ref.current;
    const heading = headRef.current;
    const paragraph = pRef.current;

    heading.style.overflow = "hidden";

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            imageContainer,
            { opacity: 0, y: 100 },
            { opacity: 1, y: 0, duration: 2, ease: "power3.out" }
          );

          gsap.fromTo(head, { x: 50 }, { x: 0, duration: 1 });

          gsap.fromTo(
            paragraph,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
          );

          observer.unobserve(imageContainer);
          observer.unobserve(head);
          observer.unobserve(heading);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(imageContainer);
    observer.observe(head);
    observer.observe(heading);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="FadeIn md:w-[--width-lg] w-[--width-sm] mx-auto py-[--p-container] bg-slate-500m">
      <div className="grid md:grid-cols-2 gap-10 mt-3">
        <div className="flex flex-col gap-2">
          <h1 ref={h1Ref} className="smallHeading">
            About us
          </h1>
          <h3 ref={headRef} className="heading gradient">
            SAATHisoft - Where Digital Dreams Take Flight!
          </h3>
          <p ref={pRef} className="paragraph">
            We love turning your digital dreams into reality with creativity and
            the latest technology.
            <br />
            We combine our skills with a deep understanding of your brand to
            deliver outstanding results.
            <br />
            Our talented team is committed to creating unique solutions that
            adapt to the ever-changing digital world. Whether it&apos;s
            web/mobile development, design, digital marketing, or branding with
            SEO optimization.
          </p>
        </div>

        <div
          ref={imageContainerRef}
          className="h-fit w-full flex justify-center mnd:justify-end"
        >
          <Image
            height={350}
            width={350}
            src="/Image/about.png"
            alt="About us"
            className="aboutImage h-auto w-auto"
          />
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-2">
        <div className="flex flex-col">
          <h1 className="text-[--font-color70]">Why choose us?</h1>
          <p className="text-lg text-[--font-color80] font-semibold pl-2">
            We are the bricks to build your dreams.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-2 p-4 md:gap-6 gap-8">
          <div className="aboutCard">
            <span className="icon">
              <GiArmorUpgrade size={40} />
            </span>
            <h1 className="heading">Innovative Solutions</h1>
          </div>
          <div className="aboutCard">
            <span className="icon">
              <PiStrategyBold size={40} />
            </span>
            <h1 className="heading">Strategic Digital Marketing</h1>
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
            <h1>Reliability and Trust</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
