import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-[65px] bg-white shadow-sm shadow-red-800 backdrop-blur-md z-50 px-[50px]'>
        <div className='h-full flex flex-row items-center justify-between '>
           <div className=' flex flex-row items-center h-full w-auto gap-3 ml-6'>
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
           <div className=' hidden md:flex flex-row md:gap-[50px] lg:gap-[10px]  w-auto h-full items-center px-1 pl-[120px] uppercase '>
           <ul className='hidden md:flex gap-[45px]  mt-4 px-5 py-3'>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/#Ourservices'>Ourservices</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/#Pricing'>Pricing</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/#Studio'>Studios</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b border-red-800'>
              <Link href='/#More'>More</Link>
            </li>
          </ul>
           </div>
           <Link href='/#Ourservices' className=' mr-[24px]'>
           <button className=' uppercase mr-5 px-3 py-4  rounded-md border border-white hover:bg-red-800 bg-red-700'>book a session</button>
           </Link>
          
        </div>
      
    </nav>
  )
}

export default Navbar
