'use server';
import { OrderResponse } from "conekta";
import { NextRequest, NextResponse } from "next/server"
import ConektaApi from "../../../conekta/conektaApi";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { order } = await req.json();
        const resp = await ConektaApi.createOrder(order);

        const orderResponse = resp.data as OrderResponse;
        return Response.json(orderResponse);
    } catch (error) {
        console.error(error);
        return new NextResponse("Check console logs", { status: 500 });
    }
}
