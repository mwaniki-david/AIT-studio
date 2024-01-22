import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col w-screen h-screen mt-[40px] py-7 px-8 items-center justify-center '>
        <div className='bg-white py-4 px-2 max-w-[1000px] text-center'>
            <div className='gap-6'>
            <h1 className='items-center justify-center  uppercase underline underline-offset-8 text-[35px] md:text-[65px] font-bold '>congratulations</h1>
            <h2 className=' text-[30px] uppercase py-2 font-bold'>@ait studios</h2>
            <p className=' py-2 max-w-[700px]'>You have successfully subscribed to the package,we will contact you in the next 1-2 hours so that we can customise your package in relation to your needs if you would like to inquire further you can contact us via tel:0700000011. Thank you for your support we truely appreciate.</p>
            </div>
            <div className=' gap-3 mt-8   '>
            <Link href='/'className=''>
          <button className='ml-8 uppercase  px-8 rounded-md border border-black text-bold hover:bg-red-800 text-md py-5 bg-red-700 '>back home</button>
          </Link>
            </div>
            </div> 
  
    </div>
  )
}

export default page
