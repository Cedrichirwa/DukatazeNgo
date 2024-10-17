"use client";
import React from "react";
import Image from "next/image";
import logo from "../../assets/dukatazegold.jpeg";
import { Button } from "./ui/MovingBorders";
import { motion } from "framer-motion";
const AboutMore = () => {

  const impactStatements = [
    {
      id: 1,
      title: "Our Impact",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
      paragraph:
        "We envision a world where teenage pregnancy and menstrual stigma no longer exist.",
    },
    {
      id: 2,
      title: "Our Mission",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      ),
      paragraph:
        " Empowering young people to fight teenage pregnancies and menstruation stigma through education, economic empowerment,and creative engagement",
    },
    {
      id: 3,
      title: "Our Vision",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      paragraph:
        "A future where young people embrace their sexual and reproductive health with confidence, fostering a culture of openness and understanding, free from stigma and unplanned pregnancies.",
    },
  ];
  return (
      <motion.div
       initial={{ y: 100, opacity: 0 }}
       whileInView={{ y: 0, opacity: 1 }}
       transition={{ duration: 0.5 }}
       viewport={{ once: true }}
        className="pt-6">
        <div className="my-4">
          <h2 className="flex justify-center gap-4 items-center text-cyan-700 text-3xl sm:text-5xl font-semibold text-center">
            About Us
          </h2>
          <p className="text-center p-1 text-gray-400">
            Would you like to know More about Dukataze?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-full h-fit">
          <div className=" justify-center z-10 rounded-full">
            <Image
              alt="dukataze team"
              className="rounded-full"
              width={130}
              src={logo}
            />
          </div>
          <div className="-mt-6 px-6 flex lg:items-center text-white lg:justify-center bg-slate-100 border border-yellow-500 pt-4">
            <div className="p-5 text-black">
              <h2 className="text-2xl sm:text-5xl font-bold text-center">
                Who We Are
              </h2>
              <p className="sm:p-4 lg:mx-10 md:mx-0 p-0 max-md:text-sm sm:text-center">
                Dukataze is a program of Saye company ltd that creates SRHR
                creative tools that are adolescents friendly
              </p>

              <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
                {impactStatements.map((card) => (
                  <Button
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius="1.75rem"
                    style={{
                      background: "rgb(14,116,144)",
                      backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",

                      borderRadius: `calc(1.75rem* 0.96)`,
                    }}
                    className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                      <span>
                        {card.svg}
                      </span>
                      <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                          {card.title}
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                          {card.paragraph}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>

              {/* <div className="sm:px-4 lg:mx-10 md:mx-0 sm:text-lg font-bold p-0 max-md:text-sm sm:my-0 my-3 text-center">
                <span className="text-cyan-700  font-bold">{year - 2017}</span>{" "}
                <br />
                Years of experience
                <br />
                <span className="text-cyan-700 font-bold">8+</span>
                <br /> Projects implemented
                <br />
                <span className="text-cyan-700 font-bold">7,100+</span> <br />
                Beneficiaries
                <br />
                <span className="text-cyan-700 font-bold">22k+</span>
                <br /> People that were impacted
              </div> */}
            </div>
          </div>
        </div>
      </motion.div>
  );
};
export default AboutMore;
