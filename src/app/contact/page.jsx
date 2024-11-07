"use client";
import React, { useRef } from "react";
import Image from "next/image";
import contact from "../../assets/contact.jpeg";
import Lets from "../../assets/lets.jpg";
import emailjs from "@emailjs/browser";
import MagicButton  from "../components/ui/MagicButton";// Import the MagicButton

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
        alert("Thank you for your inquiry.");
      });
    e.target.reset();
  };

  return (
    <>
      {/* First Section - Contact Header */}
      <div className="relative flex md:items-center md:justify-center mb-6 md:h-screen sm:bg-fixed bg-center bg-cover coll">
        <Image
          src={contact}
          alt="contact"
          className="w-full h-full md:hidden block"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] absolute flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-4xl md:block hidden sm:text-6xl font-bold mx-auto text-center">
          Contact Us
          </h2>
          <p className="p-4 text-xl sm:text-3xl text-yellow-600 ">
          Reach out to us with any inquiry
          </p>
        </div>
      </div>
    

      {/* Second Section - Contact Form */}
      <div className="bg-white py-12">
        <div>
          <h2 className="sm:text-5xl text-3xl font-bold text-cyan-700 p-2 text-center">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 p-1">
            We&apos;d love to talk about how we can help you.
          </p>
        </div>
        <div className="relative w-full max-w-lg mx-auto rounded-lg">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 rounded-lg">
            <Image
              src={Lets}
              alt="Program image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg" // Optional: round corners of the background
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0 rounded-lg" />

          {/* Form Section */}
          <div className="relative z-10 bg-white/20 backdrop-blur-md p-8 mx-8 my-8 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold text-white text-center mb-6">
              Fill The Form
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="grid gap-4">
                {/* Full Name Input */}
                <div className="border-b border-gray-500">
                  <label htmlFor="user_name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="py-3 px-4 block w-full bg-transparent border-none placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                    placeholder="Full Name"
                  />
                </div>

                {/* Email Input */}
                <div className="border-b border-gray-500">
                  <label htmlFor="user_email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="py-3 px-4 block w-full bg-transparent border-none placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                    placeholder="Email"
                  />
                </div>

                {/* Subject Input */}
                <div className="border-b border-gray-500">
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    className="py-3 px-4 block w-full bg-transparent border-none placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                    placeholder="Subject"
                  />
                </div>

                {/* Message Textarea */}
                <div className="border-b border-gray-500">
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    className="py-3 px-4 block w-full bg-transparent border-none placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-6 flex justify-center">
                <MagicButton
                  title="Send Inquiry"
                  handleClick={() => sendEmail} 
                  bgColor="bg-cyan-600" // You can change this color as needed
                  otherClasses="w-full"
                />
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-white">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
