"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import bgfront from "../../assets/bgfronta.png";
import kotana from "../../assets/kotanaa.jpeg";
import involve from "../../assets/involve.jpg";

const Hero = () => {
  const programs = [
    {
      id: 1,
      title: "About Us",
      paragraph:
        "Dukataze is a program of Saye company ltd that creates SRHR creative tools that are adolescents friendly.",
      link: "/about",
      image: bgfront,
    },
    {
      id: 2,
      title: "Ways to help",
      paragraph: " Support our work. There is a way you can also support.. ",
      link: "/donate",
      image: involve,
    },
    {
      id: 3,
      title: "Creative tools",
      paragraph: " Fun tools that makes us proud of SRHR ",
      link: "/tools",
      image: kotana,
    },
  ];

  const cardRefs = useRef([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // Simulate loading completion after a short delay
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 20); // Simulate 2 seconds loading time

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
    <div id="program" className="p-7 mt-10 my-6 sm:px-7 px-1">
      {loading ? ( // Display loading spinner while loading
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-cyan-600"></div>
        </div>
      ) : (
        <div className="my-5 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-16 rounded-lg">

        {programs.map((program, index) => (
          <motion.div
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
              className="relative z-10 flex flex-col bg-white bg-opacity-10 p-6 backdrop-blur-sm items-center text-black rounded-lg space-y-6 max-w-lg"
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
      )}
      </div>

  );
};

export default Hero;
