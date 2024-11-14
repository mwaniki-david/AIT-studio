"use client"
import Hero from '@/components/main/Hero'
import React from 'react'
import Ourservices from '@/components/main/Ourservices'
import Pricings from '@/components/main/Pricings'
import Studios from '@/components/main/Studios'
import More from '@/components/main/More'

const page = () => {
  return (
    <main className='flex flex-col justify-center items-center h-full w-screen bg-white max-w-[-1]'>
      <Hero/>
      <Ourservices/>
      <Pricings/>
      <Studios/>
      <More/>
    <div className='flex flex-col'>
    </div>
    
  </main>
  )
}

export default page
