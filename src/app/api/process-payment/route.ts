'use server';
import ConektaApi from "@/conekta/conektaApi";
import { NextRequest, NextResponse } from "next/server"
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { order: initialOrder } = await req.json();

        // Create customer
        const customerResponse = await ConektaApi.createCustomer(initialOrder.customer);
        const { id: customerId } = customerResponse.data;

        // Create card token
        const cardResponse = await ConektaApi.createToken(initialOrder.card);
        const { id: tokenId } = cardResponse.data;

        const order = {
            ...initialOrder,
            customer_info: {
                customer_id: customerId
            },
            charges: [
                {
                    payment_method: {
                        type: initialOrder.type,
                        token_id: tokenId
                    }
                }
            ]
        }

        // Create order
        const orderResponse = await ConektaApi.createOrder(order);
        return Response.json(orderResponse.data);
    } catch (error) {
        console.error(error);
        return new NextResponse("Check console logs", { status: 500 });
    }
}
