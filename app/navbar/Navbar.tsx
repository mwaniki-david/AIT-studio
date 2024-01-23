import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-screen h-flex  bg-white shadow-sm shadow-red-800 backdrop-blur-md z-50 '>
        <div className='h-full flex flex-row  justify-between lg:justify-center px-4 md:px-7 lg:px-1 lg:gap-[100px]  '>
           <div className=' flex flex-row  h-full w-auto'>
            <Link
            href='/'
            >
                <Image
                src='/aiplogo2.png'
                alt='aitlogo'
                width={63}
                height={70}
                className='w-full h-full '
                />
            </Link>
           </div>
           <div className=' hidden md:flex flex-row  w-auto h-full items-center uppercase '>
           <ul className='hidden md:flex py-3 gap-6 ml-[10px] mt-2 font-semibold'>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/#Ourservices'>Ourservices</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/#Pricing'>Pricing</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-spacing-8 border-red-800'>
              <Link href='/#Studio'>Studios</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/#More'>More</Link>
            </li>
          </ul>
           </div>
           <div className='mt-2'>
           <Link href='/#Pricing'>
           <button className=' uppercase  px-2 lg:px-3 py-3  rounded-md border border-black hover:bg-red-800 bg-red-700 text-sm lg:text-md'>book a session</button>
           </Link>
           </div>
          
        </div>
      
    </nav>
  )
}

export default Navbar
