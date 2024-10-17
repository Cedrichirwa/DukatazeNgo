import React from "react";
import Image from "next/image";
import Donate from "../components/donate";
import involve from "../../assets/involve.jpg";
const Donates = () => {
  return (
    <>
      <div className="relative flex md:items-center md:justify-center mb-6 md:h-screen sm:bg-fixed bg-center bg-cover getinv">
        <Image
          src={involve}
          alt="get involved"
          className="w-full h-full md:hidden block"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] absolute flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-4xl md:block hidden sm:text-6xl font-bold">
            Get involved
          </h2>
          <p className="p-4 text-xl sm:text-3xl text-yellow-600 ">
            Make a difference by donating
          </p>
        </div>
      </div>

      <Donate />
    </>
  );
};
export default Donates;
