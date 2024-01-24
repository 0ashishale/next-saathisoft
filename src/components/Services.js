import Link from "next/link";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { GoDeviceCameraVideo } from "react-icons/go";
import { TbBrandGooglePhotos } from "react-icons/tb";
import { MdOutlineContentPaste } from "react-icons/md";
import { RiMenuSearchLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiMobile2 } from "react-icons/ci";

const Services = () => {
  return (
    <>
      <section className="md:w-[70%] w-[90%] mx-auto py-10 my-3">
        <div className="text-center mb-10">
          <h1 className=" text-2xl tracking-wide mb-3">Our Services</h1>
          <p className="text-3xl  gradient">
            Where your every digital need finds its perfect solution, all in one
            place.
          </p>
        </div>

        <div className="servicesContainer  ">
          <ServicesCard
            icon={
              <MdOutlineDesignServices
                size={40}
                className="text-[--font-color]"
              />
            }
            title={`Graphics Design`}
            description={`Rise your brand with our expert graphic design services, turning ideas into stunning visual masterpieces.`}
          />
          <ServicesCard
            icon={
              <GoDeviceCameraVideo size={40} className="text-[--font-color]" />
            }
            title={`Video Creation`}
            description={`Video marketing involves using compelling video content to promote, educate, or engage with an audience, aiming to increase brand awareness, drive traffic, and achieve specific marketing goals.`}
          />
          <ServicesCard
            icon={
              <MdOutlineComputer size={40} className="text-[--font-color]" />
            }
            title={`Web Development`}
            description={`Creating a website involves designing, coding, and structuring web pages to deliver content and functionality over the internet.`}
          />
          <ServicesCard
            icon={<CiMobile2 size={40} className="text-[--font-color]" />}
            title={`App Development`}
            description={`Enhance your online presence with our tailored app development services for a seamless and engaging user experience on your website.`}
          />
          <ServicesCard
            icon={
              <TbBrandGooglePhotos size={40} className="text-[--font-color]" />
            }
            title={`Branding`}
            description={`Branding encompasses creating a distinctive identity, including a company's values, messaging, visuals, and experiences, to establish a unique and memorable impression that resonates with its target audience.`}
          />

          <ServicesCard
            icon={
              <MdOutlineContentPaste
                size={40}
                className="text-[--font-color]"
              />
            }
            title={`Content Writing`}
            description={`Content writing is the craft of producing written material for various mediums such as websites, blogs, social media, or marketing materials, focusing on creating engaging, informative, and valuable content tailored to the target audience to convey specific messages or information.`}
          />
          <ServicesCard
            icon={
              <RiMenuSearchLine size={40} className="text-[--font-color]" />
            }
            title={`Search Engine Optimization (SEO)`}
            description={`
            Search Engine Optimization (SEO) is the process of optimizing a website's content, structure, and authority to improve its visibility in search engine results, aiming to increase organic traffic and rank higher for relevant keywords.`}
          />
          <ServicesCard
            icon={
              <IoShareSocialOutline size={40} className="text-[--font-color]" />
            }
            title={`Social Media Marketing`}
            description={`

            Social media marketing involves using social platforms to create and share content, engage with audiences, build brand awareness, drive website traffic, and achieve marketing goals through targeted advertising and organic interactions.`}
          />
        </div>
      </section>
    </>
  );
}




export default Services



const ServicesCard = ({ icon, title, description }) => {
  return (
    <>
      <div className=" w-fit rounded-md bg-transparent border border-gray-700 hover:border-[--font-color] p-[2px] transition-all duration-300">
        <div className="group p-5 md:flex gap-10 h-full w-full">
          <div className="flex justify-center mb-5 md:mt-0">

            <span className="flex justify-center items-center  bg-gray-900 group-hover:bg-yellow-500/30 transition-color duration-500  p-3 rounded-full aspect-square
           h-[6rem]
          ">
            {icon}
          </span>
        
          </div>
          <div className="flex flex-col justify-between gap-5 font-bold">
            <div className="flex flex-col gap-5">
            <h1 className="text-xl tracking-wide">{title}</h1>
            <p className="text-[16px] text-gray-300 font-light tracking-wide">
              {description}
            </p>
            </div>
            <span className="mt-5 ">
              <Link
                href={"/services"}
                className="text-2xl border border-gray-600 px-6 flex w-fit items-center justify-center rounded hover:bg-[--font-color]
                duration-500  group-hover:translate-x-10 group-hover:border-[--font-color] ease-out
                "
              >
                &rarr;
              </Link>
            </span>
          </div>
        </div>
      </div>

    </>
  )
}