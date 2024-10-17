"use client";
import React from "react";
import Homep from "../components/homep";
import Image from "next/image";
import Mapp from "../components/map";
import shaxy from "../../assets/shaxy.png";
import gizo from "../../assets/giselee.jpg";
import rabia from "../../assets/rabiaa.jpg";
import ibra from "../../assets/ibra.jpg";
import sarah from "../../assets/sarah.jpg";
import jose from "../../assets/josse.jpg";
import amina from "../../assets/aminaa.jpeg";
import AboutMore from "../components/aboutmore";


const AboutUs = () => {
  // Define your motion variants for entry animations
// const cardVariants = {
//   hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Final state (visible)
// };
  return (
    <div className="overflow-x-hidden">
      <Homep heading="About Us" message="Learn more about Dukataze" />

      <AboutMore />

      <div className="mt-5 pt-6">
        <h2 className=" text-cyan-700 text-3xl sm:text-5xl font-semibold text-center">
          Core Members
        </h2>
        <p className="text-center p-1 text-gray-400 my-2">
          Excellent teamwork leads to exceptional achievements.
        </p>
      </div>
      {/* AMINA Section */}

      <div className="px-2 grid sm:grid-cols-2 w-full h-[500px] bg-gradient-to-r from-gray-50 to-slate-200 p-6 rounded-lg shadow-lg">
        <div className="w-full md:h-[500px] h-[300px] relative">
          <Image
            src={amina}
            style={{ objectFit: "cover" }}
            className="w-full h-full rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out"
            alt="Founder Amina UMUHOZA"
          />
        </div>
        <div className="flex items-center justify-center bg-white border-2 border-[#F9D58F] shadow-lg rounded-lg p-6">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-cyan-800">
              CEO / Founder
            </h2>
            <h2 className="text-4xl sm:text-6xl font-bold text-gray-800">
              Amina UMUHOZA
            </h2>
            {/* <p className="text-gray-600 text-lg sm:text-xl pt-2 max-w-md mx-auto">
              Leading with passion and a strong vision to empower communities
              through innovation and education. Amina UMUHOZA is dedicated to
              transforming lives.
            </p> */}
          </div>
        </div>
      </div>
      {/* TEAM SECTION */}
      <div className="my-12 bg-white p-6 pt-6 rounded-lg">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {[
            {
              id: 1,
              image: jose,
              name: "Umutesi Josee",
              title: "Deputy Chairperson",
              description:
                "with a Bachelor's degree in IT, expertise in software engineering, MHM, public speaking and reproductive system education.",
            },
            {
              id: 2,
              image: shaxy,
              name: "Mbabazi Sharon",
              title: "Program Coordinator",
              description:
                "with a Bachelor's degree in Development studies, 6 years experience in SRHR field.",
            },
            {
              id: 3,
              image: ibra,
              name: "Ngarambe Elisee Ibrahim",
              title: "Content Director",
              description:
                "with expertise in Business, Digital Marketing and SRHR education.",
            },
            {
              id: 4,
              image: gizo,
              name: "Mugenga Gisele",
              title: "COO",
              description:
                "with a Bachelor's degree in Economics and expertise in SRHR, community development.",
            },
            {
              id: 5,
              image: sarah,
              name: "Umutoni Sarah",
              title: "Skill Analysis Developer",
              description:
                "with a profession in Sewing fashion, expertise in SRHR, communication.",
            },
            {
              id: 6,
              image: rabia,
              name: "Nkuriyingoma Rabia",
              title: "Publications Assistant",
              description:
                "with expertise in communication, marketing, and SRHR training.",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="relative bg-slate-200 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out group"
            >
              <div className="absolute inset-0 rounded-lg border-2 border-transparent transition-all duration-500 ease-linear group-hover:border-[#F9D58F]"></div>
              <div className="absolute top-0 left-0 w-full h-0 rounded-lg border-t-2 border-[#F9D58F] transition-all duration-500 ease-linear group-hover:h-full"></div>

              <div className="flex flex-col items-center relative z-10">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-4">
                  <Image
                    className="w-full h-full object-cover"
                    src={member.image}
                    alt={`${member.name}`}
                  />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h2>
                <p className="text-cyan-800 font-semibold">{member.title}</p>
                <p className="text-gray-600 mt-2 text-center">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Mapp />
    </div>
  );
};
export default AboutUs;
