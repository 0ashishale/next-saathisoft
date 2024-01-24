// pages/Home.js

import Image from "next/image";


const Hero = () => {
  return (
    <section
      className="heroSection min-h-[80svh] md:w-[70%] w-[90%] mx-auto flex flex-col items-center p-4 md:p-8 lg:p-16 relative
    bg-[url('/image/hero.png')] bg-contain bg-no-repeat bg-center
     
    "
    >
      <div className="">
        <div className=" flex flex-col gap-5 justify-center ">
          <h2 className=" font-light  tracking-wide">
            Let&apos;s make your online presence shine!{" "}
          </h2>

          <div className="content font-bold flex items-center justify-center md:text-[8rem] text-[7vmax]  h-full w-full">
            <h2>SAATHisoft</h2>
            <h2>SAATHisoft</h2>
          </div>
        </div>
        <div className="heroHeading absolute bottom-[10%] bg-gray-800/80 py-2 px-[2.5em]">
          <h1 className="text-[2.2em]  tracking-wide gradient">
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
