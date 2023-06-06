export const dynamic = 'force-dynamic'

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
    const product = await stripe.products.retrieve(
      request.nextUrl.searchParams.get("id") as string
    );
    const price = await stripe.prices.retrieve(product.default_price as string);

    return NextResponse.json({
      id: product.id,
      active: product.active,
      created_at: product.created,
      price: {
        amount: price.unit_amount_decimal,
        currency: price.currency,
      },
      name: product.name,
      description: product.description,
      images: product.images,
    });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
