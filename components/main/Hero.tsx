import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main className='w-screen h-auto relative bg-gray-100 border border-gray-300  overflow-y-visible  lg:py-10'>
      <div className='flex flex-col lg:flex-row w-full h-full items-center justify-center  md:pt-[80px] px-5 md:px-[35px] py-6 pb-[80px] md:pd-[30px]'>
        <div className=' px-[5px] mt-12 '>
          <h1 className='uppercase  text-[32px] max-w-[600px] font-bold'>your one-stop destination for all things socialmedia!!</h1>
          <h2 className='py-1 md:px-5 mb-7  max-w-[550px]  '>Welcome to AIT Studio, where creativity knows no bounds.We offer a range of services From captivating indoors and outdoors video recordings to stunning photography, seamless podcast recording, and expert scriptwriting.Book a session with us to unlock your true crative potential.</h2>
          <Link href='/#Pricing'>
          <button className='ml-8 uppercase  px-8 rounded-md border border-black hover:bg-red-800 text-md py-5 bg-red-700'>book a session</button>
          </Link>
        </div>
        <div className='px-6'>
          <Image
          src='/aitbackground.jpg'
          alt='aitbackground.jpg'
          width={750}
          height={900}
          className=' rounded-md mt-4 max-w-[670px] shadow-4xl  px-[100px] md:px-[1px]'
          />
        </div>
      </div>
    </main>
  )
}