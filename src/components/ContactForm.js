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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //     setProcessing(true);

  //     try {
  //       const response = await fetch("/api/sendEmail", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ name, email, message }),
  //       });

  //       if (response.ok) {
  //         alert("Message Sent Successfully! We will contact you soon.");
  //       } else {
  //         throw new Error("Failed to send email");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //       alert("Oops! Message could not be sent. Please try again later.");
  //     } finally {
  //       setProcessing(false);
  //     }
  //   };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setProcessing(true);

  //   try {
  //     const response = await fetch("/api/sendEmail", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //        name : name,
  //        email,
  //          message,
  //       }),
  //     });

  //     if (response.ok) {
  //       setEmail("");
  //       setMessage("");
  //       setName("");
  //       // alert(`Message Sent Successfully! We will contact you soon.`);
  //     } else {
  //       throw new Error("Failed to send email");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setProcessing(false);
  //     alert(`Opps! Message could not send. Please try again later.`);
  //   } finally {
  //     setProcessing(false);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //  const formData = new FormData();
    //  formData.append("name", name);
    //  formData.append("email", email);
    //  formData.append("message", message);
    setProcessing(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (response.ok) {
           setProcessing(false);
           setName(null);
           setEmail(null);
           setMessage(null);
        toast.success(`Message Sent Successfully!`);
        setSuccess(true);
      } else {
        toast.error(`Error Sending Message!`);
        console.error("Failed! Try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(`Faild!, Try again later.`);
    } finally {
   
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center items-center">
        Get in Touch
      </h2>
      <div className="text-white w-full">
        <ToastContainer />
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
            <label htmlFor="message" className="block text-sm font-medium ">
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
                  <>Submit</>
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
