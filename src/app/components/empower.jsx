import React from "react";
import Image from "next/image";
import bgtree from "../../assets/emp.JPG";
const Empower = () => {
  return (
    <div className="my-2">
      <div className="grid sm:grid-cols-2 w-full lg:h-[450px] ">
        <div className="flex items-center justify-center border border-gray-200 bg-gray-50">
          <div className="p-5 text-black ">
            <h2 className="text-2xl sm:text-5xl font-bold text-center my-3">
              Target Group
            </h2>

            <p className="items-center justify-center">
              We target distinct organization that have adolescents who are
              between 13- 21 years old , both boys and girls are welcomed and
              the reason why we involve boys in our target group is one of the
              ways of curing the future generation so as to rise the generation
              of male who don’t contribute to menstrual stigma , Gender based
              violence and the rise of teenage pregnancies.
            </p>
          </div>
        </div>
        <div className="flex">
          <Image
            alt="Students"
            style={{ width: "100%", objectFit: "cover" }}
            src={bgtree}
          />
        </div>
      </div>
    </div>
  );
};
export default Empower;
