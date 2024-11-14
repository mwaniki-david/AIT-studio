import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (

    <nav className="bg-white  fixed w-full  z-20 top-0 start-0 shadow-sm shadow-red-800 backdrop-blur-md">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/#" className="flex items-center space-x-3 rtl:space-x-reverse">
      {/* <Image src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo"> */}
      <span className="md:px-5 lg:ml-12 self-center sm:text-1xl text-2xl font-bold whitespace-nowrap dark:text-red-700">DNMEstate</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:mr-12">
    <Link href='/#Pricing'>
    <button  type="button" className="text-white uppercase  px-2 py-2  rounded-md border border-black hover:bg-red-800 bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm  text-center dark:bg-red-700 dark:hover:bg-red-800 dark:focus:ring-red-800 md:px-9 ">Get started</button>
    </Link>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border  md:space-x-[70px] rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-black">
      <li>
        <a href="#" className="block py-2 px-3 text-black hover:text-red-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Home</a>
      </li>
      <li>
      <a href="/#Ourservices" className="block py-2 lg:px-1 text-black hover:text-red-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Ourservices</a>
      </li>
      <li>
      <a href="/#Pricing" className="block py-2 lg:px-1 text-black hover:text-red-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">Pricing</a>
      </li>
      <li>
      <a href="/#Studio" className="block py-2 lg:px-1 text-black hover:text-red-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">How to use</a>
      </li>
      <li>
      <a href="/#More" className="block py-2 lg:px-1 text-black hover:text-red-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-black" aria-current="page">contact us</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar


