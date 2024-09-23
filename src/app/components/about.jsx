import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/dukatazegold.jpeg";
const About = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="mx-2 mt-6 mb-4">
        <div className="my-5">
          <h2 className="flex justify-center gap-4 items-center text-cyan-700 text-3xl sm:text-5xl font-semibold text-center">
            <Image
              src={logo}
              width={50}
              height={50}
              className="lg:hidden "
              alt="logo"
            />
            About Us
          </h2>
          <p className="text-center p-1 text-gray-400">
            Would you like to know More about Dukataze?
          </p>
        </div>
        <div className="grid lg:grid-cols-2 w-full h-fit">
          <div className="lg:flex hidden md:py-48 md:px-2 max-lg:hidden">
            <Image
              alt="logo"
              className="w-full "
              style={{ objectFit: "fill" }}
              src={logo}
            />
          </div>
          <div className="flex lg:items-center text-white lg:justify-center bg-cyan-700">
            <div className="p-5 text-white">
              <h2 className="text-2xl sm:text-5xl font-bold text-center">
                Who We Are
              </h2>
              <p className="sm:p-4 lg:mx-10 md:mx-0 p-0 max-md:text-sm">
                Dukataze is a program of Saye company ltd that creates SRHR
                creative tools that are adolescents friendly
              </p>
              <h2 className="font-semibold">Our Mission:</h2>
              <p className="sm:p-4 lg:mx-10 md:mx-0 p-0 max-md:text-sm">
                Empowering young people to fight teenage pregnancies and
                menstruation stigma through education, economic empowerment, and
                creative engagement.
              </p>
              <h2 className="font-semibold">Our Vision:</h2>
              <p className="sm:p-4 lg:mx-10 md:mx-0 p-0 max-md:text-sm">
                A future where young people embrace their sexual and
                reproductive health with confidence, fostering a culture of
                openness and understanding, free from stigma and
                unplanned pregnancies.
              </p>
              <Link href="/about">
                <button className="flex text-center mt-2 mx-auto items-center bg-white hover:bg-gray-200 py-2 px-3 font-mono text-black">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-6 text-center text-2xl flex flex-col gap-2 p-4 font-bold border-4 lg:w-1/2 mx-auto rounded-lg">
          <p className="text-cyan-700  font-bold">{year - 2017}</p>
          <p>Years of experience</p>
          <p className="text-cyan-700 font-bold">8+</p>
          <p>Projects implemented</p>
          <p className="text-cyan-700 font-bold">7,100+</p>
          <p>Beneficiaries</p>
          <p className="text-cyan-700 font-bold">22k+</p>
          <p>People that were impacted</p>
        </div>
      </div>
    </>
  );
};
export default About;
