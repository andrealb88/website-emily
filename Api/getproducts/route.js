import Stripe, { Stripe } from "stripe";
import { NextResponse } from "next/server";

export async function GET() {
  const stripe = new Stripe("process.env.STRIPE_SECRET_KEY");
  const prices = await stripe.prices.list({ limit: 1 });
  return NextResponse.jason(prices.data.reverse());
}