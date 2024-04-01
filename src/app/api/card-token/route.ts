'use server';
import ConektaApi from "@/conekta/conektaApi";
import { NextRequest, NextResponse } from "next/server"
export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const { card } = await req.json();

        const resp = await ConektaApi.createToken(card);

        const cardResponse = resp.data;
        return Response.json(cardResponse);
    } catch (error) {
        console.error(error);
        return new NextResponse("Check console logs", { status: 500 });
    }
}
