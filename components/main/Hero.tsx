import Image from 'next/image'

export default function page() {
  return (
    <main className='w-screen h-auto relative bg-gray-100 border border-gray-300 mt-1 overflow-y-visible'>
      <div className='flex flex-col md:flex-row w-full h-full justify-between  md:pt-[120px] px-5 md:px-[25px] py-6 pb-[80px] md:pd-[100px]'>
        <div className=' max-w-[500px] px-[10px]  pt-[60px] md:pt-[100px] gap-12'>
          <h1 className='uppercase mt-[20px] px-5 text-[25px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
          <h2 className='mt-[20px] px-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit recusandae mollitia est cupiditate quod ut dignissimos dicta provident itaque necessitatibus esse voluptates sapiente accusantium aliquid, placeat dolore iste temporibus nulla!</h2>
          <button className='mt-[40px] uppercase ml-5 px-4 py-5 bg-red-800'>book a session</button>
        </div>
        <div className='  pt-7 mb:pt-[120px] py-4 px-2 '>
          <Image
          src='/aitbackground.jpg'
          alt='aitbackground.jpg'
          width={750}
          height={700}
          className=' border border-white rounded-sm'
          />
        </div>
      </div>
    </main>
  )
}