'use server';
import { CustomersApi, Configuration, Customer, CustomerResponse } from "conekta";
import { NextRequest, NextResponse } from "next/server";


const apikey = process.env.CONEKTA_API_KEY;
const config = new Configuration({ accessToken: apikey });
const client = new CustomersApi(config);

const customer: Customer = {
    name: "John Constantine",
    email: "frank@google.com",
    phone: "+5215555555555"
}

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        const resp = await client.createCustomer(customer);
        // const customerResponse = resp.data as CustomerResponse;
        // return new NextResponse(customerResponse.id, { status: 200 });
        // return res.status(200).send(customerResponse.id);
    } catch (error) {
        console.error(error);
        return new NextResponse("Check console logs", { status: 500 });
        // return res.status(500).send("Error");
    }

    // return new NextResponse(JSON.stringify(customer), { status: 200 });
}
