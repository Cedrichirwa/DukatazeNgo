import React from "react";
import Image from "next/image";
import kotana from "../../assets/kotana.jpg";
import iriza from "../../assets/iriza.jpeg";
const Tools = () => {
  return (
    <>
      <div>
        <div className="relative flex md:items-center md:justify-center mb-6 md:h-screen sm:bg-fixed bg-center bg-cover iriza">
          <Image src={iriza} alt="" className="w-full h-full md:hidden block" />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/70 z-[2]" />
          <div className="p-5 text-white z-[2] absolute flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-4xl md:block hidden sm:text-6xl font-bold">
              Creative Tools
            </h2>
            <p className="p-4 text-xl sm:text-3xl ">Have fun with us</p>
          </div>
        </div>
        <div className="my-8 md:mx-8">
          <div className="text-center my-2">
            <h2 className="text-cyan-700 lg:text-5xl md:text-4xl text-2xl font-bold">
              Kotana Board Game
            </h2>
            <p className="text-center text-gray-400 p-1">
              Where laughter meets learning, and knowledge becomes an adventure!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 px-2 py-2 my-4 sm:h-[500px] relative">
            <div>
              <Image
                src={kotana}
                className="sm:h-[500px]"
                style={{ objectFit: "cover" }}
                alt="kotana"
              />
            </div>
            <div className="grid bg-cyan-600 items-center justify-center text-white">
              <p className="lg:mx-10 px-2 py-2">
                Introducing the KOTANA BOARD GAME , a groundbreaking approach to
                promoting open dialogues about sexual and reproductive health
                among adolescents. Designed to be both enlightening and
                enjoyable, Kotana board game strives to break down barriers and
                the stigma surrounding these crucial topics. By seamlessly
                integrating sexual reproductive health information (SRHR) in our
                every day discussions with an interesting gameplay experience,
                the game empowers young individuals to approach these
                discussions with confidence and curiosity.
                <p className="py-3">
                  Kotana emerges as a good srhr tool. With its innovative way of
                  educating and entertaining, it paves the way for informed
                  choices and healthier outcomes. By creating an atmosphere of
                  inclusivity and understanding, the game equips adolescents
                  with the knowledge they need to navigate the complexities of
                  their body changes to create a society that is more aware,
                  empowered and free menstrual stigma and teenage pregnancies.{" "}
                </p>
              </p>
            </div>
          </div>

          <div className="text-center sm:mt-12 mt-6">
            <h2 className="text-cyan-700 lg:text-5xl md:text-4xl text-2xl font-bold">
              IRIZA Comic Book
            </h2>
            <p className="text-center text-gray-400 p-1">
              Where laughter meets learning, and knowledge becomes an adventure!
            </p>
          </div>
          <div className="grid sm:grid-cols-2 px-2 py-2 my-4 sm:h-[500px]">
            <div>
              <Image
                src={iriza}
                className="sm:h-[500px]"
                style={{ objectFit: "cover" }}
                alt="iriza"
              />
            </div>
            <div className="flex bg-cyan-600 items-center justify-center text-white">
              <p className="lg:mx-10 px-2 py-2">
                IRIZA Comic book, This book offers sexual and reproductive
                health information to adolescents between 10 - 23 years old in
                fun, engaging and non-stigmatized way. This book is in two
                languages English and Kinyarwanda. This comic is only 20 pages
                long with all the trustworthy information about SRHR. This comic
                book was launched on 30th November 2021. So far 100 copies have
                been donated to different schools from rural areas so as to give
                access to anyone in need of the information it contains
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tools;
