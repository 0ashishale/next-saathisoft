import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="h-[80vh] w-full flex justify-center items-center flex-col gap-5 ">
      <h1>Opps! Page Not Found. </h1>
      <a href="/">Go To Home Page</a>

      <Image width={500} height={500} src={"/Image/pageNotFound.png"} alt="404" />

   
    </div>
  );
}

export default PageNotFound;