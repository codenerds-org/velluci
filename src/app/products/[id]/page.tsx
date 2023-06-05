"use client";
import LoadingPage from "@/app/components/Loading";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Product({ params }: { params: { id: string } }) {
    const { data, error } = useSWR(`/api/stripe/product?id=${params.id}`, fetcher);
    if (error) return <div>Failed to load product</div>
    if (!data) return <LoadingPage />

    console.log(data)

    return (
        <main className="min-h-screen">
            <div className="flex flex-row items-center">
                <Image src={data.images[0]} alt={data.name} width={500} height={500} />
            </div>
        </main>
    )
}