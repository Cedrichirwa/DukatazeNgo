import React from "react";
import Image from "next/image";
import Link from "next/link";
import bgfront from "../../assets/bgfronta.png";
import Lets from "../../assets/lets.jpg";
import sewing from "../../assets/sewinga.jpeg";
import kotana from "../../assets/kotanaa.jpeg";
const Program = () => {
  return (
    <>
      <div id="program" className=" my-6 sm:px-7 px-1">
        <div>
          <h2 className="sm:text-5xl text-3xl font-bold text-cyan-700 p-2 text-center">
            Programs
          </h2>
          <p className="text-center text-gray-600 p-1">Make a difference</p>
        </div>
        <div className="my-5 grid sm:grid-cols-2 gap-10 md:mx-16">
          <div className="flex flex-col">
            <Image
              src={bgfront}
              className="w-full lg:h-96 md:h-56 h-64"
              alt="kigali menstruation station"
              style={{ objectFit: "cover" }}
            />
            <div className="bg-cyan-600 py-8 text-white text-center px-1">
              <h3 className=" font-semibold sm:text-xl">
                Kigali Menstruation station
              </h3>
              <p className="py-2">
                A safe space for adolescents to express them selves freely when
                it comes to SRHR{" "}
              </p>
              <Link href="/station">
                {" "}
                <button className="flex text-center mt-2 mx-auto items-center bg-white hover:bg-gray-200 py-2 px-3 font-mono text-black">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={Lets}
              className="w-full lg:h-96 md:h-56 h-64"
              alt="LTAU clubs"
              style={{ objectFit: "cover" }}
            />
            <div className="bg-cyan-600 py-8 text-white text-center px-1">
              <h3 className=" font-semibold sm:text-xl">LTAU Clubs</h3>
              <p className="py-2">Empowering others </p>
              <p className="invisible"> hh</p>
              <Link href="/talk">
                {" "}
                <button className="flex text-center mt-2 mx-auto items-center bg-white hover:bg-gray-200 py-2 px-3 font-mono text-black">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={kotana}
              className="w-full lg:h-96 md:h-56 h-64"
              alt="Creative games"
              style={{ objectFit: "cover" }}
            />
            <div className="bg-cyan-600 py-8 text-white text-center px-1">
              <h3 className=" font-semibold sm:text-xl">Creative tools</h3>
              <p className="py-2">Fun tools that makes us proud of SRHR </p>
              <Link href="/tools">
                {" "}
                <button className="flex text-center mt-2 mx-auto items-center bg-white hover:bg-gray-200 py-2 px-3 font-mono text-black">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <Image
              src={sewing}
              className="w-full lg:h-96 md:h-56 h-64"
              alt="sewing machine"
              style={{ objectFit: "cover" }}
            />
            <div className="bg-cyan-600 py-8 text-white text-center px-1">
              <h3 className=" font-semibold sm:text-xl">
                Sewing Encubation Center
              </h3>
              <p className="py-2">We teach adolescents sewing </p>
              <Link href="/sewing">
                {" "}
                <button className="flex text-center mt-2 mx-auto items-center bg-white hover:bg-gray-200 py-2 px-3 font-mono text-black">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Program;
