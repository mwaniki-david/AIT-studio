import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <main className='w-screen h-auto relative bg-gray-100 border border-gray-300  overflow-y-visible lg:py-10'>
      <div className='flex flex-col lg:flex-row w-full h-full items-center justify-center  md:pt-[80px] px-5 md:px-[35px] py-6 pb-[80px] md:pd-[30px]'>
        <div className=' px-[5px] mt-12 '>
          <h1 className='uppercase  text-[30px] max-w-[600px]'>ait studios, your one-stop destination for all things multimedia!!</h1>
          <h2 className='py-1 px-2 mb-5  max-w-[480px] ml-4'>Welcome to AIT Studio, where creativity knows no bounds and every moment is an opportunity to capture the extraordinary.From captivating indoors and outdoors video recordings to stunning photography, seamless podcast recording, and expert scriptwriting..</h2>
          <Link href='/#Pricing'className=''>
          <button className='ml-8 uppercase  px-8 rounded-md border border-black text-bold hover:bg-red-800 text-md py-5 bg-red-700'>book a session</button>
          </Link>
        </div>
        <div className='px-2'>
          <Image
          src='/aitbackground.jpg'
          alt='aitbackground.jpg'
          width={750}
          height={900}
          className=' border border-white rounded-md mt-4 '
          />
        </div>
      </div>
    </main>
  )
}