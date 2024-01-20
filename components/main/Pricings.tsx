import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';
import Link from 'next/link';

const Pricing = () => {
  return (
    <div id='Pricing' className='w-full my-5 mb-[70px]'>
      <div className='w-full h-[500px] bg-red-800 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-3 '>

        <div className='text-center py-7 mt-[30px] uppercase text-black'>
          <h2 className='text-[35px] md:text-[65px] uppercase underline underline-offset-8'>Pricing</h2>
          <h3 className='text-[35px] md:text-[25px] '>The right price for your creativity.</h3>
          <p className='text-sm uppercase px-4'>
          All the packages are customizable on inquiry also any additional work can be handled .
          </p>
        </div>

        <div className='grid md:grid-cols-3  '>
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
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />video editting.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />thumbnail.</p>
                <Link href='/'><button className='w-full py-4 my-4 bg-red-800 rounded-md '>Get Started</button></Link>
                
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
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />thumbnail.</p>
                <Link href='/'><button className='w-full py-4 my-4 bg-red-800 rounded-md '>Get Started</button></Link>
                
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
                <Link href='/'><button className='w-full py-4 my-4 bg-red-800 rounded-md '>Get Started</button></Link>
                
            </div>
          </div>
          {/* <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
            <div>
              <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
// import React from 'react'
// import Image from 'next/image'
// const Pricings = () => {
//   return (
//     <main id='Pricing' className='w-screen h-auto relative mt-[20px] mb-14  '>
//     {/* <div className='hidden md:flex  w-[600px] h-[120px] bg-green-500 '>
//     </div> */}
//     <div className='flex flex-col mt-6 px-3 py-1 items-center gap-2 '>
//      <div className='text-black text-[25px] md:text-[44px] py-2 uppercase items-center '>
//        <h1 className=' mt-[65px]'>our services</h1>
//        {/* <h2 className='ml-[75px] md:ml-[210px]'>and best plans</h2> */}
//      </div>
//      <div className='flex flex-col w-full md:w-[90%] gap-3 py-12 px-6 md:px-10'>
//        <div className='bg-purple-100 flex flex-row border rounded-lg '>
//          <div className='bg-purple-500 px-2 lg:px-[120px] py-6 flex flex-row border border-white rounded-md gap-4  items-center'>
//          <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' rounded-md'/>
//          {/* <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' hidden lg:block rounded-md'/> */}
//          </div>
//          <div className='flex flex-col'>
//          <h1 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 mr-[5px] md:ml-[100px] text-[25px] md:text-[35px]'>Lorem, ipsum dolor sit amet consectetur </h1>
//          <h2 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 py-4 mr-[5px] md:ml-[100px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti fugiat.</h2>
//          </div>
//        </div>
//        <div className='bg-purple-100 flex flex-row border rounded-lg '>
//          <div className='bg-purple-500 px-2 lg:px-[120px] py-6 flex flex-row border border-white rounded-md gap-4  items-center'>
//          <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' rounded-md'/>
//          {/* <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' hidden lg:block rounded-md'/> */}
//          </div>
//          <div className='flex flex-col'>
//          <h1 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 mr-[5px] md:ml-[100px] text-[25px] md:text-[35px]'>Lorem, ipsum dolor sit amet consectetur </h1>
//          <h2 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 py-4 mr-[5px] md:ml-[100px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti fugiat.</h2>
//          </div>
//        </div>
//        <div className='bg-purple-100 flex flex-row border rounded-lg '>
//          <div className='bg-purple-500 px-2 lg:px-[120px] py-6 flex flex-row border border-white rounded-md gap-4  items-center'>
//          <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' rounded-md'/>
//          {/* <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' hidden lg:block rounded-md'/> */}
//          </div>
//          <div className='flex flex-col'>
//          <h1 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 mr-[5px] md:ml-[100px] text-[25px] md:text-[35px]'>Lorem, ipsum dolor sit amet consectetur </h1>
//          <h2 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 py-4 mr-[5px] md:ml-[100px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti fugiat.</h2>
//          </div>
//        </div>
//      </div>
//     </div>
//    </main>
//   )
// }

// export default Pricings
