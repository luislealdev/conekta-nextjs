'use server';
import { Customer, CustomerResponse } from "conekta";
import { NextRequest, NextResponse } from "next/server"
import conektaCustomersApi from '../../../conekta/conektaApi';

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { name, email, phone } = await req.json();
        // console.log(req);
        const card = {
            name,
            email,
            phone
        }
        const resp = await conektaCustomersApi.createCustomer(customer);

        const customerResponse = resp.data as CustomerResponse;
        return Response.json(customerResponse);
    } catch (error) {
        console.error(error);
        return new NextResponse("Check console logs", { status: 500 });
    }
}
