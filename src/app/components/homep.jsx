import React from "react";
import team from "../../assets/teamm.jpeg";
import Image from "next/image";
const Homep = ({ heading, message }) => {
  return (
    <>
      <div className="flex md:items-center md:justify-center mb-6 md:h-screen sm:bg-fixed bg-cover bg-center custom-img relative">
        <Image
          src={team}
          alt="Dukataze team"
          className="w-full h-full md:hidden block"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/60 z-[2] " />
        <div className="p-5 text-white z-[2] absolute flex flex-col items-center justify-center w-full h-full">
          <h2 className="text-4xl sm:text-6xl md:block hidden font-bold">
            {heading}
          </h2>
          <p className="p-4 text-xl sm:text-3xl ">{message}</p>
        </div>
      </div>
    </>
  );
};
export default Homep;
