"use client";
import React, { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";
import config from "../../../config.json";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ children }: { children: ReactNode }) => (
    <CartProvider
        mode="payment"
        cartMode="client-only"
        stripe={process.env.DEBUG ? process.env.STRIPE_TEST_API_KEY! : process.env.STRIPE_LIVE_API_KEY!}
        successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
        cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
        currency={config.currency!}
        allowedCountries={['US', 'GB']}
        billingAddressCollection={true}
        shouldPersist={true}
    >
        <>{children}</>
    </CartProvider>
);

export default Cart;