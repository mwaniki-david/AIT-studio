import React from 'react';

import { CheckIcon, XCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Pricing = () => {
  return (
    <div id='Pricing' className='w-full  h-auto  bg-red-800 '>
      <div className='w-full h-[500px]  absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-3 '>

        <div className='text-center md:py-7  mt-16 md:mt-[15px] uppercase  text-black font-bold'>
          <h2 className='text-[35px] md:text-[65px] md:p-1 uppercase underline underline-offset-8'>Pricing</h2>
          <h3 className='text-[20px] md:text-[25px] px-3 '>The right price for your creativity.</h3>
          <p className='text-sm font-semibold uppercase px-4'>
          All the packages are customizable on inquiry also any additional work can be handled .
          </p>
        </div>

        <div className='grid md:hidden grid-cols-3 font-bold px-2 gap-2 mb-8 '>
          <div className='bg-white  mt-4 md:-mt-4  text-black  rounded-xl shadow-2xl relative max-h-[350px] max-w-[250px] py-3 px-2'>
            <span className='uppercase px-2 ml-1 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic</span>
            <div>
              <p className='text-1xl font-bold py-1 flex ml-2'>$50<span className='text-base text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className=' flex justify-center items-center text-xs  px-2 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='flex flex-col text-base  justify-center items-center'>
                <p className='flex  text-sm'><CheckIcon className='w-4 text-green-600'  />video recording.</p>
                <p className='flex text-sm'><CheckIcon className='w-4 text-green-600'  />photography.</p>
                <p className='flex text-sm'><CheckIcon className='w-4 text-green-600'  />podcast recording.</p>
                <p className='flex text-sm'><XCircleIcon className='w-4 text-red-600'  />video editting.</p>
                <p className='flex text-sm'><XCircleIcon className='w-4 text-red-600'  />thumbnail.</p>
                <Link href='/Checkout' className='flex py-3 '><button className=' w-auto px-2  py-2 bg-red-800 rounded-md text-white text-sm '>Get Started</button></Link>
                
            </div>
          </div>
          <div className='bg-white  mt-4 md:-mt-4  text-black  rounded-xl shadow-2xl relative max-h-[350px] max-w-[250px] py-3 px-2'>
            <span className='uppercase px-2 ml-1 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic</span>
            <div>
              <p className='text-1xl font-bold py-1 flex ml-2'>$50<span className='text-base text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className=' flex justify-center items-center text-xs  px-2 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='flex flex-col text-base  justify-center items-center'>
                <p className='flex  text-sm'><CheckIcon className='w-4 text-green-600'  />video recording.</p>
                <p className='flex text-sm'><CheckIcon className='w-4 text-green-600'  />photography.</p>
                <p className='flex text-sm'><CheckIcon className='w-4 text-green-600'  />podcast recording.</p>
                <p className='flex text-sm'><XCircleIcon className='w-4 text-red-600'  />video editting.</p>
                <p className='flex text-sm'><XCircleIcon className='w-4 text-red-600'  />thumbnail.</p>
                <Link href='/Checkout' className='flex py-3 '><button className=' w-auto px-2  py-2 bg-red-800 rounded-md text-white text-sm '>Get Started</button></Link>
                
            </div>
          </div>
          <div className='bg-white  mt-4 md:-mt-4  text-black  rounded-xl shadow-2xl relative max-h-[350px] max-w-[250px] py-3 px-2'>
            <span className='uppercase px-2 ml-1 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic</span>
            <div>
              <p className='text-1xl font-bold py-1 flex ml-2'>$50<span className='text-base text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className=' flex justify-center items-center text-xs  px-2 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='flex flex-col text-base  justify-center items-center'>
                <p className='flex  text-sm'><CheckIcon className='w-4 text-green-600'  />video recording.</p>
                <p className='flex text-sm'><CheckIcon className='w-4 text-green-600'  />photography.</p>
                <p className='flex text-sm'><CheckIcon className='w-4 text-green-600'  />podcast recording.</p>
                <p className='flex text-sm'><XCircleIcon className='w-4 text-red-600'  />video editting.</p>
                <p className='flex text-sm'><XCircleIcon className='w-4 text-red-600'  />thumbnail.</p>
                <Link href='/Checkout' className='flex py-3 '><button className=' w-auto px-2  py-2 bg-red-800 rounded-md text-white text-sm '>Get Started</button></Link>
                
            </div>
          </div>
        </div>
        <div className='hidden md:grid md:grid-cols-3 font-bold  '>
          <div className='bg-white ml-[80px] mt-4 md:-mt-4  text-black  rounded-xl shadow-2xl relative max-h-[370px] max-w-[250px] py-4 px-2'>
            <span className='uppercase px-5 ml-7 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic</span>
            <div>
              <p className='text-2xl font-bold py-1 flex ml-7'>$50<span className='text-base text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className=' flex justify-center items-center text-base  px-2 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='flex flex-col text-base md:text-1xl justify-center items-center'>
                <p className='flex '><CheckIcon className='w-6 text-green-600'  />video recording.</p>
                <p className='flex'><CheckIcon className='w-6 text-green-600'  />photography.</p>
                <p className='flex'><CheckIcon className='w-6 text-green-600'  />podcast recording.</p>
                <p className='flex'><XCircleIcon className='w-6 text-red-600'  />video editting.</p>
                <p className='flex'><XCircleIcon className='w-6 text-red-600'  />thumbnail.</p>
                <Link href='/Checkout' className='flex py-2 '><button className=' w-auto px-5 py-2 mt-1  bg-red-800 rounded-md text-white '>Get Started</button></Link>
                
            </div>
          </div>
          <div className='bg-white ml-[80px] mt-4 md:-mt-4  text-black  rounded-xl shadow-2xl relative max-h-[370px] max-w-[250px] py-4 px-2'>
            <span className='uppercase px-5 ml-7 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic</span>
            <div>
              <p className='text-2xl font-bold py-1 flex ml-7'>$50<span className='text-base text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className=' flex justify-center items-center text-base  px-2 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='flex flex-col text-base md:text-1xl justify-center items-center'>
                <p className='flex '><CheckIcon className='w-8 text-green-600'  />video recording.</p>
                <p className='flex'><CheckIcon className='w-8 text-green-600'  />photography.</p>
                <p className='flex'><CheckIcon className='w-8 text-green-600'  />podcast recording.</p>
                <p className='flex'><XCircleIcon className='w-8 text-red-600'  />video editting.</p>
                <p className='flex'><XCircleIcon className='w-8 text-red-600'  />thumbnail.</p>
                <Link href='/Checkout' className='flex py-2 '><button className=' w-auto px-5 py-2 mt-1  bg-red-800 rounded-md text-white '>Get Started</button></Link>
                
            </div>
          </div>
          <div className='bg-white ml-[80px] mt-4 md:-mt-4  text-black  rounded-xl shadow-2xl relative max-h-[370px] max-w-[250px] py-4 px-2'>
            <span className='uppercase px-5 ml-7 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic</span>
            <div>
              <p className='text-2xl font-bold py-1 flex ml-7'>$50<span className='text-base text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className=' flex justify-center items-center text-base  px-2 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='flex flex-col text-base md:text-1xl justify-center items-center'>
                <p className='flex '><CheckIcon className='w-8 text-green-600'  />video recording.</p>
                <p className='flex'><CheckIcon className='w-8 text-green-600'  />photography.</p>
                <p className='flex'><CheckIcon className='w-8 text-green-600'  />podcast recording.</p>
                <p className='flex'><XCircleIcon className='w-8 text-red-600'  />video editting.</p>
                <p className='flex'><XCircleIcon className='w-8 text-red-600'  />thumbnail.</p>
                <Link href='/Checkout' className='flex py-2 '><button className=' w-auto px-5 py-2 mt-1  bg-red-800 rounded-md text-white '>Get Started</button></Link>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
