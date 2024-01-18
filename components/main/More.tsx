import React from 'react'
import Image from 'next/image'
const More = () => {
  return (
    <div id='More' className='w-screen h-auto mt-[90px] gap-5 flex flex-col items-center'>
        <div className='py-4 px-2 mt-[60px] items-center max-w-[450px] md:max-w-[950px]'>
            <h1 className='items-center justify-center pl-[70px] md:pl-[330px] uppercase text-[45px]'>more offers</h1>
            <h2 className='pl-[140px] md:pl-[395px] text-[30px] uppercase py-4'>nice prices</h2>
            <p className='text-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, cumque. Quo consectetur doloribus voluptatum voluptates! Consequatur suscipit, eos veniam vel necessitatibus consequuntur doloremque cumque mollitia molestiae quaerat fugit ipsa soluta!</p>
            </div> 
            <div className='mb-5 py-4'>
              <Image src="/landait.jpg" alt='landait' width={500} height={400}/>
            </div>
    </div>
  )
}

export default More
