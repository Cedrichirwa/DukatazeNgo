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
  return (
    <>
      <Homep heading="About Us" message="Learn more about Dukataze" />

      <AboutMore />

      <div className="mt-5">
        <h2 className=" text-cyan-700 text-3xl sm:text-5xl font-semibold text-center">
          Core Members
        </h2>
        <p className="text-center p-1 text-gray-400 my-2">
          Excellent teamwork leads to exceptional achievements.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 w-full h-[500px] ">
        <div className="w-full md:h-[500px] h-[300px]">
          <Image
            src={amina}
            style={{ objectFit: "cover" }}
            className="w-11/12 h-full"
            alt="Founder Amina UMUHOZA"
          />
        </div>
        <div className="flex items-center justify-center border border-gray-200">
          <div className="p-5 text-black">
            <h2 className="text-xl sm:text-3xl font-bold justify-center items-center text-center text-cyan-800">
              CEO/ Founder
            </h2>
            <h2 className="text-2xl sm:text-5xl font-bold justify-center items-center text-center pt-2">
              Amina UMUHOZA
            </h2>
          </div>
        </div>
      </div>

      <div className="my-12 grid lg:grid-cols-3 md:grid-cols-2 gap-5 bg-slate-100 text-center">
        <div className="p-4">
          <div className="w-48 h-56 rounded-full mx-auto">
            <Image
              className="rounded-lg h-full w-full "
              style={{ objectFit: "cover" }}
              src={jose}
              alt="Deputy chairperson Umutesi Josee"
            />
          </div>
          <div>
            <h2 className="items-center font-semibold text-xl ">
              Umutesi Josee
            </h2>
            <p className="items-center font-semibold text-cyan-800">
              Deputy chairperson
            </p>
            <p className="items-center">
              with a Bachelor&apos;s degree in IT, a profession in software
              engineering development and expertise in MHM, public speaking and
              reproductive system education.
            </p>
          </div>
        </div>
        {/* //////// */}
        <div className="p-4">
          <div className="w-48 h-56 rounded-full mx-auto">
            <Image
              className="rounded-lg h-full w-full "
              style={{ objectFit: "cover" }}
              src={shaxy}
              alt="Program Coordinator Mbabazi Sharon"
            />
          </div>
          <div>
            <h2 className="items-center font-semibold text-xl ">
              Mbabazi Sharon
            </h2>
            <p className="items-center font-semibold text-cyan-800">
              Program Coordinator
            </p>
            <p className="items-center">
              with a Bachelor&apos;s degree in Development studies NGO management.
              With 6 years of experience in SRHR field.
            </p>
          </div>
        </div>
        {/* //////// */}
        <div className="p-4">
          <div className="w-48 h-56 rounded-full mx-auto">
            <Image
              className="rounded-lg h-full w-full "
              style={{ objectFit: "cover" }}
              src={ibra}
              alt="Content Director Ngarambe Elisee Ibrahim"
            />
          </div>
          <div>
            <h2 className="items-center font-semibold text-xl ">
              Ngarambe Elisee Ibrahim
            </h2>
            <p className="items-center font-semibold text-cyan-800">
              Content Director
            </p>
            <p className="items-center">
              with a profession in Business and Digital Marketing and expertise
              in SRHR education
            </p>
          </div>
        </div>
        {/* //////// */}
        <div className="p-4">
          <div className="w-48 h-60 rounded-full mx-auto">
            <Image
              className="rounded-lg h-full w-full "
              style={{ objectFit: "cover" }}
              src={gizo}
              alt="COO Mugenga Gisele"
            />
          </div>
          <div>
            <h2 className="items-center  font-semibold text-xl ">
              Mugenga Gisele
            </h2>
            <p className="items-center font-semibold text-cyan-800">COO</p>
            <p className="items-center">
              with a Bachelor&apos;s degree in Economics and expertise in SRHR,
              community development
            </p>
          </div>
        </div>
        {/* //////// */}
        <div className="p-4">
          <div className="w-48 h-56 rounded-full mx-auto">
            <Image
              className="rounded-lg h-full w-full "
              style={{ objectFit: "cover" }}
              src={sarah}
              alt="Skill analysis developer Umutoni Sarah"
            />
          </div>
          <div>
            <h2 className="items-center font-semibold text-xl ">
              Umutoni Sarah
            </h2>
            <p className="items-center font-semibold text-cyan-800">
              Skill analysis developer
            </p>
            <p className="items-center">
              with a Profession in Sewing fashion, and expertise in SRHR,
              communication
            </p>
          </div>
        </div>
        {/* //////// */}
        <div className="p-4 ">
          <div className="w-48 h-56 rounded-full mx-auto">
            <Image
              className="rounded-lg h-full w-full "
              style={{ objectFit: "cover" }}
              src={rabia}
              alt="Publications Assistant Nkuriyingoma Rabia"
            />
          </div>
          <div>
            <h2 className="items-center font-semibold text-xl ">
              Nkuriyingoma Rabia
            </h2>
            <p className="items-center font-semibold text-cyan-800">
              Publications Assistant
            </p>
            <p className="items-center">
              with a profession in communication and marketing and expertise in
              SRHR training.
            </p>
          </div>
        </div>
        {/* //////// */}
      </div>

      <Mapp />
    </>
  );
};
export default AboutUs;
