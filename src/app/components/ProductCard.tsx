import Link from "next/link";
import { Product } from "../types/product";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import config from "../../../config.json";

type Props = Product & {
  hideMobile?: boolean;
};

const ProductCard = (props: Props) => {
  const { addItem } = useShoppingCart();
  const product = props as Product;
  const hideMobile = props.hideMobile || false;

  const addToCart = () => {
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price.amount,
        currency: product.price.currency,
        image: product.images[0],
      },
      { count: 1 }
    );
  };

  const price = formatCurrencyString({
    value: product.price.amount,
    currency: config.currency,
    language: config.locale,
  });

  return (
    <div
      className={`flex flex-col items-center ${
        hideMobile ? "hidden md:flex" : "flex"
      }`}
    >
      <Link href={`/products/${product.id}`}>
        <div className="w-80 h-[26rem] md:w-[16vw] md:h-[45vh]">
          <Image
            src={product.images[0]}
            height={416}
            width={320}
            alt="Product image"
            className="h-full w-full object-cover"
          />
        </div>
      </Link>
      <Link href={`/products/${product.id}`}>
        <p className="text-3xl mt-4 cursor-pointer hover:underline transition">
          {product.name}
        </p>
      </Link>
      <p className="text-2xl">{price}</p>
    </div>
  );
};

export default ProductCard;
