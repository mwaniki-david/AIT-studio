"use client"
import Hero from '@/components/main/Hero'
import React from 'react'
import Ourservices from '@/components/main/Ourservices'
import Pricings from '@/components/main/Pricings'
import Studios from '@/components/main/Studios'
import Footer from '@/components/main/footer'

const page = () => {
  return (
    <main className='h-full w-full'>
    <div className='flex flex-col'>
      <Hero/>
      <Ourservices/>
      <Pricings/>
      <Studios/>
      <Footer/>
    </div>
    
  </main>
  )
}

export default page
