// import React from "react";
// import Image from "next/image";
// import sta from "../../assets/sta.jpeg";
// import stb from "../../assets/stb.jpeg";
// import stc from "../../assets/stc.jpeg";
// import stt from "../../assets/stt.jpeg";
// import station from "../../assets/station.jpeg";
// const Station = () => {
//   return (
//     <>
//       <div className="relative flex md:items-center md:justify-center mb-6 md:h-screen sm:bg-fixed bg-center bg-cover station">
//         <Image src={station} alt="" className="w-full h-full md:hidden block" />
//         <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/70 z-[2]" />
//         <div className="p-5 text-white z-[2] absolute flex flex-col items-center justify-center w-full h-full">
//           <h2 className="text-4xl md:block hidden sm:text-6xl font-bold">
//             Station
//           </h2>
//           <p className="p-4 text-xl sm:text-3xl ">
//             A safe space for adolescents when it comes to SRHR
//           </p>
//         </div>
//       </div>
//       <div className="mt-8">
//         <div className="text-center my-2">
//           <h2 className="text-cyan-700 lg:text-5xl md:text-4xl text-2xl font-bold">
//             Kigali Menstruation Station
//           </h2>
//           <p className="text-center text-gray-400 p-1">
//             A safe space for adolescents to express them selves freely when it
//             comes to SRHR
//           </p>
//         </div>
//         <div className="grid sm:grid-cols-2 px-2 py-2 sm:h-[500px] mt-4">
//           <div className="sm:h-[500px] grid ">
//             <Image
//               src={stt}
//               className="h-full"
//               style={{ objectFit: "cover" }}
//               alt="station"
//             />
//           </div>
//           <div className="flex bg-cyan-600 items-center justify-center text-white">
//             <p className="lg:mx-10 px-2 py-2">
//               The Kigali menstruation station was launched on the 28th May 2022
//               <br /> <br />A Menstruation Station is a safe space for
//               menstruators where they can talk about SRHR related issues and
//               manage their basic menstrual hygiene needs. A{" "}
//               <span className="text-black italic">#periodproud</span> and{" "}
//               <span className="text-black italic">#periodsupportive</span>{" "}
//               creative space for the untold stories to be told. With the work of
//               the stations, we aim to improve the knowledge and skills about
//               sexual and reproductive health and rights, focusing on
//               menstruation. We create a positive and open climate around
//               menstrual health and enable a safe environment for people to
//               access both knowledge, menstruation material and sanitation
//               facilities.. Thelong-term effect that we want to see in societies
//               is to change negative attitudes around menstruation . This station
//               is located at Nyamirambo sector
//             </p>
//           </div>
//         </div>
//         <div className="grid md:grid-cols-3 mt-5 gap-3">
//           <div className="h-[400px]">
//             <Image
//               src={sta}
//               alt=""
//               className="h-full rounded-lg"
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <div className="h-[400px]">
//             <Image
//               src={stc}
//               alt=""
//               className="h-full rounded-lg"
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//           <div className="h-[400px]">
//             <Image
//               src={stb}
//               alt=""
//               className="h-full rounded-lg"
//               style={{ objectFit: "cover" }}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Station;



import React from "react";
import Image from "next/image";
import sta from "../../assets/sta.jpeg";
import stb from "../../assets/stb.jpeg";
import stc from "../../assets/stc.jpeg";
import stt from "../../assets/stt.jpeg";
import station from "../../assets/station.jpeg";

const Station = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative flex items-center justify-center h-screen mb-6 bg-fixed bg-center bg-cover station">
        <Image src={station} alt="Station Background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute flex flex-col items-center justify-center w-full h-full p-5 text-white z-10">
          <h2 className="text-4xl md:text-6xl font-bold">Station</h2>
          <p className="p-4 text-xl sm:text-3xl text-yellow-600">
            A safe space for adolescents when it comes to SRHR
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto my-8 px-4">
        <div className="text-center mb-6">
          <h2 className="text-cyan-700 lg:text-5xl md:text-4xl text-2xl font-bold">
            Kigali Menstruation Station
          </h2>
          <p className="text-gray-400 p-1">
            A safe space for adolescents to express themselves freely when it comes to SRHR
          </p>
        </div>

        {/* Main Content Layout */}
        <div className="grid gap-6 sm:grid-cols-2 mt-4">
          {/* Left Section with Image */}
          <div className="relative h-96 group">
            <Image
              src={stt}
              alt="Kigali Menstruation Station"
              className="object-cover w-full h-full rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
          
          {/* Right Section with Text */}
          <div className="flex items-center justify-center bg-cyan-600 text-white rounded-lg p-6 shadow-lg">
            <p className="text-lg">
              The Kigali menstruation station was launched on the 28th May 2022.
              A Menstruation Station is a safe space for menstruators where they can talk about SRHR related issues
              and manage their basic menstrual hygiene needs. A{" "}
              <span className="text-black italic">#periodproud</span> and{" "}
              <span className="text-black italic">#periodsupportive</span> creative space for the untold stories.
              We aim to improve the knowledge and skills about sexual and reproductive health and rights, focusing on menstruation.
            </p>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          { [sta, stc, stb].map((imgSrc, index) => (
            <div key={index} className="h-96 group overflow-hidden rounded-lg shadow-lg">
              <Image
                src={imgSrc}
                alt={`Station Image ${index + 1}`}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Station;
