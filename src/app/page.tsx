"use client"

import Image from 'next/image'
import { BsMouse } from 'react-icons/bs'
import { PowerGlitch } from 'powerglitch'
import { useEffect } from 'react'

export default function Home() {

  return (
    <main>
      <section className="flex h-screen flex-col items-center justify-center p-24 text-center">
        <div className="absolute bg-mobile md:bg-desktop bg-cover h-screen w-full -z-10" />
        <h1 className="text-white z-10 drop-shadow-2xl whitespace-nowrap" style={{ fontSize: "16vw", lineHeight: 1 }}>
          Death Collection
        </h1>
        <div className="absolute h-screen w-screen z-20 bg-mobile-model md:bg-desktop-model bg-cover" />
        <div className="absolute bottom-10 z-30 flex flex-col items-center">
          <BsMouse className="text-4xl text-white" />
          <p className="text-white">Scroll down</p>
        </div>
      </section>
      <section className="flex flex-col items-center h-screen bg-white">
        <h1 className="text-4xl uppercase mt-16">New arrivals</h1>
        <div className="flex flex-row flex-wrap justify-center gap-8 mt-16">
          <div className="flex flex-col items-center">
            <Image src="/images/1.png" width={300} height={300} />
            <p className="text-2xl mt-4">Black T-Shirt</p>

            <p className="text-2xl mt-4">$ 20.00</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/2.png" width={300} height={300} />
            <p className="text-2xl mt-4">Black T-Shirt</p>

            <p className="text-2xl mt-4">$ 20.00</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/3.png" width={300} height={300} />
            <p className="text-2xl mt-4">Black T-Shirt</p>
            
            <p className="text-2xl mt-4">$ 20.00</p>
          </div>
          <div className="flex-col items-center hidden md:flex">
            <Image src="/images/4.png" width={300} height={300} />
            <p className="text-2xl mt-4">Black T-Shirt</p>
            
            <p className="text-2xl mt-4">$ 20.00</p>
          </div>
          <div className="flex-col items-center hidden md:flex">
            <Image src="/images/5.png" width={300} height={300} />
            <p className="text-2xl mt-4">Black T-Shirt</p>
            
            <p className="text-2xl mt-4">$ 20.00</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-screen bg-white">

      </section>
    </main>
  )
}
