import React from "react";
import Image from "next/image";
const ourservices = () => {
  return (
    <main
      id="Ourservices"
      className="w-screen  relative md:flex bg-gray-300 md:pb-3 mt-[-50px] items-center justify-center px-3 pb-8"
    >
      <div className="flex flex-col px-3 md:py-4 items-center justify-center">
        <div className="flex md:flex-row flex-col">

          <div className="flex flex-col  gap-3 justify-center item-center">
            <div className=" px-[5px] ">
              <h1 className="uppercase mt-4 text-[30px] md:text-[35px] lg:text-[42px] max-w-[600px] md:max-w-[700px] font-bold cursor: pointer">
                your one-stop destination for all things socialmedia!!
              </h1>
              <h2 className="py-3 md:px-5  text-[12px] md:text-[15px]  max-w-[500px] md:max-w-[660px]  ">
                Welcome to AIT Studio, where creativity knows no bounds.We offer
                a range of services From captivating indoors and outdoors video
                recordings to stunning photography, seamless podcast recording,
                and expert scriptwriting.Book a session with us to unlock your
                true crative potential.
              </h2>
            </div>
          </div>
          <div className=" px-4 py-5 md:py-10 max-w-[700px]">
            <Image
              src="/studiopic2.jpg"
              alt="aitbackground "
              width={950}
              height={850}
              className=" rounded-xl shadow-2xl mt-2 lg:mt-[50px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ourservices;
