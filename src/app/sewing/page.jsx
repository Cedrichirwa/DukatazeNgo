import React from "react";
import Image from "next/image";
import sewing from "../../assets/sewing.jpeg";
const Sewing = () => {
  return (
    <>
      <div>
        <div className="relative flex md:items-center md:justify-center mb-6 md:h-screen sm:bg-fixed bg-center bg-cover sew">
          <Image
            src={sewing}
            alt=""
            className="w-full h-full md:hidden block"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-black/70 z-[2]" />
          <div className="p-5 text-white z-[2] absolute flex flex-col items-center justify-center w-full h-full">
            <h2 className="text-4xl md:block hidden sm:text-6xl font-bold">
              Incubation center
            </h2>
            <p className="p-4 text-xl sm:text-3xl ">
              We support those who need us most
            </p>
          </div>
        </div>
        <div className="text-center my-2">
          <h2 className="text-cyan-700 lg:text-5xl md:text-4xl text-2xl font-bold">
            Sewing incubation center
          </h2>
          <p className="text-center text-gray-400 p-1">
            The extraordinary place not only teaches sewing skills to teenage
            mothers but also empowers them to create a better life for
            themselves and their children.
          </p>
        </div>
        <div className="sm:px-8 px-2 my-3">
          <div>
            <h2 className="font-semibold  py-3">A Platform for Growth:</h2>
            <p className="bg-gray-50 px-2 py-2 rounded-md">
              The Program acts as a vital platform for teenage mothers to
              transform their newly acquired sewing skills into tangible
              opportunities. By participating in the program, these young women
              are encouraged to refine their craftsmanship and develop a keen
              eye for design. They are given the chance to showcase their unique
              creations and gain recognition for their talent. The program
              serves as a springboard, propelling them towards personal and
              professional growth.
            </p>
          </div>
          <div>
            <h2 className="font-semibold  py-3">Building a Brand:</h2>
            <p className="bg-gray-50 px-2 py-2 rounded-md">
              As part of the Dukataze Program, the teenage mothers are guided
              through the process of building their own brand. They learn the
              intricacies of marketing, branding, and business management.
              Through workshops and mentorship, they develop the skills
              necessary to establish their own fashion labels and effectively
              promote their products. This empowers them to take control of
              their entrepreneurial journeys and carve a niche for themselves in
              the industry.
            </p>
          </div>
          <div>
            <h2 className="font-semibold  py-3">
              Collaboration and Networking:
            </h2>
            <p className="bg-gray-50 px-2 py-2 rounded-md">
              The Program fosters collaboration and networking opportunities for
              the young mothers. They are encouraged to connect with local
              businesses, fashion designers, and industry professionals.
              Collaborations and partnerships not only expose them to a wider
              audience but also provide invaluable mentorship and guidance.
              Through these networks, they gain access to markets, resources,
              and a support system that nurtures their dreams.
            </p>
          </div>
          <div>
            <h2 className="font-semibold  py-3">Financial Independence:</h2>
            <p className="bg-gray-50 px-2 py-2 rounded-md">
              The core objective of this Program is to create sustainable income
              opportunities for teenage mothers. By producing and selling their
              own designs, they become self-reliant and gain the ability to
              provide for their children. The program equips them with the
              necessary skills to secure employment in the fashion industry or
              even start their own sewing businesses. This newfound financial
              independence empowers them to shape a brighter future for
              themselves and their families.
            </p>
          </div>
          <div>
            <h2 className="font-semibold  py-3">Empowerment and Confidence:</h2>
            <p className="bg-gray-50 px-2 py-2 rounded-md">
              Beyond the economic aspects, the Sewing incubation center focuses
              on empowering the young mothers and boosting their
              self-confidence. Through mentorship, workshops on personal
              development, and support systems, they are equipped with the
              necessary tools to overcome challenges and believe in their own
              abilities. This instills a sense of resilience and determination
              that transcends their sewing skills, empowering them to take
              charge of their lives and strive for greatness.
            </p>
          </div>
          <div>
            <h2 className="font-semibold  py-3">Conclusion:</h2>
            <p className="bg-gray-50 px-2 py-2 rounded-md">
              The Sewing Incubation Center stands as a shining example of how
              education, skill-building, and entrepreneurship can transform the
              lives of teenage mothers. By providing them with a platform to
              showcase their talents, encouraging collaboration and networking,
              and fostering financial independence, the program paves the way
              for a brighter future. As we witness the incredible growth and
              empowerment of these young women, let us celebrate the power of
              programs like Dukataze in breaking the cycle of poverty and
              creating a more inclusive and equitable society. Together, we can
              stitch together a world where every young mother has the
              opportunity to thrive and succeed.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sewing;
