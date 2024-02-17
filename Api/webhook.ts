// import type { NextApiRequest,NextApiResponse } from "next";
// import Stripe from "stripe";
// import getRawBody from "raw-body";
// const stripe = new Stripe (process.env.STRIPE_SECRET_KEY as string, {
// apiVersion: "2023-08-16",

// })
// const endpointSecret = process.env.WEBHOOK_SECRET as string

// export const config = {
//     api:{
//         bodyParser: false 
//     }
// }

// export default async function handler (
//     req : NextApiRequest,
//     res : NextApiResponse
// ){
//  try {
// console.log("req.headers", req.headers);
// if (req.method !== "POST")
// return res.status(405).send("Only POST requests allowed")
// const sig : any = req.headers["stripe.signature"];
// const rawBody = await getRawBody(req);

// let event

// try {
//     event = stripe.webhooks.constructEvent(rawBody,sig,endpointSecret)
// } catch (err :any){
// return res.status(400).send('webhook Error:$(err.mesage)')
//  }

// console.log("event.type",JSON.stringify(event.type))

// if(event.type === "chechout.session.completed"){
//     const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
//        (event.data.object as any).id,
//        {
//         expand : ["line_items"],
//        }
//     );
//     const lineItems = sessionWithLineItems.line_items;
//     if(lineItems) return res.status(500).send('internal server error')
//     try{
// console.log ("Fulfill the order wity custom logic")
// console.log("data", lineItems.data)
// console.log("customer email", (event.data.object as any).customer_details.email);
// console.log("created", (event.data.object as any). created);
//     } catch(error){
//         console.log("Handling when you are unable to save an order")
//     }
    
// }
//  res.status(200).end()
//  } catch (error){
// console.error(error)
// res.status(500).json("Internal server error")
//  }
// }