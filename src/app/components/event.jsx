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
          it will be our pleasure to be with you
        </p>
      </div>
      {isLoading ? (
        // Render the skeleton loader while loading
        Array.from({ length: 3 }).map((_, i) => <SkeletonLoader key={i} />)
      ) : map.length === 0 ? (
        // Display message when no events are available
        <div className="flex text-center justify-center">
          <p className="flex text-center text-yellow-600 mt-8">
            There are no scheduled events available right now! View Our Blogs
            About Past Events!
          </p>
        </div>
      ) : (
        map.map((event, i) => (
          <div  key={event.id || i} className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 md:px-10">
            <div
              className="flex flex-col border border-yellow-600 rounded-lg"
            >
              {event.images && event.images.length > 0 && (
                <Image
                  src={
                    typeof event.images[0].image === "string"
                      ? event.images[0].image
                      : event.images[0].image.url
                  }
                  width={320}
                  height={100}
                  className="w-full lg:h-80 md:h-56 h-64 object-cover rounded-t-lg"
                  alt="Event Image"
                />
              )}
              <div className="bg-gray-200 py-8 text-black text-center px-1 rounded-b-lg">
                <h3 className="font-semibold sm:text-xl">{event.name}</h3>
                <p className="py-2 text-sm">{event.Description}</p>
                <button
                  className="block mx-auto my-2 text-white font-mono bg-cyan-700 hover:bg-cyan-800 px-3 py-2"
                  onClick={sendEmail}
                >
                  RSVP
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Event;

