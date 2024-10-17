"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bgfront from "../../assets/bgfronta.png";
import Lets from "../../assets/lets.jpg";
import sewing from "../../assets/sewinga.jpeg";
import kotana from "../../assets/kotanaa.jpeg";
import { motion } from "framer-motion";

const Program = () => {
  const [loading, setLoading] = useState(true); // Add loading state
  const programs = [
    {
      id: 1,
      title: "Kigali Menstruation Station",
      paragraph:
        " A safe space for adolescents to freely express themselves regarding SRHR.",
      link: "/station",
      image: bgfront,
    },
    {
      id: 2,
      title: "LTAU Clubs",
      paragraph:
        " A safe space for adolescents to freely express themselves regarding SRHR. ",
      link: "/talk",
      image: Lets,
    },
    {
      id: 3,
      title: "Creative tools",
      paragraph: " Fun tools that makes us proud of SRHR ",
      link: "/tools",
      image: kotana,
    },
    {
      id: 4,
      title: "Sewing Encubation Center",
      paragraph: " We teach adolescents sewing ",
      link: "/sewing",
      image: sewing,
    },
  ];

  const cardRefs = useRef([]);

  // Simulate loading completion after a short delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate 2 seconds loading time

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold for triggering
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <>
      {loading ? ( // Display loading spinner while loading
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-cyan-600"></div>
        </div>
      ) : (
        <div id="program" className="my-6 sm:px-7 px-1">
          <div>
            <h2 className="sm:text-5xl text-3xl font-bold text-cyan-700 p-2 text-center">
              Programs
            </h2>
            <p className="text-center text-gray-600 p-1">Make a difference</p>
          </div>
          <div className="my-5 grid sm:grid-cols-2 gap-10 md:mx-16 rounded-lg">
            {programs.map((program, index) => (
              <motion.div
                ref={(el) => (cardRefs.current[index] = el)}
                key={index}
                className="program-card rounded-lg relative flex flex-col justify-center items-center h-96 bg-gradient-to-b from-blue-500 via-cyan-600 to-blue-800 text-white"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
              >
                {/* Background Image */}
                <motion.div
                  className="absolute inset-0 z-0 rounded-lg"
                  style={{ overflow: "hidden" }}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <Image
                    src={program.image}
                    alt="Program image"
                    layout="fill"
                    objectFit="cover"
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div
                  className="relative z-10 flex flex-col bg-white bg-opacity-10 p-6 backdrop-blur-lg items-center text-black rounded-lg space-y-6 max-w-lg"
                  style={{ marginTop: "100px" }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {/* Title */}
                  <motion.h3
                    className="text-2xl font-bold text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    {program.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className="text-lg text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    {program.paragraph}
                  </motion.p>

                  {/* Decorative Circles */}
                  <motion.div
                    className="absolute top-0 right-0 -mt-12 -mr-16 h-20 w-20 rounded-full bg-yellow-300 opacity-30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 -mb-16 -ml-10 h-16 w-16 rounded-full bg-blue-200 opacity-30"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  ></motion.div>

                  {/* Call-to-Action Button */}
                  <motion.div
                    className="mt-6"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={program.link}
                      className="inline-block bg-cyan-600 text-white font-mono py-2 px-6 rounded-full shadow-md hover:bg-cyan-500 transition-colors"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Program;
