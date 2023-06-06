"use client";
import LoadingPage from "@/app/components/Loading";
import Image from "next/image";
import useSWR from "swr";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import config from "@/../config.json";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const sizes = ["XS", "S", "M", "L", "XL"];

export default function Product({ params }: { params: { id: string } }) {
  const { addItem } = useShoppingCart();
  const { data, error } = useSWR(
    `/api/stripe/product?id=${params.id}`,
    fetcher
  );
  if (error) return <div>Failed to load product</div>;
  if (!data) return <LoadingPage />;


  const handleAddToCart = () => {
    const prod = {
      name: data.name,
      description: data.description,
      id: data.id,
      price: data.price.amount,
      currency: data.price.currency,
      image: data.images[0],
    }

    addItem(prod);
  };

  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-4 md:flex-row md:gap-0 items-center pt-16 justify-around">
        <Image src={data.images[0]} alt={data.name} width={500} height={500} />
        <div className="flex flex-col items-center justify-center mx-6 md:mx-0 md:w-1/2">
          <h1 className="text-6xl uppercase">{data.name}</h1>
          <h2 className="text-2xl font-light">{data.description}</h2>
          <div className="flex flex-row items-center justify-between w-full my-6 md:my-0">
            <select className="text-2xl">
              {sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
            <h2 className="text-4xl font-light">{formatCurrencyString({ value: data.price.amount, currency: data.price.currency, language: config.locale })}</h2>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-200/50 hover:bg-gray-200 transition rounded-xl px-12 py-2 my-8 cursor-pointer" onClick={handleAddToCart}>
            <h2 className="text-4xl font-light">Add to cart</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
