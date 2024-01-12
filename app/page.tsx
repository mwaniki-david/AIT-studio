"use client"
import Hero from '@/components/main/Hero'
import React from 'react'
import Ourservices from '@/components/main/Ourservices'

const page = () => {
  return (
    <main className='h-full w-full'>
    <div className='flex flex-col gap-20'>
      <Hero/>
      <Ourservices/>
    </div>
    
  </main>
  )
}

export default page
