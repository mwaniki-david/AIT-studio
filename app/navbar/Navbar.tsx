import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full h-[65px] bg-white shadow-md shadow-black backdrop-blur-md z-50 px-10'>
        <div className='h-full flex flex-row items-center justify-between gap-7'>
           <div className=' flex flex-row items-center h-full w-auto gap-3'>
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
            <h1 className='text-bold uppercase md:hidden  lg:block'>studio</h1> 
           </div>
           <div className=' hidden md:flex flex-row md:gap-[50px] lg:gap-[100px] h-full items-center px-5 uppercase '>
            <a href='/ourservices'>book a session</a>
            <a href='/about'>pricing</a>
            <a href='/'>studio</a>
            <a href='/'>more</a>
           </div>
           <button className='mr-3 h-full px-3  uppercase'>
            book a session
           </button>
        </div>
      
    </nav>
  )
}

export default Navbar
