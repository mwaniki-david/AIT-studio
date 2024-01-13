import React from 'react'
import Image from 'next/image'
const Pricings = () => {
  return (
    <main className='w-screen h-auto relative  '>
    {/* <div className='hidden md:flex  w-[600px] h-[120px] bg-green-500 '>
    </div> */}
    <div className='flex flex-col mt-6 px-3 py-1 items-center '>
     <div className='text-black text-[25px] md:text-[44px] py-2 uppercase items-center gap-3'>
       <h1 className='md:ml-[230px] ml-[95px]'>our services</h1>
       <h2 className='ml-[75px] md:ml-[210px]'>and best plans</h2>
     </div>
     <div className='flex flex-col w-full md:w-[90%] gap-3 py-12 px-6 md:px-10'>
       <div className='bg-purple-100 flex flex-row border rounded-lg '>
         <div className='bg-purple-500 px-2 lg:px-[120px] py-6 flex flex-row border border-white rounded-md gap-4  items-center'>
         <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' rounded-md'/>
         {/* <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' hidden lg:block rounded-md'/> */}
         </div>
         <div className='flex flex-col'>
         <h1 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 mr-[5px] md:ml-[100px] text-[25px] md:text-[35px]'>Lorem, ipsum dolor sit amet consectetur </h1>
         <h2 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 py-4 mr-[5px] md:ml-[100px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti fugiat.</h2>
         </div>
       </div>
       <div className='bg-purple-100 flex flex-row border rounded-lg '>
         <div className='bg-purple-500 px-2 lg:px-[120px] py-6 flex flex-row border border-white rounded-md gap-4  items-center'>
         <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' rounded-md'/>
         {/* <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' hidden lg:block rounded-md'/> */}
         </div>
         <div className='flex flex-col'>
         <h1 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 mr-[5px] md:ml-[100px] text-[25px] md:text-[35px]'>Lorem, ipsum dolor sit amet consectetur </h1>
         <h2 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 py-4 mr-[5px] md:ml-[100px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti fugiat.</h2>
         </div>
       </div>
       <div className='bg-purple-100 flex flex-row border rounded-lg '>
         <div className='bg-purple-500 px-2 lg:px-[120px] py-6 flex flex-row border border-white rounded-md gap-4  items-center'>
         <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' rounded-md'/>
         {/* <Image src="/servicesait3.jpg" alt='servicesait3' width={200} height={600} className=' hidden lg:block rounded-md'/> */}
         </div>
         <div className='flex flex-col'>
         <h1 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 mr-[5px] md:ml-[100px] text-[25px] md:text-[35px]'>Lorem, ipsum dolor sit amet consectetur </h1>
         <h2 className='max-w-[450px] mt-[10px] mb:mt-[95px] px-2 py-4 mr-[5px] md:ml-[100px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti deleniti fugiat.</h2>
         </div>
       </div>
     </div>
    </div>
   </main>
  )
}

export default Pricings
