import Image from "next/image";
import { FaTrash } from "react-icons/fa";
import { Product } from "@/app/types/product";
import { CartEntry } from "use-shopping-cart/core";

export default function CartItem(item: CartEntry) {
  const { name, price, image } = item;

  return (
    <div className="flex items-center gap-4 mb-3">
      <div>
        {name}
      </div>
      <div className="ml-auto">{price}</div>
      <button className="hover:bg-emerald-50 transition-colors rounded-full duration-500 p-1">
        <FaTrash />
      </button>
    </div>
  );
}