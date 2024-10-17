"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import myPeriod from "../../assets/myperiod.jpeg";
import junome from "../../assets/junome.jpeg";
import Model from "../components/model";
import emailjs from "@emailjs/browser";
const Partners = () => {
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
      .then(
        (result) => {
          alert("Thank you for your Inquiry.");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  const [showModala, setShowModela] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col items-center pt-20 bg-slate-200">
        <h2>Here are our current Partners </h2>
        <button
          className="bg-cyan-700 py-2 px-4 text-white animate-pulse"
          onClick={() => setShowModela(true)}
        >
          Join
        </button>
        <div className="grid md:grid-cols-2 gap-3 px-6 border w-full my-3">
          <div className=" bg-white rounded-lg p-4">
            <Image src={myPeriod} alt="" />
            <p className="py-2">
              My Period Is Awesome is a platform for projects focusing on
              Menstrual Health & Sexual and Reproductive Health and Rights. The
              Swedish NGO Wise Economy Global Association manages the platform.
            </p>
          </div>
          <div className=" bg-white rounded-lg p-4">
            <Image
              src={junome}
              style={{ objectFit: "fill" }}
              className="md:h-44 h-20 w-full"
              alt=""
            />
            <p className="py-2">
              Manufacturer of female hygiene products intended to offer an
              organic and biodegradable alternative. The company&apos;s products
              include organic tampons, beauty oil, body shaving oil, and wash
              gels in the form of subscription boxes for female empowerment,
              enabling women to maintain hygiene and feel relaxed at all times.
            </p>
          </div>
        </div>
      </div>
      <Model isVisible={showModala} onClose={() => setShowModela(false)}>
        <div className="p-1">
          <h1 className="p-2 font-semibold text-lg text-blck">Partners Form</h1>
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
                  className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500   "
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
              Partner Up
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              We&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </form>
      </Model>
    </>
  );
};
export default Partners;
