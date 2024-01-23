
import React from 'react'
import Image from 'next/image'
const ourservices = () => {
  return (
    <main id='Ourservices' className='w-screen h-auto relative bg-white md:pb-3 px-3'>
     <div className='flex flex-col mt-1 px-3 md:py-4 items-center  '>
     <div className='text-center py-7 md:mt-[10px] uppercase text-black'>
          <h2 className='text-[35px] md:text-[62px] uppercase underline underline-offset-8 font-bold'>our services</h2>
          <h3 className='text-[25px] md:text-[25px] '>enhance your possibilities.</h3>
        </div>
      <div className='flex md:flex-row flex-col lg:gap-[60px] md:mr-[60px]  '>
                <div className=' px-4 py-10 max-w-[700px]'>
                        <Image src="/studiopic2.jpg" alt="aitbackground " width={650} height={600} className=' rounded-xl shadow-2xl'/>
                </div>
                <div className='flex flex-col  gap-3 justify-center item-center'>
                  <ul className='px-4 py-10 text-1xl lg:text-[22px] md:gap-12 md:mb-[65px] font-semibold'>
                    <li className='py-3'>
                      1. video recording
                    </li>
                    <li className='py-3'>
                      2. photography
                    </li>
                    <li className='py-3'>
                      3. podcast recording audio/video
                    </li>
                    <li className='py-3'>
                      4. scriptwriting
                    </li>
                    <li className='py-3'>
                      5. social media management
                    </li>
                    <li className='py-3'>
                      6. creation of social media accounts
                    </li>
                  </ul>
                </div>
            </div>
     </div>
    </main>
  )
}

export default ourservices
