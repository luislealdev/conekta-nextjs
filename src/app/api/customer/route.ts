'use server';
import { CustomersApi, Configuration, Customer, CustomerResponse } from "conekta";
import { NextRequest, NextResponse } from "next/server"


const apikey = process.env.CONEKTA_API_KEY;
const config = new Configuration({ accessToken: apikey });
const client = new CustomersApi(config);


export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, email, phone } = await req.json();

        // console.log(req);
        const customer: Customer = {
            name,
            email,
            phone
        }
        const resp = await client.createCustomer(customer);
        const customerResponse = resp.data as CustomerResponse;
        return Response.json(customerResponse);
        // return res.status(200).send(customerResponse.id);
    } catch (error) {
        console.error(error);
        return new NextResponse("Check console logs", { status: 500 });
        // return res.status(500).send("Error");
    }

    // return new NextResponse(JSON.stringify(customer), { status: 200 });
}
