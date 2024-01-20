
import React from 'react'
import Image from 'next/image'
const ourservices = () => {
  return (
    <main id='Ourservices' className='w-screen h-auto relative bg-white pb-3'>
     {/* <div className='hidden md:flex  w-[600px] h-[120px] bg-green-500 '>
     </div> */}
     <div className='flex flex-col mt-1 px-3 py-4 items-center '>
     <div className='text-center py-7 mt-[10px] uppercase text-black'>
          <h2 className='text-[35px] md:text-[65px] uppercase underline underline-offset-8'>our services</h2>
          <h3 className='text-[35px] md:text-[25px] '>enhance your possibilities.</h3>
        </div>
      <div className='flex md:flex-row flex-col lg:gap-[40px]  '>
                <div className='  py-10 max-w-[700px]'>
                        <Image src="/studiopic2.jpg" alt="aitbackground " width={650} height={600} className=' rounded-xl shadow-2xl'/>
                </div>
                <div className='flex flex-col  gap-3 justify-center item-center'>
                  <ul className='px-4 py-10 text-[20px] gap-12'>
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
