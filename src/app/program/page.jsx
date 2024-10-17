import React from "react";
import Image from "next/image";
import progr from "../../assets/program.jpeg";
import Program from "../components/program";

const Programs = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative flex md:items-center md:justify-center mb-6 md:h-screen sm:bg-fixed bg-center bg-cover program">
        <Image src={progr} alt="" className="w-full h-full md:hidden block" />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/70 z-[2]" />
        <div className="p-5 text-white z-[2] absolute flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-4xl md:block hidden sm:text-6xl font-bold">
            Program
          </h2>
          <p className="p-4 text-xl sm:text-3xl ">Learn on how we strive</p>
        </div>
      </div>
      <Program />
    </div>
  );
};
export default Programs;
