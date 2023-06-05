"use client";
import { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ShoppingCart from "./ShoppingCart";
import { useShoppingCart } from "use-shopping-cart";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { handleCartClick, cartCount, shouldDisplayCart } = useShoppingCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-screen justify-between z-50 flex flex-row uppercase transition duration-300 delay-50 ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex m-4">
        <a
          href="/"
          className="flex flex-row text-2xl md:text-4xl font-bold text-black"
        >
          Velluci
        </a>
      </div>
      <div className="sm:flex hidden m-4 gap-4">
        <a
          href="#new"
          className="flex flex-row md:text-2xl font-regular text-black"
        >
          New Arrivals
        </a>
        <a
          href="#about"
          className="flex flex-row md:text-2xl font-regular text-black"
        >
          About
        </a>
        <a
          href="#products"
          className="flex flex-row md:text-2xl font-regular text-black"
        >
          All Products
        </a>
      </div>
      <div className="flex m-4 gap-8">
        <a
          className="md:flex flex-row hidden text-2xl font-regular text-black cursor-pointer"
          onClick={() => handleCartClick()}
        >
          Cart ({cartCount})
        </a>
        <a
          className="md:hidden flex-row flex text-2xl font-regular text-black cursor-pointer"
          onClick={() => handleCartClick()}
        >
          <AiOutlineShoppingCart />
        </a>
        <ShoppingCart />
        {/* <Link href="/login">
                    <a className="md:flex flex-row hidden text-2xl font-regular text-black">
                        Login
                    </a>
                </Link> */}
      </div>
    </nav>
  );
};

export default NavBar;
