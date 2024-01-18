import React from 'react'
import Image from 'next/image'
const Studios = () => {
  return (
    <div id='Studio' className='w-screen h-auto relative  bg-gray-100 border border-gray-400'>
        <div className='flex md:flex-row flex-col mt-[25px] md:px-8 justify-between'>
            <div className='flex flex-col max-w-[400px] gap-6 md:ml-[20px]'>
                <h1 className='items-center uppercase ml-[450px] mt-[10px] text-[65px] text-bold '>studios</h1>
                <h2 className='mt-[80px] md:mt-[220px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                <h3 className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis reprehenderit exercitationem</h3>
            </div>
            <div>
                <Image src="/aitbackground.jpg" alt="aitbackground " width={950} height={700} 
                className='mt-[70px] md:mt-[140px]  py-3 px-10 ml-10'/>
            </div>
        </div>
        <div className='flex md:flex-row flex-col mt-[25px] px-4 md:px-8 justify-between'>
            <div>
                <Image src="/aitbackground.jpg" alt="aitbackground " width={950} height={700} 
                className='mt-[70px] md:mt-[140px]  py-3 px-10 ml-10'/>
            </div>
            <div className='flex flex-col max-w-[400px] gap-6 md:ml-[20px]'>
                <h2 className='mt-[80px] md:mt-[220px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                <h3 className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere reiciendis reprehenderit exercitationem</h3>
            </div>
        </div>
    </div>
  )
}

export default Studios
