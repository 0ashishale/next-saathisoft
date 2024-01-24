import Image from "next/image";

const Partners = () => {
  return (
    <>
      <section className="md:w-[70%] w-[90%] mx-auto my-20">
        <div className="">
          <h5 className="gradient text-sm tracking-widest font-semibold mb-3">
            OUR DIGITAL PARTNERS
          </h5>
          <h1 className="text-3xl font-semibold tracking-widest text-center">
            Our Clients
          </h1>
          <div className="flex flex-wrap gap-10 justify-center items-center mt-6">
            <Card
              name={`Aiwa Education`}
              url={`www.aiwa.edu.np/`}
              logo={"/Image/aiwa.png"}
            />
            <Card
              name={`Neat Dental Care`}
              url={`www.neatdentalcare.com.np/`}
              logo={"/Image/neatdental.png"}
            />
            <Card
              name={`Sunaulo Baglung`}
              url={``}
              logo={"/Image/sunaulo.png"}
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
      <div className="flip-card  h-[12rem] w-[12rem] cursor-pointer">
        <div className="flip-card-inner">
          <div className="flip-card-front border border-gray-500 rounded">
            <Image
              width={300}
              height={300}
              src={logo}
              alt="Neat Dental Care"
              
            />
          </div>
          <div className="flip-card-back border border-gray-500 rounded">
            <a
              href={`https://${url}`}
              rel="noreferrer noopener"
              target="_blank"
              className="text-[14px] underline text-[--font-color] hover:text-[--font-color-end] transition-colors duration-200"
              alt={name}
            >
              {url}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
