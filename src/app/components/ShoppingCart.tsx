import Lottie from "react-lottie";
import animationData from "@/../public/lottie/empty-cart.json";
import { FormEvent, MutableRefObject, useRef, useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import CartItem from "@/app/components/CartItem";
import config from "@/../config.json";
import { useOnClickOutside } from "usehooks-ts";

const ShoppingCart = () => {
  const {
    shouldDisplayCart,
    cartCount,
    cartDetails,
    redirectToCheckout,
    totalPrice,
    handleCartClick,
  } = useShoppingCart();
  const [status, setStatus] = useState("idle");

  const cartRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(cartRef, () => shouldDisplayCart && handleCartClick());

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function handleClick(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (cartCount! > 0) {
      setStatus("loading");
      try {
        const result = await redirectToCheckout();
        if (result?.error) {
          console.error(result);
          setStatus("redirect-error");
        }
      } catch (error) {
        console.error(error);
        setStatus("redirect-error");
      }
    } else {
      setStatus("no-items");
    }
  }

  return (
    <div
      className={`bg-white flex flex-col absolute right-3 md:right-9 top-14 
            w-80 py-4 px-4 shadow-[0_5px_15px_0_rgba(0,0,0,.15)] rounded-md transition-opacity duration-500 ${
              shouldDisplayCart ? "opacity-100" : "opacity-0"
            }`}
      ref={cartRef}
    >
      {cartCount && cartCount > 0 ? (
        <>
          {Object.values(cartDetails ?? {}).map((entry) => (
            <CartItem key={entry.id} {...entry} />
          ))}
          <article className="mt-3 flex flex-col">
            <div className="text-red-700 text-xs mb-3 h-5 text-center">
              {totalPrice && totalPrice < 30
                ? `You must have at least ${config.currency}0.30 in your basket`
                : cartCount && cartCount > 20
                ? "You cannot have more than 20 items"
                : status === "redirect-error"
                ? "Unable to redirect to Stripe checkout page"
                : status === "no-items"
                ? "Please add some items to your cart"
                : null}
            </div>
            <button
              onClick={handleClick}
              className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 rounded-md w-100 disabled:bg-slate-300 disabled:cursor-not-allowed disabled:text-white"
              disabled={
                (totalPrice && totalPrice < 30) ||
                (cartCount && cartCount > 20) ||
                status == "no-items"
                  ? true
                  : false
              }
            >
              {status !== "loading" ? "Proceed to checkout" : "Loading..."}
            </button>
          </article>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center py-20">
          <Lottie
            options={defaultOptions}
            height={250}
            width={250}
            style={{
              userSelect: "none",
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -40%)",
            }}
          />
          <h2 className="text-3xl text-black mt-24">Your cart is empty</h2>
          <h3 className="text-lg text-black">Add some items to get started!</h3>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
