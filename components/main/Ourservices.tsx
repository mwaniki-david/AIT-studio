import React from "react";
import Image from "next/image";
import { MdArrowCircleRight } from "react-icons/md";
const ourservices = () => {
  return (
    <main
      id="Ourservices"
      className="w-screen  relative md:flex bg-gray-300 md:pb-3 mt-[-50px] items-center justify-center px-3 pb-[60px]"
    >
      <div className="flex flex-col px-3 md:py-4 items-center justify-center">
        <div className="flex md:flex-row flex-col">

          <div className="flex flex-col  gap-3 justify-center item-center">
            <div className=" px-[5px] ">
              <h1 className="uppercase mt-14 text-[30px] md:text-[35px] lg:text-[42px] max-w-[600px] md:max-w-[700px] font-bold cursor: pointer">
                your one-stop destination for all things socialmedia!!
              </h1>
              <h2 className=" md:px-5  text-[12px] md:text-[15px]  max-w-[500px] md:max-w-[660px]  py-3  px-2">
                Welcome to AIT Studio, where creativity knows no bounds.We offer
                a range of services From captivating indoors and outdoors video
                recordings to stunning photography, seamless podcast recording,
                and expert scriptwriting.Book a session with us to unlock your
                true crative potential.
              </h2>
              <h3 className='text-[13px] md:text-[25px] px-2 '>The right price for your creativity.</h3>
              <ul className="flex flex-row text-base md:text-1xl justify-start items-start px-4 py-2 gap-12 mt-2">
                <div className="font-bold text-sm">
                <p className="flex flex-row">
                <MdArrowCircleRight  className="mt-1 w-6"/>video recording
                </p>
                <p className="flex flex-row">
                <MdArrowCircleRight  className="mt-1 w-6"/>photography .
                </p>
                <p className="flex flex-row">
                <MdArrowCircleRight  className="mt-1 w-6"/>podcast recording.
                </p>
                <p className="flex flex-row">
                <MdArrowCircleRight  className="mt-1 w-6"/>video editting.
                </p>
                </div>
                <div className="font-bold text-sm ">
                <p className="flex flex-row">
                <MdArrowCircleRight  className="mt-1 w-6"/>thumbnail.
                </p>
                <p className="flex flex-row">
                <MdArrowCircleRight  className="mt-1 w-6"/>Campaign management
                </p>
                <p className="flex flex-row">
                <MdArrowCircleRight  className="mt-1 w-6"/>Content creation
                </p>
                <p className="flex flex-row">
                <MdArrowCircleRight  className="mt-1 w-6"/>Trend research
                </p>
                </div>
              </ul>
            </div>
          </div>
          <div className=" px-4 py-5 md:py-10 max-w-[700px]">
            <Image
              src="/studiopic5.jpg"
              alt="aitbackground "
              width={950}
              height={1050}
              className=" rounded-xl shadow-2xl mt-3 lg:mt-[50px]"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ourservices;
