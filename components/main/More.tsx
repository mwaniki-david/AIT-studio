import React from 'react'
import Image from 'next/image'
const More = () => {
  return (
    <div id='More' className='w-screen h-auto gap-5 flex flex-col items-center mb-[120px]'>
        <div className='py-4 px-2 mt-[30px] text-center max-w-[450px] md:max-w-[750px]'>
            <h1 className='items-center justify-center  uppercase text-[65px]'>more offers</h1>
            <h2 className=' text-[30px] uppercase'>@ nice prices</h2>
            <p className='text-bold'>Whether you're a solo artist, a small team, or a larger group, our array of specialized studios ensures that every creative endeavor finds its ideal space. Immerse yourself in an environment that supports your artistic journey and unlocks the full potential of your projects. here is some of our clients work</p>
            </div> 
            <div className='mb-5 py-4 px-9 md:px-5 max-w-[800px] items-center justify-center'>
              <Image src="/landait.jpg" alt='landait' width={500} height={400}/>
            </div>
    </div>
  )
}

export default More
