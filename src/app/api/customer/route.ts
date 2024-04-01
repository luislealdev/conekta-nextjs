'use server';
import ConektaApi from "@/conekta/conektaApi";
import { Customer, CustomerResponse } from "conekta";
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, email, phone } = await req.json();
        // console.log(req);
        const customer: Customer = {
            name,
            email,
            phone
        }
        const resp = await ConektaApi.createCustomer(customer);

        const customerResponse = resp.data as CustomerResponse;
        return Response.json(customerResponse);
    } catch (error) {
        console.error(error);
        return new NextResponse("Check console logs", { status: 500 });
    }
}
