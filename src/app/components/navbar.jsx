// "use client";
// import React from "react";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [color, setColor] = useState("transparent");
//   const [textColor, setTextColor] = useState("white");
//   const handleNav = () => {
//     setNav(!nav);
//   };
//   useEffect(() => {
//     const changeColor = () => {
//       if (window.scrollY >= 90) {
//         setColor("#ffffff");
//         setTextColor("#000000");
//       } else {
//         setColor("transparent");
//         setTextColor("#ffffff");
//       }
//     };
//     window.addEventListener("scroll", changeColor);
//   }, []);
//   return (
//     <>
//       <div
//         style={{ backgroundColor: `${color}` }}
//         className="fixed top-0 left-0 w-full ease-in duration-300 z-10"
//       >
//         <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
//           <Link href={"/"}>
//             <h1
//               style={{ color: `${textColor}` }}
//               className="whitespace-nowrap font-bold text-3xl"
//             >
//               Dukataze
//             </h1>
//           </Link>
//           <ul
//             style={{ color: `${textColor}` }}
//             className="hidden lg:flex gap-5 items-center"
//           >
//             <li className="p-4 hover:text-gray-500">
//               <Link href="/">Home</Link>
//             </li>
//             <li className="p-4 hover:text-gray-500 whitespace-nowrap">
//               <Link href="/about">About us</Link>
//             </li>
//             <li className="p-4 hover:text-gray-500">
//               <Link href="/program">Programs</Link>
//             </li>
//             <li className="p-4 hover:text-gray-500 whitespace-nowrap">
//               <Link href="/donate">Donate</Link>
//             </li>
//             <li className="p-4 hover:text-gray-500 whitespace-nowrap">
//               <Link href="/collaborate">Partnership & Recognition</Link>
//             </li>
//             <li className="p-4 hover:text-gray-500">
//               <Link href="/contact">Contact</Link>
//             </li>
//             <li>
//               <a
//                 href="https://kotana-boardgame.dukataze.rw/"
//                 target="_blank"
//                 className="p-3 rounded-2xl whitespace-nowrap bg-black text-white hover:bg-gray-300 hover:text-black font-medium"
//               >
//                 Play Kotana
//               </a>
//             </li>
//           </ul>
//           <div onClick={handleNav} className="block lg:hidden z-10">
//             {nav ? (
//               <AiOutlineClose size={20} style={{ color: "white" }} />
//             ) : (
//               <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
//             )}
//           </div>
//           <div
//             className={
//               nav
//                 ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300"
//                 : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300"
//             }
//           >
//             <ul className="whitespace-nowrap">
//               <li
//                 onClick={handleNav}
//                 className="p-2 text-2xl hover:text-gray-500"
//               >
//                 <Link href="/">Home</Link>
//               </li>
//               <li
//                 onClick={handleNav}
//                 className="p-2 text-2xl hover:text-gray-500 whitespace-nowrap"
//               >
//                 <Link href="/about">About us</Link>
//               </li>
//               <li
//                 onClick={handleNav}
//                 className="p-2 text-2xl hover:text-gray-500"
//               >
//                 <Link href="/program">Programs</Link>
//               </li>
//               <li
//                 onClick={handleNav}
//                 className="p-2 text-2xl hover:text-gray-500 whitespace-nowrap"
//               >
//                 <Link href="/donate">Donate</Link>
//               </li>
//               <li
//                 onClick={handleNav}
//                 className="p-2 text-2xl hover:text-gray-500"
//               >
//                 <Link href="/collaborate">
//                   Partnership <br />& Recognition
//                 </Link>
//               </li>
//               <li
//                 onClick={handleNav}
//                 className="p-2 text-2xl hover:text-gray-500"
//               >
//                 <Link href="/contact">Contact</Link>
//               </li>
//               <li className="my-5">
//                 <a
//                   href="https://kotana-boardgame.dukataze.rw/"
//                   target="_blank"
//                   className="p-3 text-2xl rounded-2xl whitespace-nowrap bg-white text-black hover:bg-gray-300 hover:text-black font-medium"
//                 >
//                   Play Kotana
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Navbar;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/dukatazegold.jpeg";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 left-0 w-full ease-in duration-300 z-10"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-2 text-white">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            alt="logo"
            width={50}
            height={50}
            className="rounded-lg"
            src={logo}
          />
          <h1 className="text-yellow-600 whitespace-nowrap font-bold text-3xl transform translate-x-[-100%] opacity-0 transition-transform duration-700 delay-500 ease-in animate-slide-in-left">
            Dukataze
          </h1>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden lg:flex gap-5 items-center"
        >
          <li className="p-4 relative transform translate-y-4 opacity-0 transition-transform duration-700 delay-500 ease-in animate-slide-in-top">
            <Link href="/" className="group hover:text-yellow-600 relative">
              Home
              {/* Custom Underline */}
              <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
            </Link>
          </li>

          <li className="p-4 relative transform translate-y-4 opacity-0 transition-transform duration-700 delay-500 ease-in animate-slide-in-top">
            <Link
              href="/about"
              className="group hover:text-yellow-600 relative"
            >
              {" "}
              {/* Custom Underline */}
              <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              About us
            </Link>
          </li>
          <li className="p-4 relative transform translate-y-4 opacity-0 transition-transform duration-700 delay-500 ease-in animate-slide-in-top">
            <Link
              href="/program"
              className="group hover:text-yellow-600 relative"
            >
              {" "}
              {/* Custom Underline */}
              <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              Programs
            </Link>
          </li>
          <li className="p-4 relative transform translate-y-4 opacity-0 transition-transform duration-700 delay-500 ease-in animate-slide-in-top">
            <Link
              href="/donate"
              className="group hover:text-yellow-600 relative"
            >
              {" "}
              {/* Custom Underline */}
              <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              Donate
            </Link>
          </li>
          <li className="p-4 relative transform translate-y-4 opacity-0 transition-transform duration-700 delay-500 ease-in animate-slide-in-top">
            <Link
              href="/collaborate"
              className="group hover:text-yellow-600 relative"
            >
              {" "}
              {/* Custom Underline */}
              <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              Partnership & Recognition
            </Link>
          </li>
          <li className="p-4 relative transform translate-y-4 opacity-0 transition-transform duration-700 delay-500 ease-in animate-slide-in-top">
            <Link
              href="/contact"
              className="group hover:text-yellow-600 relative"
            >
              {" "}
              {/* Custom Underline */}
              <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              Contact
            </Link>
          </li>
          <li>
            <Link href="https://kotana-boardgame.dukataze.rw/" target="_blank">
              <MagicButton title="Play Kotana" />
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block lg:hidden z-20 p-4">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        <div
          className={`lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-300 overflow-x-hidden ${nav ? "visible" : "invisible"}`}
        >
          <ul className="whitespace-nowrap">
            <li onClick={handleNav} className="p-2 text-2xl ">
              <Link href="/" className="group hover:text-yellow-600 relative">
                {" "}
                {/* Custom Underline */}
                <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                Home
              </Link>
            </li>
            <li onClick={handleNav} className="p-2 text-2xl ">
              <Link
                href="/about"
                className="group hover:text-yellow-600 relative"
              >
                About us {/* Custom Underline */}
                <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              </Link>
            </li>
            <li onClick={handleNav} className="p-2 text-2xl ">
              <Link
                href="/program"
                className="group hover:text-yellow-600 relative"
              >
                Programs {/* Custom Underline */}
                <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              </Link>
            </li>
            <li onClick={handleNav} className="p-2 text-2xl ">
              <Link
                href="/donate"
                className="group hover:text-yellow-600 relative"
              >
                Donate {/* Custom Underline */}
                <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              </Link>
            </li>
            <li onClick={handleNav} className="p-2 text-2xl ">
              <Link
                href="/collaborate"
                className="group hover:text-yellow-600 relative"
              >
                Partnership <br />& Recognition
                {/* Custom Underline */}
                <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              </Link>
            </li>
            <li onClick={handleNav} className="p-2 text-2xl ">
              <Link
                href="/contact"
                className="group hover:text-yellow-600 relative"
              >
                Contact {/* Custom Underline */}
                <span className="absolute left-0 bottom-[-1px] h-0.5 w-full bg-yellow-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
              </Link>
            </li>
            <li className="my-5">
              <Link
                href="https://kotana-boardgame.dukataze.rw/"
                target="_blank"
              >
                <MagicButton title="Play Kotana" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
