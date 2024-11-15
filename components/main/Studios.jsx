import React from "react";
import Image from "next/image";
const Studios = () => {
  return (
    <div
      id="Studio"
      className="flex flex-col h-auto  w-full  justify-center bg-gray-100 pb-[60px] items-center md:border border-gray-400 px-4 "
    >
      <div className="text-center md:py-7 mt-10 md:mt-[45px] uppercase  text-black font-bold">
        <h2 className="text-[25px] md:text-[50px] md:p-1 uppercase underline underline-offset-4">
           how to use the app
        </h2>
        <h3 className="text-[18px] md:text-[25px] ">
          The right price for your creativity.
        </h3>
        <p className="text-sm font-semibold lowercase  px-4">
          All the packages are customizable on inquiry also any additional work
          can be handled .
        </p>
      </div>
      <div className="grid justify-center items-center lg:gap-6 md:mb-12  px-4 ">
        <div className="flex md:flex-row flex-col  md:px-8  py-4 ">
        <div className=" block md:hidden md:py-2  py-4 max-w-[700px]">
            <Image
              src="/studiopic.jpg"
              alt="aitbackground "
              width={750}
              height={700}
              className=" rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col max-w-[400px] md:max-w-[500px] ml-3 md:ml-8 gap-3  md:pt-12 item-center justify-center">
            <h2 className=" text-[12px] ">
              Our Solo Studio offers a private haven for individual artists
              seeking solitude and concentration, equipped with state-of-the-art
              amenities to fuel your personal projects.{" "}
            </h2>
          </div>
          <div className=" block md:hidden md:py-2  py-4 max-w-[700px]">
            <Image
              src="/studiopic.jpg"
              alt="aitbackground "
              width={750}
              height={700}
              className=" rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col max-w-[400px] md:max-w-[500px] ml-3 md:ml-8 gap-3  md:pt-12 item-center justify-center">
            <h2 className=" text-[12px] ">
              Our Solo Studio offers a private haven for individual artists
              seeking solitude and concentration, equipped with state-of-the-art
              amenities to fuel your personal projects.{" "}
            </h2>
          </div>
          <div className=" hidden md:block md:py-2  py-4 max-w-[700px]">
            <Image
              src="/studiopic.jpg"
              alt="aitbackground "
              width={750}
              height={700}
              className=" rounded-xl shadow-2xl"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col  md:px-8  py-4 ">
          <div className="md:py-2  py-4 max-w-[700px]">
            <Image
              src="/studiopic.jpg"
              alt="aitbackground "
              width={750}
              height={700}
              className=" rounded-xl shadow-2xl"
            />
          </div>
          <div className="flex flex-col max-w-[400px] md:max-w-[500px] ml-3 md:ml-8 gap-3  md:pt-12 item-center justify-center">
            <h2 className=" text-[12px] ">
              Our Solo Studio offers a private haven for individual artists
              seeking solitude and concentration, equipped with state-of-the-art
              amenities to fuel your personal projects.{" "}
            </h2>
          </div>
        </div>
        <div className="hidden lg:flex  md:px-8  ">
          <div className="flex flex-col text-center max-w-[400px] md:max-w-[500px] ml-3 md:ml-8 gap-3item-center justify-center">
            <h2 className=" text-1xl ">
              Elevate your creativity further in our Group Studio, a spacious
              setting tailored for larger teams, workshops, and brainstorming
              sessions.{" "}
            </h2>
          </div>
          <div className="md:py-2  py-10 max-w-[700px]">
            <Image
              src="/servicesait8.jpg"
              alt="servicesait8 "
              width={750}
              height={700}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studios;
