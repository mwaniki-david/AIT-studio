import React from 'react'
import { CheckIcon, XCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
const page = () => {
  return (
    <div className='flex w-screen h-auto mt-[40px] bg-red-800 py-7 px-8 items-center justify-center'>
        <div className=' bg-white text-black grid md:grid-cols-2 mt-[40px]  rounded-xl shadow-2xl py-5 px-6'>
          <div className='justify-between px-4 py-3 lg:ml-[120px] font-bold'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
            <div>
              <p className='text-4xl lg:text-5xl font-bold py-4 flex'>$80<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-1xl py-4 text-slate-500'>Custom packages available on inquiry.</p>
            <div className='text-1xl'>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />video recording.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />photography.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />podcast recording audio/video.</p>
                <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'  />video editting.</p>
                <p className='flex py-3'><XCircleIcon className='w-8 mr-5 text-red-600'  />thumbnail.</p>
                
            </div>
          </div>
          <div className=' flex flex-col items-center justify-center gap-8 lg:mr-[40px] md:border-l-2 border-red-800 px-7 '>
              <div className='justify-between py-5 gap-12'>
              <div className='flex lg:flex-row gap-1 items-center'>
              <p className=' text-3xl lg:text-5xl font-bold'>Total =</p>
              <p className='text-4xl lg:text-5xl font-bold py-4 flex'>$80/ </p>
              <p className='text-4xl lg:text-5xl font-bold'><span className='text-3xl font-bold'>ksh</span>12,722</p>
              </div>
              <p className='max-w-[500px]'>To activate this package you need to pay the total amount to this <span className='uppercase font-bold'>paybill no:424011 ACC no:AIT STUDIOS.</span>After paying the full amount click the confirm payment button so as to start the subscription NB:the subscription is only activated if the payment is done fully.</p>
              </div>
              <div>
              <Link href='/Final'className=''>
          <button className=' uppercase  px-8 rounded-md border border-black text-bold hover:bg-red-800 text-md py-5 bg-red-700'>confirm payment</button>
          </Link>
              </div>
            </div>
          </div>
    </div>
  )
}

export default page
