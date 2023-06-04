"use client";
import { BsMouse } from 'react-icons/bs'
import ProductCard from './components/ProductCard';
import { Product } from './types/product';
import useSWR from 'swr';
import LoadingPage from './components/Loading';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSWR<Product[]>("/api/stripe/products?limit=5", fetcher)
  if (error) return <div>Failed to load products</div>
  if (!data) return <LoadingPage />
  const latestProducts = data.slice(0, 5) || []

  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
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
      <section className="flex flex-col items-center min-h-screen bg-white">
        <h1 className="text-6xl uppercase mt-16">New arrivals</h1>
        <h2 className="text-2xl font-light">Check out our newest collection called &quot;Death&quot;</h2>
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {latestProducts.map((product, index) => (
            <ProductCard key={product.id} hideMobile={index >= 3} {...product} />
          ))}
        </div>
        <Link href="/products">
          <div className="flex flex-col items-center justify-center bg-gray-200/50 rounded-xl px-12 py-2 mt-8">
            <h2 className="text-4xl font-light">Check out more</h2>
          </div>
        </Link>
      </section>
      <section className="flex flex-col gap-8 md:gap-0 min-h-screen mt-24">
        <div className="flex flex-row justify-between ml-[7.5vw] gap-8">
          <div className="bg-present-pic-1 bg-cover h-[32rem] w-screen md:w-[28rem]"></div>
          <div className="flex flex-col mt-24 w-full">
            <p className="text-md md:text-xl font-light w-10/12 md:w-1/2">Embrace the allure of darkness with Velluci, the epitome of street-style luxury. We curate edgy and distinctive designs that redefine the boundaries of fashion. Step into a world where boldness meets attitude.</p>
          </div>
        </div>
        <div className="flex flex-row justify-between mr-[7.5vw] gap-8">
          <div className="flex flex-col mt-24 items-end text-right w-full">
            <p className="text-md md:text-xl font-light w-10/12 md:w-1/2">
            At Velluci, we are driven by a rebellious spirit that fuels our vision of street-style luxury. We blend urban aesthetics with uncompromising quality, creating pieces that make a powerful statement. Join us in embracing the darker side of fashion, where individuality and self-expression reign supreme.
            </p>
          </div>
          <div className="bg-present-pic-2 bg-cover h-[32rem] w-screen md:w-[28rem]"></div>
        </div>
      </section>
      <section className="flex flex-col items-center min-h-screen bg-white my-12">
        <h1 className="text-6xl uppercase mt-16">All Products</h1>
        <h2 className="text-2xl font-light">Check out our newest collection called &quot;Death&quot;</h2>
            <div className="grid grid-cols-1 md:grid-cols-4">
              {data.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
      </section>
    </main>
  )
}