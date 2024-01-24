import { MdOutlineLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <section className="FadeIn md:w-[70%] w-[90%] mx-auto py-5 my-3">
        <div>
  
          <div
            className="flex flex-col 
            md:bg-[url('/Image/contact.png')] 
           bg-no-repeat bg-contain bg-center
          
           lg:flex-row justify-between gap-y-10 w-full"
          >
            <div className="lg:mr-5 h-full">
              <h1 className="text-2xl font-semibold mb-4">Contact Us</h1>
              <p className="text-6xl font-bold bg-gradient-to-r from-[--font-color] to-[--font-color-end] bg-clip-text text-transparent">
                Feel free <br /> to contact
              </p>
              <div className="mt-10 flex flex-col gap-2">
                <span className="flex gap-2 items-center">
                  <MdOutlineLocalPhone
                    size={20}
                    className="text-[--font-color]"
                  />
                  <a
                    href="tel:+9779816189588"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    +9779816189588
                  </a>{" "}
                  /
                  <a
                    href="tel:+9779815138271"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    +9779815138271
                  </a>
                </span>
                <span className="flex gap-2 items-center">
                  <IoMailOutline size={20} className="text-[--font-color]" />
                  <a
                    href="mailto:saathisoft02@gmail.com"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    saathisoft02@gmail.com
                  </a>
                </span>
                <div className="flex gap-5 text-[--font-color] ">
                  <a
                    href="https://www.facebook.com/profile.php?id=100084999577902"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="h-[4rem] w-[4rem] rounded-full flex items-center justify-center bg-gray-900/60 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <FaFacebookF size={20} />
                  </a>

                  <a
                    href="https://www.instagram.com/saathisoft02/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="h-[4rem] w-[4rem] rounded-full flex items-center justify-center bg-gray-900/60 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="h-[4rem] w-[4rem] rounded-full flex items-center justify-center bg-gray-900/60 hover:bg-gray-800/70 transition-all duration-300"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col w-[20rem] rounded-3xl">
              <h2 className="text-2xl font-bold mb-4 text-center items-center">
                Get in Touch
              </h2>
              {/* <div className="text-white w-full">
              <form className="w-full " onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium ">
                    Name:
                  </label>
                  <input
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent outline-none text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium ">
                    Email:
                  </label>
                  <input
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@example.com"
                    type="email"
                    id="email"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className=" invalid:text-red-500 mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent outline-none text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium "
                  >
                    Message:
                  </label>
                  <textarea
                    required
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your words..."
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent outline-none text-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className=" text-white p-2 rounded bg-black/80 hover:bg-orange-600 text-center w-full transition-all duration-300 text-sm tracking-wider"
                  disabled={processing}
                >
                  {processing ? (
                    <>
                      <div className="flex justify-center gap-3">
                        <div class="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                        Processing...
                      </div>
                    </>
                  ) : (
                    <>Submit</>
                  )}
                </button>
    
              </form>

            </div> */}
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
