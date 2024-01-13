import React from 'react'
import Image from 'next/image'
const ourservices = () => {
  return (
    <main className='w-screen h-auto relative bg-white '>
     {/* <div className='hidden md:flex  w-[600px] h-[120px] bg-green-500 '>
     </div> */}
     <div className='flex flex-col mt-6 px-3 py-1 items-center '>
      <div className='text-black text-[25px] md:text-[44px] py-2 uppercase items-center gap-3'>
        <h1 className='md:ml-[230px] ml-[95px]'>our services</h1>
        <h2 className='ml-[75px] md:ml-[210px]'>and best plans</h2>
        <p className='md:max-w-[850px] max-w-[400px] text-sm mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus suscipit nulla obcaecati aspernatur porro? Molestiae dignissimos quam quia accusamus natus sit exercitationem nam reiciendis tenetur, assumenda animi id sapiente vero?</p>

      </div>
      <div className='flex flex-row k\ gap-6 py-12 px-6 md:px-10 '>
        <div>
          <Image src="/servicesait1.jpg" alt='servicesait1' width={400} height={600}/>
        </div>
        <div>
          <Image src="/servicesait7.jpg" alt='servicesait7' width={400} height={600}/>
        </div>
        <div>
          <Image src="/servicesait5.jpg" alt='servicesait5' width={400} height={600}/>
        </div>
      </div>
     </div>
    </main>
  )
}

export default ourservices
