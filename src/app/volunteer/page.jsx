"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import allison from "../../assets/allison.jpeg";
import Model from "../components/model";
import emailjs from "@emailjs/browser";
const Volunteering = () => {
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
      .then((result) => {
        alert("Thank you for your Inquiry.");
        console.log(result)
      });
    e.target.reset();
  };
  const [showModalb, setShowModelb] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col items-center pt-20 bg-slate-200">
        <h2>Here are our Recent Volunteers </h2>
        <button
          className="mx-auto bg-cyan-700 py-2 px-4 mt-1 text-white animate-pulse"
          onClick={() => setShowModelb(true)}
        >
          Join
        </button>
        <div className="grid lg:grid-cols-3 justify-center items-center my-3 p-4 gap-8">
          <div className="flex gap-x-2 p-3 bg-white rounded-lg justify-center items-center">
            <div>
              <Image
                src={allison}
                className="rounded-lg w-full"
                alt="Volunteer allison"
              />
            </div>
            <div>
              <h2 className="font-medium py-1">Allison crimmins</h2>
              <p className="text-xs">From USA she volunteered for a month </p>
            </div>
          </div>
        </div>
      </div>
      <Model isVisible={showModalb} onClose={() => setShowModelb(false)}>
        <div className="p-3">
          <h1 className="p-2 font-semibold text-lg text-blck">
            Volunteers Form
          </h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid gap-4">
            {/* <!-- Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label for="fullnames" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500  "
                  required
                  placeholder="Fullnames Name"
                />
              </div>

              <div>
                <label for="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500   "
                  required
                  placeholder="Email"
                />
              </div>
            </div>
            {/* <!-- End Grid --> */}
            <div>
              <label for="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500   "
                required
                placeholder="Subject"
              />
            </div>

            <div>
              <label for="message" className="sr-only">
                message
              </label>
              <textarea
                rows="5"
                name="message"
                className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500   "
                required
                placeholder="Type your message"
              ></textarea>
            </div>
          </div>
          {/* <!-- End Grid --> */}

          <div className="mt-4 grid">
            <button
              type="submit"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-cyan-700 hover:bg-cyan-800 border border-transparent text-sm lg:text-base text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Volunteer
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              We&apos;re glad for your support.
            </p>
          </div>
        </form>
      </Model>
    </>
  );
};
export default Volunteering;
