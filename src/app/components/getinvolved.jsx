"use client";
import React, { useState, useRef, useEffect } from "react";
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
import { motion } from "framer-motion";
import Modal from "./model";
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

  const partners = [
    { src: AfricaUnion, alt: "Africa Union" },
    { src: DotRwanda, alt: "Dot Rwanda" },
    { src: JunoMe, alt: "Juno Me" },
    { src: MyPeriod, alt: "My Period" },
    { src: NewAfrica, alt: "New Africa" },
    { src: Segal, alt: "Segal Foundation" },
    { src: TonyFoundation, alt: "Tony Foundation" },
    { src: YouthConnekt, alt: "Youth Connekt" },
    { src: Jumelage, alt: "Jumelage" },
  ];

  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    }
  }, []);

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

        <div className="overflow-hidden pt-6">
          <motion.div
            ref={carouselRef}
            className="flex cursor-grab"
            whileTap={{ cursor: "grabbing" }}
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="min-w-[150px] sm:min-w-[200px] lg:min-w-[250px] mx-2 sm:mx-3 lg:mx-4"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full h-32 sm:h-40 lg:h-44 border rounded-lg object-contain"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="my-5 grid sm:grid-flow-col lg:gap-20 md:gap-6"
          initial={{ opacity: 0, scale: 0.9 }} // Initial state
          animate={{ opacity: 1, scale: 1 }} // Animation state
          exit={{ opacity: 0, scale: 0.9 }} // Exit state for smooth transitions
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <motion.div
            className="flex border h-fit mx-auto p-4 bg-white rounded-lg shadow-md" // Add padding and a background
            whileHover={{ scale: 1.05 }} // Scale effect on hover
            whileTap={{ scale: 0.95 }} // Scale effect on tap
            transition={{ duration: 0.3 }} // Transition duration for hover/tap
          >
            <Image
              src={volunteer}
              className="w-20 rounded-sm" // Change to rounded-full for a circular image
              alt="volunteer"
              style={{ objectFit: "cover" }}
            />
            <div className="flex flex-col justify-center ml-4">
              {" "}
              {/* Flex column to separate text and button */}
              <div className="bg-cyan-600 py-2 text-white text-center px-2 rounded-md">
                {" "}
                {/* Rounded corners */}
                <p className="py-1">Join our efforts by volunteering</p>
              </div>
              <Link href="/volunteer">
                <button className="mx-auto bg-gray-200 py-1 px-4 mt-2 text-black animate-bounce rounded-md">
                  {" "}
                  {/* Added rounded corners */}
                  View
                </button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Modal isVisible={showModalc} onClose={() => setShowModelc(false)}>
        <div className="p-3">
          <h1 className="p-2 font-semibold text-lg text-black">Partners Form</h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullnames" className="sr-only">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500"
                  required
                  placeholder="Fullnames Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500"
                  required
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500"
                required
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500"
                required
                placeholder="Type your message"
              ></textarea>
            </div>
          </div>

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
              We&apos;re glad for your support.
            </p>
          </div>
        </form>
      </Modal>

      {/* <Model isVisible={showModalc} onClose={() => setShowModelc(false)}>
        <div className="p-3">
          <h1 className="p-2 font-semibold text-lg text-blck">Partners Form</h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid gap-4">
            {/* <!-- Grid --> *
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
            {/* <!-- End Grid --> *
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
          {/* <!-- End Grid --> *

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
      </Model> */}
    </>
  );
};
export default Getin;
