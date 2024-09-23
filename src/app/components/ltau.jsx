import React from "react";
import Image from "next/image";
import ltau from "../../assets/ltau.jpeg";
import ltaub from "../../assets/ltaub.jpg";
const LtClub = () => {
  return (
    <>
      <div className="my-8">
        <div className="text-center my-2">
          <h2 className="text-cyan-700 lg:text-5xl md:text-4xl text-2xl font-semibold">
            LTAU (<span className="text-black">Let&apos;s Talk About Us</span> ){" "}
            <span className="text-black">clubs</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 px-2 py-2 my-4 sm:h-[500px]">
          <div>
            <Image
              src={ltau}
              className="h-[500px]"
              style={{ objectFit: "cover" }}
              alt="station"
            />
          </div>
          <div className="flex bg-cyan-600 items-center justify-center text-white">
            <p className="lg:mx-10 px-2 py-2">
              LTAU stands for let&apos;s talk about us. and we have 4 clubs ,2 in
              Kigali and 2 in The southern province. With 200 adolescents boys
              and girls, 50 in every school, the adolescents are between the age
              of 12 to 25 years,These clubs are going to engage the adolescents
              in educating and giving them a platform to learn more about sexual
              reproductive health and rights. We believe that LTAU members are
              going to be empowered and they will empower their fellows.
            </p>
          </div>
        </div>
        <Image
          src={ltaub}
          className="w-full h-screen my-2"
          style={{ objectFit: "cover" }}
          alt="LTAU club"
        />
      </div>
    </>
  );
};
export default LtClub;
