import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main className='w-screen h-auto relative bg-white   '>
      <div className='flex flex-col lg:flex-row w-full h-full items-center justify-center  md:pt-[80px] lg:pt-[5px] px-5 md:px-[35px] py-6 pb-[80px] md:pd-[30px] '>
      <div className=" mt-6 px-4 py-10 max-w-[700px]">
            <Image
              src="/studiopic2.jpg"
              alt="aitbackground "
              width={950}
              height={850}
              className=" rounded-xl shadow-2xl lg:mt-[90px]"
            />
          </div>
        <div className=' px-[5px] mt-[-20px] lg:mt-[90px] '>
          <h1 className='uppercase  text-[22px] md:text-[35px] lg:text-[42px] max-w-[600px] md:max-w-[700px] lg:max-w-[850px] font-bold cursor: pointer'>your one-stop destination for all things socialmedia!!</h1>
          <h2 className='py-2 md:px-5  text-[12px] md:text-[15px]  max-w-[500px] md:max-w-[660px]  '>Welcome to AIT Studio, where creativity knows no bounds.We offer a range of services From captivating indoors and outdoors video recordings to stunning photography, seamless podcast recording, and expert scriptwriting.Book a session with us to unlock your true crative potential.</h2>
          <Link href='/#Pricing'>
          <button className='ml-2  uppercase  px-4  lg:px-6 lg:py-4 rounded-md border border-black hover:bg-red-800 py-2 bg-red-700 text-[12px] lg:text-[16px] text-bold'>book a session</button>
          </Link>
        </div>
      </div>
    </main>
  )
}