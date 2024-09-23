"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import volunteer from "../../assets/volunteerr.jpeg";
import AfricaUnion from "../../assets/AfricanUnionWP.webp";
import DotRwanda from "../../assets/DotRwanda1WP.webp";
import Jumelage from "../../assets/JumelageWP.webp";
import NewAfrica from "../../assets/NewAfricaFundWP.webp";
import JunoMe from "../../assets/JunoMe1WP.webp";
import MyPeriod from "../../assets/MyPeriodIsWP.webp";
import Segal from "../../assets/SegalWP.webp";
import TonyFoundation from "../../assets/TonyElumeluFoundationWP.webp";
import YouthConnekt from "../../assets/YouthConnektWP.webp";

import Model from "./model";
import emailjs from "@emailjs/browser";
const Getin = () => {
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

  const [showModalc, setShowModelc] = useState(false);
  return (
    <>
      <div className=" my-6 px-7">
        <h2 className="sm:text-5xl text-3xl font-bold text-cyan-700 p-2 text-center">
          Join us
        </h2>
        <p className="text-center text-gray-400 p-1">Partners & Recognition</p>
        <div className="grid mx-auto my-3">
          <button
            className="mx-auto bg-cyan-600 py-2 rounded-md px-4 mt-1 text-white animate-pulse w-fit"
            onClick={() => setShowModelc(true)}
          >
            Join Partners
          </button>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-2 justify-center items-center">
          <Image
            src={AfricaUnion}
            className="w-full my-3 h-44 border rounded-lg object-contain"
            alt="get involved"
          />
          <Image
            src={DotRwanda}
            className="w-full my-3 h-44 border rounded-lg object-contain"
            alt="get involved"
          />
          <Image
            className="w-full my-3 h-44 border rounded-lg object-contain"
            src={JunoMe}
            alt="get involved"
          />
          <Image
            src={MyPeriod}
            className="w-full my-3 h-44 border rounded-lg object-contain"
            alt="get involved"
          />
          <Image
            src={NewAfrica}
            className="w-full my-3 h-44 border rounded-lg object-contain"
            alt="get involved"
          />
          <Image
            src={Segal}
            className="w-full my-3 h-44 border rounded-lg object-contain"
            alt="get involved"
          />
          <Image
            src={TonyFoundation}
            className="w-full my-3 h-44 border rounded-lg object-contain"
            alt="get involved"
          />
          <Image
            src={YouthConnekt}
            className="w-full my-3 h-44 border rounded-lg object-contain"
            alt="get involved"
          />
          <Image
            src={Jumelage}
            className="w-full my-3 h-44 border rounded-lg object-contain"
            alt="get involved"
          />
        </div>

        <div className="my-5 grid sm:grid-flow-col lg:gap-20 md:gap-6">
          <div className="flex border h-fit mx-auto">
            <Image
              src={volunteer}
              className="w-20 rounded-t-xl"
              alt="volunteer"
              style={{ objectFit: "cover" }}
            />
            <div className="bg-cyan-600 py-2 text-white text-center px-1 h-full">
              <p className="py-1">Join our efforts by volunteering</p>
              <Link href="/volunteer">
                {" "}
                <button className="mx-auto bg-gray-200 py-1 px-4 mt-1 text-black animate-bounce">
                  View
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Model isVisible={showModalc} onClose={() => setShowModelc(false)}>
        <div className="p-3">
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
              Partner Up{" "}
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
export default Getin;
