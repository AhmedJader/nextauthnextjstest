import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        console.log({email, password});
    }
    catch (err: any) {
        console.log(err.message)
    }
}