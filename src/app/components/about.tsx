"use client";
import React, { useEffect, useRef } from "react";
import { CountUp } from "countup.js";
import { motion } from "framer-motion";
import Image from "next/image";
import Lets from "../../assets/lets.jpg";

const About: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLSpanElement>(null);
    const projectsRef = useRef<HTMLSpanElement>(null);
    const beneficiariesRef = useRef<HTMLSpanElement>(null);
    const impactedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const options = { duration: 3 };

        const startCounting = () => {
            if (experienceRef.current)
                new CountUp(experienceRef.current, new Date().getFullYear() - 2017, options).start();
            if (projectsRef.current)
                new CountUp(projectsRef.current, 10, options).start();
            if (beneficiariesRef.current)
                new CountUp(beneficiariesRef.current, 10000, options).start();
            if (impactedRef.current)
                new CountUp(impactedRef.current, 35000, options).start();
        };

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startCounting();
                    observer.disconnect();
                }
            });
        }, { threshold: 0.5 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    }, []);

    return (
        <div className="mx-4 mt-10 mb-6 px-7" ref={sectionRef}>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="my-8 grid lg:grid-cols-2 gap-4 p-6 border-4 border-cyan-700 rounded-lg shadow-lg lg:w-full mx-auto bg-white"
            >
                <div>
                    <h1 className="text-4xl font-bold text-cyan-700 mb-4">
                        Impact <span className="text-yellow-600">Metrics</span>
                    </h1>
                    <p className="flex justify-start text-left">
                        We aim to having a future where young people embrace their sexual and reproductive health with confidence, fostering a culture of openness and understanding, free from stigma and unplanned pregnancies.
                    </p>
                    <div className="pt-20 grid grid-cols-2 gap-10 text-lg font-semibold">
                        <div>
                            <p>
                                <span
                                    className="text-cyan-700 text-3xl font-bold"
                                    ref={experienceRef}
                                ></span>{" "}
                                Years of experience
                            </p>
                        </div>
                        <div>
                            <p>
                                <span
                                    className="text-yellow-600 text-3xl font-bold"
                                    ref={projectsRef}
                                ></span>{" "}
                                Projects implemented
                            </p>
                        </div>
                        <div>
                            <p>
                                <span
                                    className="text-yellow-600 text-3xl font-bold"
                                    ref={beneficiariesRef}
                                ></span>{" "}
                                Beneficiaries
                            </p>
                        </div>
                        <div>
                            <p>
                                <span
                                    className="text-cyan-700 text-3xl font-bold"
                                    ref={impactedRef}
                                ></span>{" "}
                                People that were impacted
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <Image
                        src={Lets}
                        height={450}
                        width={450}
                        alt="get involved"
                        className="w-full h-full block rounded-lg"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default About;



// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import logo from "../../assets/dukatazegold.jpeg";
// const About = () => {
//   const year = new Date().getFullYear();

//   return (
//     <>
//       <div className="mx-2 mt-6 mb-4">
//         <div className="my-5">
//           <h2 className="flex justify-center gap-4 items-center text-cyan-700 text-3xl sm:text-5xl font-semibold text-center">
//             <Image
//               src={logo}
//               width={50}
//               height={50}
//               className="lg:hidden "
//               alt="logo"
//             />
//             About Us
//           </h2>
//           <p className="text-center p-1 text-gray-400">
//             Would you like to know More about Dukataze?
//           </p>
//         </div>
//         <div className="grid lg:grid-cols-2 w-full h-fit">
//           <div className="lg:flex hidden md:py-48 md:px-2 max-lg:hidden">
//             <Image
//               alt="logo"
//               className="w-full "
//               style={{ objectFit: "fill" }}
//               src={logo}
//             />
//           </div>
//           <div className="flex lg:items-center text-white lg:justify-center bg-cyan-700">
//             <div className="p-5 text-white">
//               <h2 className="text-2xl sm:text-5xl font-bold text-center">
//                 Who We Are
//               </h2>
//               <p className="sm:p-4 lg:mx-10 md:mx-0 p-0 max-md:text-sm">
//                 Dukataze is a program of Saye company ltd that creates SRHR
//                 creative tools that are adolescents friendly
//               </p>
//               <h2 className="font-semibold">Our Mission:</h2>
//               <p className="sm:p-4 lg:mx-10 md:mx-0 p-0 max-md:text-sm">
//                 Empowering young people to fight teenage pregnancies and
//                 menstruation stigma through education, economic empowerment, and
//                 creative engagement.
//               </p>
//               <h2 className="font-semibold">Our Vision:</h2>
//               <p className="sm:p-4 lg:mx-10 md:mx-0 p-0 max-md:text-sm">
//                 A future where young people embrace their sexual and
//                 reproductive health with confidence, fostering a culture of
//                 openness and understanding, free from stigma and
//                 unplanned pregnancies.
//               </p>
//               <Link href="/about">
//                 <button className="flex text-center mt-2 mx-auto items-center bg-white hover:bg-gray-200 py-2 px-3 font-mono text-black">
//                   Learn more
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="my-6 text-center text-2xl flex flex-col gap-2 p-4 font-bold border-4 lg:w-1/2 mx-auto rounded-lg">
//           <p className="text-cyan-700  font-bold">{year - 2017}</p>
//           <p>Years of experience</p>
//           <p className="text-cyan-700 font-bold">8+</p>
//           <p>Projects implemented</p>
//           <p className="text-cyan-700 font-bold">7,100+</p>
//           <p>Beneficiaries</p>
//           <p className="text-cyan-700 font-bold">22k+</p>
//           <p>People that were impacted</p>
//         </div>
//       </div>
//     </>
//   );
// };
// export default About;
