import { GiArmorUpgrade } from "react-icons/gi";
import { PiStrategyBold } from "react-icons/pi";
import { FaDownLeftAndUpRightToCenter } from "react-icons/fa6";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import Image from "next/image";

const About = () => {
  return (
    <>
  
      <section className="FadeIn md:w-[70%] w-[90%] mx-auto py-10 my-3">
        <div className=" grid md:grid-cols-2 gap-5">
          <div>
            <h1 className="heading font-bold">About us</h1>

            <div className="flex flex-col">
              <h1 className=" heading  !font-semibold gradient">
                Welcome to SAATHisoft - Where Digital Dreams Take Flight!
              </h1>
              <p className="paragraph text-wrap text-justify ml-3">
                We are passionate about transforming digital aspirations into
                reality. With a commitment to innovation, creativity, and
                cutting-edge technology.
                <br />
                Our team of skilled professionals is dedicated to crafting
                unique solutions tailored to meet the ever-evolving demands of
                the digital landscape. From web development and design to
                digital marketing strategies, we seamlessly blend expertise with
                a keen understanding of your brand to deliver exceptional
                results
              </p>
            </div>
          </div>

          <div className="h-fit w-full flex justify-center mnd:justify-end">
            <Image
              height={350}
              width={350}
              src="/image/about.png"
              alt="About us"
              className="h-auto w-auto"
              
            />
          </div>
        </div>

        <div className="mt-10">
          <h1 className="heading">Why choose us?</h1>
          <h1 className="heading ml-3 bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            We are the bricks to build your dreams!
          </h1>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <div className="flex flex-col gap-5 justify-center items-center border border-gray-700 hover:border-[--font-color] transition-all duration-200 p-3">
              <GiArmorUpgrade size={40} className="text-[--font-color]" />
              <h1 className="heading w-[15rem] bg-gradient-to-r text-center from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Innovative Solutions
              </h1>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center border border-gray-700 hover:border-[--font-color] transition-all duration-200 p-3">
              <PiStrategyBold size={40} className="text-[--font-color]" />
              <h1 className="heading w-[15rem] text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Strategic Digital Marketing
              </h1>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center border border-gray-700 hover:border-[--font-color] transition-all duration-200 p-3">
              <FaDownLeftAndUpRightToCenter
                size={40}
                className="text-[--font-color]"
              />
              <h1 className="heading w-[15rem] text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Customer-Centric Approach
              </h1>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center border border-gray-700 hover:border-[--font-color] transition-all duration-200 p-3">
              <VscWorkspaceTrusted size={40} className="text-[--font-color]" />
              <h1 className="heading w-[15rem] text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
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
