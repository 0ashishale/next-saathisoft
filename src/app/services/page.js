import Contact from "@/components/Contact"
import Line from "@/components/Line"
import Services from "@/components/Services"
import Link from "next/link"

export const metadata = {
    title : 'Services'
}

const page = () => {
  return (
    <>
      <section className="h-[8rem] w-[90%] mx-auto mt-5">
        <div className="h-full bg-[url('/Image/abstract-black.jpg')] bg-cover rounded flex items-center pl-10">
          <h1 className="heading !font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            <Link href={"/"}>SAATHisoft</Link> / Services
          </h1>
        </div>
      </section>
      <Services />
      <Contact />
      <Line />
    </>
  );
}

export default page