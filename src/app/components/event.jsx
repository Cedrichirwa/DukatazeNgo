"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { trpc } from "@/trpc/client";
import SkeletonLoader from "./skeletonLoader"; // Adjust the path as needed

const FALLBACK_LIMIT = 4;

const Event = (props) => {
    const { query } = props;
    const { data: queryResults, isLoading } =
        trpc.getInfiniteEvents.useInfiniteQuery(
            {
                limit: query.limit ?? FALLBACK_LIMIT,
                query,
            },
            {
                getNextPageParam: (lastPage) => lastPage.nextPage,
            }
        );

    const events = queryResults?.pages.flatMap((page) => page.items);
    const map = events?.length ? events : [];

    const form = useRef(null);

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
                console.log(result);
            });
        e.target.reset();
    };

    return (
        <div className="my-10 px-7">
            <div>
                <h2 className="text-3xl sm:text-5xl font-bold text-cyan-700 p-2 text-center">
                    Events
                </h2>
                <p className="text-center text-gray-400 p-1">
                    it'll be our pleasure to be with you
                </p>
            </div>
            <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:px-10">
                {isLoading
                    ? // Render the skeleton loader while loading
                      Array.from({ length: 3 }).map((_, i) => (
                          <SkeletonLoader key={i} />
                      ))
                    : map.map((event, i) => (
                          <div key={i} className="flex flex-col border border-gray-300">
                              {event.images && event.images.length > 0 && (
                                  <Image
                                      src={
                                          typeof event.images[0].image === "string"
                                              ? event.images[0].image
                                              : event.images[0].image.url
                                      }
                                      width={320}
                                      height={100}
                                      className="w-full lg:h-80 md:h-56 h-64 object-cover"
                                      alt="Event Image"
                                  />
                              )}
                              <div className="bg-gray-200 py-8 text-black text-center px-1">
                                  <h3 className="font-semibold sm:text-xl">
                                      {event.name}
                                  </h3>
                                  <p className="py-2 text-sm">{event.Description}</p>
                                  <button
                                      className="block mx-auto my-2 text-white font-mono bg-cyan-700 hover:bg-cyan-800 px-3 py-2"
                                      onClick={sendEmail}
                                  >
                                      RSVP
                                  </button>
                              </div>
                          </div>
                      ))}
            </div>
        </div>
    );
};

export default Event;


{
  /* <Model isVisible={eventModel} onClose={() => setEventModel(false)}>
        <div className="p-1">
          <h1 className="p-2 font-semibold text-lg text-blck">
            Register for the event
          </h1>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="grid gap-4">
            {/* <!-- Grid --> 
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
            {/* <!-- End Grid --> 
            <div>
              <label for="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                className="py-3 px-4 block w-full outline-none border border-gray-200 rounded-md text-sm focus:border-cyan-500 focus:ring-cyan-500   "
                required
                placeholder="Event name"
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
          {/* <!-- End Grid --> 

          <div className="mt-4 grid">
            <button
              type="submit"
              className="inline-flex justify-center items-center gap-x-3 text-center bg-cyan-700 hover:bg-cyan-800 border border-transparent text-sm lg:text-base text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Register
            </button>
          </div>

          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              We'll get back to you as soon as possible.
            </p>
          </div>
        </form>
      </Model> */
}

{
  /* <div className="flex flex-col border border-gray-300">
            <Image
              src={meet}
              className="w-full lg:h-80 md:h-56 h-64"
              alt="bg"
            />
            <div className="bg-gray-200 py-8 text-black text-center px-1">
              <h3 className=" font-semibold sm:text-xl">Meeting</h3>
              <p className="py-2 text-sm">
                Mon, 03 jul | Kigali menstruation station{" "}
              </p>
              <button
                className="block mx-auto my-2 text-white font-mono bg-cyan-700 hover:bg-cyan-800 px-3 py-2"
                onClick={() =>
                  alert("Sorry but this Event is closed for a moment")
                }
              >
                RSVP
              </button>
            </div>
          </div>
          <div className="flex flex-col border border-gray-300">
            <Image
              src={party}
              className="w-full lg:h-80 md:h-56 h-64"
              alt="bg"
            />
            <div className="bg-gray-200 py-8 text-black text-center px-1">
              <h3 className=" font-semibold sm:text-xl">Celebration</h3>
              <p className="py-2 text-sm">
                Fri, 11 Aug | Kigali menstruation station{" "}
              </p>
              <button
                className="block mx-auto my-2 text-white font-mono bg-cyan-700 hover:bg-cyan-800 px-3 py-2"
                onClick={() =>
                  alert("Sorry but this Event is closed for a moment")
                }
              >
                RSVP
              </button>
            </div>
          </div> */
}
