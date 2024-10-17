"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bgtree from "../../assets/emp.JPG";

const Empower = () => {
    return (
        <div className="pt-16 px-10 flex lg:h-[550px]">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center border border-yellow-600 rounded-lg shadow-xl bg-gray-200"
            >
                <div className="relative w-full lg:w-1/2 h-64 lg:h-full overflow-hidden lg:rounded-lg ">
                    <Image
                        alt="Students"
                        src={bgtree}
                        layout="fill"
                        objectFit="cover"
                        className="sm:rounded-lg lg:rounded-r-full shadow-lg"
                    />
                </div>
                <div className="w-full lg:w-1/2 text-black p-5">
                    <h2 className="text-cyan-600 text-2xl sm:text-5xl font-bold text-center my-3">
                        Target Group
                    </h2>
                    <p className="text-center sm:text-left">
                        We target distinct organizations that have adolescents who are
                        between 13-21 years old. Both boys and girls are welcomed, and
                        the reason why we involve boys in our target group is to help
                        raise a generation of males who do not contribute to menstrual
                        stigma, gender-based violence, and teenage pregnancies.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Empower;




// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import bgtree from "../../assets/emp.JPG";

// const Empower = () => {
//   return (
//     <div className=" pt-10 px-6 flex lg:h-[450px]">
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="flex items-center border border-gray-200 rounded-lg shadow-lg bg-gray-50"
//       >
//         <div className="relative w-1/2 h-full overflow-hidden rounded-lg">
//           <Image
//             alt="Students"
//             src={bgtree}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-r-full"
//           />
//         </div>
//         <div className="w-1/2 text-black p-5">
//           <h2 className="text-2xl sm:text-5xl font-bold text-center my-3">
//             Target Group
//           </h2>
//           <p className="text-center sm:text-left">
//             We target distinct organizations that have adolescents who are
//             between 13-21 years old. Both boys and girls are welcomed, and the
//             reason why we involve boys in our target group is to help raise a
//             generation of males who do not contribute to menstrual stigma,
//             gender-based violence, and teenage pregnancies.
//           </p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Empower;

// import React from "react";
// import Image from "next/image";
// import bgtree from "../../assets/emp.JPG";
// const Empower = () => {
//   return (
//     <div className="my-2">
//       <div className="grid sm:grid-cols-2 w-full lg:h-[450px] ">
//         <div className="flex items-center justify-center border border-gray-200 bg-gray-50">
//           <div className="p-5 text-black ">
//             <h2 className="text-2xl sm:text-5xl font-bold text-center my-3">
//               Target Group
//             </h2>

//             <p className="items-center justify-center">
//               We target distinct organization that have adolescents who are
//               between 13- 21 years old , both boys and girls are welcomed and
//               the reason why we involve boys in our target group is one of the
//               ways of curing the future generation so as to rise the generation
//               of male who don’t contribute to menstrual stigma , Gender based
//               violence and the rise of teenage pregnancies.
//             </p>
//           </div>
//         </div>
//         <div className="flex">
//           <Image
//             alt="Students"
//             style={{ width: "100%", objectFit: "cover" }}
//             src={bgtree}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Empower;
