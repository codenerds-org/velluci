import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { Product } from "@/app/types/product";
import { CartEntry, formatCurrencyString } from "use-shopping-cart/core";
import { useShoppingCart } from "use-shopping-cart";
import config from "@/../config.json";

export default function CartItem(item: CartEntry) {
  const { removeItem } = useShoppingCart();
  const { name, price, currency, image } = item;


  return (
    <div className="flex items-center gap-4 mb-3">
      <div className="flex flex-row gap-2 items-center">
        <Image src={image!} alt={name} width={100} height={100} className="h-12 w-8" />
        {name}
      </div>
      <div className="ml-auto">{formatCurrencyString({ value: price, currency: currency, language: config.locale })} x {item.quantity}</div>
      <button className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1 flex items-center" onClick={() => removeItem(item.id)}>
        <FaTrash />
      </button>
    </div>
  );
}
