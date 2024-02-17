import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import CreateStripeSession from "./create-stripe-session";
import { simpleItem } from "../pages/important-pages/shop";
const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = loadStripe(publishableKey);

export const CreateCheckOutSession = async () => {
  const stripe = await stripePromise;
  // const checkoutSession = await axios.post(CreateStripeSession, {
  //   simpleItem: simpleItem,
  // });

  const checkoutSession = await axios.post(CreateStripeSession, simpleItem);
  const result = await stripe.redirectToCheckout({
    sessionId: checkoutSession.data.id,
  });
  if (result.error) {
    alert(result.error.message);
  }
};
