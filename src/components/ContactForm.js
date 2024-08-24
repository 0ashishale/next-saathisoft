"use client";
// import { sendEmail } from "@/utils/sendEmail";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
 
    
    // try {
    //   setProcessing(true);
    //   const response = await fetch("/api/sendEmail", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       name,
    //       email,
    //       message,
    //     }),
    //   });

    //   console.log(response);

    //   if (response.ok) {
    //        setName(null);
    //        setEmail(null);
    //        setMessage(null);
    //     toast.success(`Message Sent Successfully!`);
    //     setSuccess(true);
    //   } else {
    //    return toast.error(`Error Sending Message!`);
    //     console.error("Failed! Try again later.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   toast.error(`Faild!, Try again later.`);
    // } finally {
    //     setProcessing(false)
    // }



    try {
      setProcessing(true)
      console.log(name, email, message);
      if (!name || !email || !message) {
       return toast.error(`All fields are required.`)
      }
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
       body: JSON.stringify({
          name,
          email,
          message
        }),
      });
console.log(response);
      if (!response.ok) {
        // const errorData = await JSON.parse(response);
        throw new Error("Error sending email");
      }

      // const responseData = await response.json();
      // console.log(responseData.message);
      setSuccess(true)
      toast.success(`Message sent Successfully.`)
      // Handle success, show a success message, etc.
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error sending message.`)
      // Handle the error, show an error message, etc.
    } finally {
      setProcessing(false)
    }

  };

  return (
    <>
      <h2 className="text-[--font-color70]">
        Send us a message
      </h2>
      <div className="text-[--font-color] w-full mt-2">
        <ToastContainer />
        <form className="w-full " onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="block text-sm font-medium ">
              Name
            </label>
            <input
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              type="text"
              id="name"
              name="name"
              className="formInput"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium ">
              Email
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
            <label htmlFor="message" className="block text-sm font-medium ">
              Message
            </label>
            <textarea
              required
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your words..."
              id="message"
              name="message"
              rows={3}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md bg-transparent outline-none text-sm"
            ></textarea>
          </div>

          <button
            type="submit"
            className=" text-black font-semibold bg-[--ancient-gold60] border-[--ancient-gold60] p-2 rounded hover:bg-[--ancient-gold] text-center w-full transition-all duration-300 text-sm tracking-wider"
            disabled={processing}
          >
            {processing ? (
              <>
                <div className="flex justify-center gap-3">
                  <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-white border-2"></div>
                  Processing...
                </div>
              </>
            ) : (
              <>
                {success ? (
                  <>
                    <span className="text-green-300">Succeed</span>
                  </>
                ) : (
                  <>Send</>
                )}
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
