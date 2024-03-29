
import React from 'react'
import Image from 'next/image'
const Studios = () => {
  return (
    <div id='Studio' className='flex flex-col h-auto  w-full  justify-center bg-gray-100 items-center md:border border-gray-400 px-4'>
        <div className='justify-center item-center'>
        <h1 className=' uppercase md:mt-[45px] mt-[5px] text-[35px] md:text-[65px] underline underline-offset-8 font-bold'>studios</h1>
        </div>
        <div className='grid justify-center items-center gap-1 lg:gap-6 md:mb-12 mb-5 px-4 '>
            <div className='flex md:flex-row flex-col  md:px-8  py-12 '>
                <div className='flex flex-col max-w-[400px] md:max-w-[500px] ml-3 md:ml-8 gap-3  md:pt-12 item-center justify-center'>
                <h2 className=' text-1xl '>Our Solo Studio offers a private haven for individual artists seeking solitude and concentration, equipped with state-of-the-art amenities to fuel your personal projects.  </h2>

                </div>
                <div className='md:py-2  py-10 max-w-[700px]'>
                <Image src="/studiopic.jpg" alt="aitbackground " width={750} height={700} 
                className=' rounded-xl shadow-2xl'/>
                </div>
            </div>
            <div className='flex md:flex-row flex-col md:px-8 '>
                <div className=' md:px-2 py-10 max-w-[700px]'>
                        <Image src="/servicesait4.jpg" alt="servicesait4.jpg" width={650} height={700} className=' rounded-xl shadow-2xl'/>
                </div>
                <div className='flex flex-col max-w-[400px] md:max-w-[500px] gap-3 justify-center item-center ml-3 md:ml-12 '>
                <h2 className=' text-1xl '>For collaborative endeavors, our Team Studio provides a dynamic environment where small groups can seamlessly work together, fostering synergy and innovation. </h2>
                </div>
            </div>
            <div className='hidden lg:flex  md:px-8  '>
                <div className='flex flex-col text-center max-w-[400px] md:max-w-[500px] ml-3 md:ml-8 gap-3item-center justify-center'>
                <h2 className=' text-1xl '>Elevate your creativity further in our Group Studio, a spacious setting tailored for larger teams, workshops, and brainstorming sessions. </h2>
                </div>
                <div className='md:py-2  py-10 max-w-[700px]'>
                <Image src="/servicesait8.jpg" alt="servicesait8 " width={750} height={700} 
                className='rounded-xl shadow-2xl'/>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Studios
