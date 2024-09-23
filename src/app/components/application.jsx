import React from "react";
import Image from "next/image";
import training from "../../assets/training1.PNG";
const Application = () => {
  return (
    <div className="my-8 px-12">
      <div>
        <h2 className="sm:text-5xl text-3xl font-bold text-cyan-700 p-2 text-center">
          Application
        </h2>
        <p className="text-center text-gray-400 p-2">
          join our team in making a difference
        </p>
      </div>
      <div className="grid w-full">
        <div className="p-4 rounded-md md:w-1/3 mx-auto bg-gray-100">
          <Image alt="Application" src={training} className="rounded-md" />
          <div className="flex items-center gap-3 p-3 justify-center">
            <p className="flex gap-1 items-center">
              <span className="lg:flex hidden text-sm">Click to Apply</span>{" "}
              <button className="px-3 animate-wobble">{`>>>`}</button>
            </p>
            <a href="https://forms.gle/t2759jS82SS8Ufs79" target="_blank">
              <button className="bg-cyan-700 hover:bg-cyan-800 p-3 rounded-md text-white">
                Apply
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Application;
