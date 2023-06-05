import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(
  process.env.DEBUG!
    ? process.env.STRIPE_TEST_SECRET_KEY!
    : process.env.STRIPE_LIVE_API_KEY!,
  {
    apiVersion: "2022-11-15",
    typescript: true,
  }
);

export async function GET(request: NextRequest) {
  try {
    const stripeProducts = await stripe.prices.list({
      expand: ["data.product"],
      limit: request.nextUrl.searchParams.get("items")
        ? Number(request.nextUrl.searchParams.get("items"))
        : 15,
      starting_after: request.nextUrl.searchParams.get("starting_after")
        ? String(request.nextUrl.searchParams.get("starting_after"))
        : undefined,
    });

    const products = stripeProducts.data.map((price) => {
      const product = price.product as Stripe.Product;
      return {
        id: product.id,
        active: product.active,
        created_at: product.created,
        price: {
          amount: price.unit_amount,
          currency: price.currency,
        },
        name: product.name,
        description: product.description,
        images: product.images,
      };
    });

    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
