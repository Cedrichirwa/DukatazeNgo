"use client";
import React, { useRef } from "react";
import Image from "next/image";
import contact from "../../assets/contact.jpeg";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7og9hvi",
        "template_t39bku7",
        form.current,
        "llwClRNjE73s9SzXB"
      )
      .then(() => {
        alert("Thank you for your Inquiry.");
      });
    e.target.reset();
  };
  return (
    <>
      <div className="relative flex md:items-center md:justify-center mb-6 md:h-screen sm:bg-fixed bg-center bg-cover cont">
        <Image
          src={contact}
          alt="contact"
          className="w-full h-full md:hidden block"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] absolute flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-4xl md:block hidden sm:text-6xl font-bold">
            Contact Us
          </h2>
          <p className="p-4 text-xl sm:text-3xl ">
            Reach out on us with any inquiry
          </p>
        </div>
      </div>

      <div className="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto my-2">
        <div className="w-full mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-cyan-800 sm:text-5xl ">
              Contact us
            </h1>
            <p className="mt-1 text-gray-600 ">
              We&apos;d love to talk about how we can help you.
            </p>
          </div>

          <div className="mt-6 grid items-center gap-6 lg:gap-16">
            {/* <!-- Card --> */}
            <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8  mx-auto lg:w-2/3 w-full">
              <h2 className="mb-8 text-xl font-semibold text-gray-800 ">
                Fill in the form
              </h2>

              <form ref={form} onSubmit={sendEmail}>
                <div className="grid gap-4">
                  <div className="border-b border-b-gray-500">
                    <label for="names">Names *</label>
                    <input
                      type="text"
                      name="user_name"
                      className="py-3 px-4 block w-full rounded-md outline-none focus:border-cyan-500 focus:ring-cyan-500 "
                      required
                      placeholder="Enter Full names..."
                    />
                  </div>

                  <div className="border-b border-b-gray-500">
                    <label for="hs-email-contacts-1">Email *</label>
                    <input
                      type="email"
                      name="user_email"
                      className="py-3 px-4 block w-full rounded-md outline-none focus:border-cyan-500 focus:ring-cyan-500 "
                      required
                      placeholder="Email..."
                    />
                  </div>

                  <div className="border-b border-b-gray-500  focus:border-cyan-500 focus:ring-cyan-500">
                    <label for="subject">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      className="py-3 px-4 block w-full rounded-md outline-none focus:border-cyan-500 focus:ring-cyan-500 "
                      required
                      placeholder="Type Subject..."
                    />
                  </div>

                  <div className="border-b border-b-gray-500">
                    <label for="message">Message *</label>
                    <textarea
                      rows="5"
                      name="message"
                      className="py-3 px-4 block w-full rounded-md outline-none focus:border-cyan-500 focus:ring-cyan-500 "
                      required
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div className="mt-4 grid">
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-cyan-600 hover:bg-cyan-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                  >
                    Send inquiry
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </form>
            </div>

            {/* <!-- End Card --> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
