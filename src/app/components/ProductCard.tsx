import Link from "next/link";
import { Product } from "../types/product";
import { formatCurrencyString } from "use-shopping-cart";

type Props = Product & {
    hideMobile?: boolean
}

const ProductCard = (props: Props) => {
    const product = props as Product
    const hideMobile = props.hideMobile || false
    
    const price = formatCurrencyString({ value: product.price.amount, currency: process.env.CURRENCY || "USD", language: 'en-US' })

    return (
        <div className={`flex flex-col items-center ${hideMobile ? 'hidden md:flex' : 'flex'}`}>
            <Link href={`/products/${product.id}`}>
                <div className="w-80 h-[26rem] md:w-[16vw] md:h-[45vh]">
                    <img src={product.images[0]} className="h-full w-full object-cover" />
                </div>
            </Link>
            <Link href={`/products/${product.id}`}>
                <p className="text-3xl mt-4 cursor-pointer hover:underline transition">{product.name}</p>
            </Link>
            <p className="text-2xl">{price}</p>
        </div>
    )
}

export default ProductCard;