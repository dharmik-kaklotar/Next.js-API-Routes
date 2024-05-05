import { NextResponse } from "next/server";
import { users } from "@/utils/users";

export function GET() {
    try {
        return NextResponse.json({ result: users, success: true }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ result: "something went wrong on server" }, { status: 500 });
    }
}

export async function POST(req) {
    let payload = await req.json();
    if (payload.name && payload.age && payload.email) {
        if (payload.age >= 10) {
            console.log(payload);
            return NextResponse.json({ result: "user Created", success: true }, { status: 201 });
        } else {
            return NextResponse.json({ result: "Invalid Age", success: false }, { status: 500 });
        }
    } else {
        return NextResponse.json({ result: "All feilds are required", success: false }, { status: 400 });
    }
}