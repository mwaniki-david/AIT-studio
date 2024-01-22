import React from 'react';

import { CheckIcon, XCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Pricing = () => {
  return (
    <div id='Pricing' className='w-full my-5 mb-[70px] px-4'>
      <div className='w-full h-[500px] bg-red-800 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-3 '>

        <div className='text-center py-7 mt-[30px] uppercase text-black font-bold'>
          <h2 className='text-[35px] md:text-[65px] uppercase underline underline-offset-8'>Pricing</h2>
          <h3 className='text-[25px] md:text-[25px] '>The right price for your creativity.</h3>
          <p className='text-sm uppercase px-4'>
          All the packages are customizable on inquiry also any additional work can be handled .
          </p>
        </div>

        <div className='grid md:grid-cols-3 font-bold  '>
          <div className='bg-white text-black m-4 p-8 rounded-xl shadow-2xl relative max-h-[620px]'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Basic</span>
            <div>
              <p className='text-5xl font-bold py-4 flex'>$50<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-1xl py-4 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='text-1xl'>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />video recording.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />photography.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />podcast recording audio/video.</p>
                <p className='flex py-3'><XCircleIcon className='w-8 mr-5 text-red-600'  />video editting.</p>
                <p className='flex py-3'><XCircleIcon className='w-8 mr-5 text-red-600'  />thumbnail.</p>
                <Link href='/Checkout'><button className='w-full py-4 my-4 bg-red-800 rounded-md '>Get Started</button></Link>
                
            </div>
          </div>
          <div className='bg-white text-black m-4 p-8 rounded-xl shadow-2xl relative max-h-[620px]'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>standard</span>
            <div>
              <p className='text-5xl font-bold py-4 flex'>$80<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-1xl py-4 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='text-1xl'>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />video recording.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />photography.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />podcast recording audio/video.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />video editting.</p>
                <p className='flex py-3'><XCircleIcon className='w-8 mr-5 text-red-600'  />thumbnail.</p>
                <Link href='/Standard'><button className='w-full py-4 my-4 bg-red-800 rounded-md '>Get Started</button></Link>
                
            </div>
          </div>
          <div className='bg-white text-black m-4 p-8 rounded-xl shadow-2xl relative max-h-[620px]'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>premium</span>
            <div>
              <p className='text-5xl font-bold py-4 flex'>$150<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-1xl py-4 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='text-1xl'>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />video recording.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />photography.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />podcast recording audio/video.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />video editting.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />thumbnail.</p>
                <Link href='/Premium'><button className='w-full py-4 my-4 bg-red-800 rounded-md '>Get Started</button></Link>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
