import clientPromise from "@/lib/MongodbClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const bcrypt = require('bcrypt');

        const hashedPassword = await bcrypt.hash(password, 10);

        const client = await clientPromise;
        const db = client.db();
        
        const createAccount = await db
        .collection('users')
        .insertOne({ email, password: hashedPassword });

        return NextResponse.json({success: "Account Created"}, 
        { status: 200 }
        );
    }
    catch (err: any) {
        return NextResponse.json({error: err.message}, 
            { status: 500 }
            );
    }
}